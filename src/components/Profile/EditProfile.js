import { Button, DatePicker, Form, Input,  Select, Image, PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { editProfileService } from '../../services/profile/editProfileService';
import { showProfileService } from '../../services/profile/showProfileService';
import moment from 'moment';
import UploadImage from '../Upload/UploadProfileImage';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const EditProfile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const userID = localStorage.getItem('userID')
  const accessToken = localStorage.getItem('accessToken')

  const [profile, setProfile] = useState({})

  // Update Profile
  useEffect(() => {
    showProfileService(userID, accessToken)
    .then(res => {
      setProfile(res)})
    .catch(err => console.log(err))
  }, [userID, accessToken])

  // Handle Form
  const onFinish = (values) => {
    values["dob"] = moment(values.dob).format("YYYY-MM-DD")
    for (let value in values) {
      console.log(value);
    }
    editProfileService(userID, accessToken,  values)
    .then((res) => {
      setProfile(res)
      navigate('/show-profile/')})
    .catch(err => console.log(err))
  };

  return (
    <>
     <PageHeader
    className="site-page-header"
    onBack={() => navigate('/show-profile')}
    title="Back"
    subTitle="This is a subtitle"
  />
    <Image src={profile.image_local} width={'200px'}></Image>
    <UploadImage ></UploadImage>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['Bulgaria' ],
        prefix: '359',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="first_name"
        label="First Name"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: false,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input placeholder={`${profile.first_name}`} />
      </Form.Item>

      <Form.Item
        name="last_name"
        label="Last Name"
        
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: false,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input placeholder={`${profile.last_name}`} />
      </Form.Item>
      
      <Form.Item
        name="dob"
        label="Date of Birth"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: false,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <DatePicker
        bordered='true'
        allowClear='true'
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
      >
        <Select placeholder={`${profile.gender}`}>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="LGBT+">LGBT+</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: false,
            message: 'Please enter number only!',
          },
        ]}
      >
        <Input
          placeholder={`${profile.phone}`}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="image_url"
        label="Link to Your Image"
        rules={[
          {
            required: false,
            message: 'Please enter Valid URL!',
          },
        ]}
      >
        <Input
          placeholder={`${profile.image_url}`}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Edit Profile
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default EditProfile;