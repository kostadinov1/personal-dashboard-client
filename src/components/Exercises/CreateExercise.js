import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createExercise } from '../../services/exercises/createExercise';
import { getExerciseTypes } from '../../services/exercises/getExerciseTypes';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
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
const CreateExercise = () => {

  const userID = localStorage.getItem('userID')
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const [exerciseTypes, setExerciseTypes] = useState([])

  useEffect(()=>{
    getExerciseTypes()
    .then((res) => {
      setExerciseTypes(res)
      console.log('response in SUCCESS:', res);
    })
    .catch((res) => {
      console.log('response in ERROR:', res);
    })
}, [])


  const onFinish = (values) => {
    createExercise(userID, accessToken, values)
    .then((res) => { console.log(res);})
    .catch((res) => { console.log(res);})
    

  };

  return (
    <>
    <PageHeader
        className="site-page-header"
        onBack={() => navigate('/show-exercises')}
        title="Back"
        subTitle="to Exercises"
    />    
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text">China</span>
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: false,
            message: 'Please input Name!',
          },
        ]}
      >
        <Input placeholder={'Please input Name'} />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
      >
        <TextArea placeholder={'Please Describe the Exercise'} />
      </Form.Item>

      <Form.Item
        name="cues"
        label="Cues"
      >
        <TextArea placeholder={'Please enter your cues'} />
      </Form.Item>

      <Form.Item
        name="type"
        label="Type"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select exercise type!',
          },
        ]}
      >
        <Select placeholder="Please select exercise type">
           {exerciseTypes.map((el) => <Option value={el.id}>{el.id}</Option>)}
        </Select>
      </Form.Item>


      
      <Form.Item label="Reps">
        <Form.Item name="reps" noStyle>
          <InputNumber min={1} max={500} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="Sets">
        <Form.Item name="sets" noStyle>
          <InputNumber min={1} max={50} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="Weights in Kg">
        <Form.Item name="weights_in_kg" noStyle>
          <InputNumber min={1} max={700} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="Calories Burned">
        <Form.Item name="calories_burnes" noStyle>
          <InputNumber min={1} max={2000} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="Breaks">
        <Form.Item name="breaks_in_seconds" noStyle>
          <InputNumber min={1} max={600} />
        </Form.Item>
        <span className="ant-form-text"> seconds</span>
      </Form.Item>

{/* 
      <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[
          {
            required: true,
            message: 'Please pick an item!',
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="long"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}
       <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Edit Profile
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreateExercise;