import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';
import React, { } from 'react';
import { useNavigate } from 'react-router-dom';

import { createProfileService } from '../../services/profile/createProfileService'


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
  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const navigate = useNavigate()
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    createProfileService(values).then(res => {
      navigate('/show-profile/')
    })
  };

  return (
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
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input />
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
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input />
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
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
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
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          placeholder='Enter Phone Number'
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

    </Form>
  );
};

export default EditProfile;