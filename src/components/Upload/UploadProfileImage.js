import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UploadImage = () => {
  const [fileList, setFileList] = useState([]);
  const [fileObj, setFileObj] = useState({})
  const [uploading, setUploading] = useState(false);
  const userID = localStorage.getItem('userID')
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()


  const handleUpload = () => {
    setFileList(fileList);   
    const formData = new FormData();
    formData.append('user', userID)
    formData.append('image_local', fileObj)

    setUploading(true);
    const url = `http://127.0.0.1:8000/accounts/upload-profile-image/${userID}/`;
    fetch(url, {
      method: 'put',
      headers: {'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
      'Content-Disposition': `attachment; filename=${fileObj.name}`,
      'Authorization': ' Token ' + accessToken.slice(1, 41)
    },

      body: fileObj
    })
      .then((res) =>{
        console.log('res success', res);
        res.json()})
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
        navigate('/show-profile')
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
      <Upload
      listType='picture'
      {...props}
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