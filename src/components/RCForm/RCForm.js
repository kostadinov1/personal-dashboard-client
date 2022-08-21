import { Button, Form, Input, Space } from 'antd';
import React, { useState } from 'react';

const CustomizedForm = ({ onChange, fields }) => (
    
    <Form
    name="basic"
    fields={fields}
    autoComplete="off"
    // layout="inline"
    labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFieldsChange={(_, allFields) => {
                onChange(allFields);
            }}
            >
    <Form.Item
      name="email"
      label="email"
      rules={[
          {
              required: true,
          message: 'Email is required!',
        },
    ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="password"
      label="password"
      rules={[
          {
              required: true,
              message: 'Password is required!',
            },
        ]}
        >
      <Input />
    </Form.Item>
    <Form.Item
      name="repass"
      label="Repeat Password!"
      rules={[
          {
              required: true,
              message: 'Password is required!',
            },
      ]}
      >
      <Input />
    </Form.Item>

    <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
  </Form>
);



const RCForm = () => {

    const [fields, setFields] = useState([
        {
            name: [''],
            value: '',
        },
    ]);

    return (
        <Space>
        <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
        />
        </Space>
        );
};

export default RCForm;
