import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React, { useState } from 'react';
const userID = localStorage.getItem('userID')


const UploadImage = () => {
  const [fileList, setFileList] = useState([]);
  const [fileObj, setFileObj] = useState({})
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    // const formData = new FormData();
    // formData.append('image_local', fileObj)
    // fileList.forEach((file) => {
    //   formData.append('files[]', file);
    // });
    const imageObj = {
              'image_local': fileObj
    }
    setUploading(true); // You can use any AJAX library you like

    console.log(imageObj);
    const url = `http://127.0.0.1:8000/accounts/upload-profile-image/${userID}/`;
    fetch(url, {
      method: 'PUT',
      headers: {'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',},
      body: JSON.stringify(imageObj)
    })
      .then((res) =>{
        console.log('res success', res);
        res.json()})
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      setFileObj(file)
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload {...props}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
};

export default UploadImage;