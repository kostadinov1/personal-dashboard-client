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
import { createActivity } from '../../services/activities/createActivity';
import { getActivityTypes } from '../../services/activityTypes/getActivityTypes';
import { getAllExercises } from '../../services/exercises/getAllExercises';
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
const CreateActivity = () => {

  const userID = localStorage.getItem('userID')
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const [activityTypes, setActivityTypes] = useState([])
  const [exercises, setExercises] = useState([])

  useEffect(()=>{
    getActivityTypes()
    .then((res) => {setActivityTypes(res)})
    .catch((res) => {console.log('response in ERROR:', res);})
}, [])


  useEffect(()=>{
    getAllExercises()
    .then((res) => {
      setExercises(res)
      console.log('response in SUCCESS:', res);
    })
    .catch((res) => {
      console.log('response in ERROR:', res);
    })
  }, [])

  // Goals
  // useEffect(()=>{
  //   getActivityTypes()
  //   .then((res) => {
  //     setActivityTypes(res)
  //     console.log('response in SUCCESS:', res);
  //   })
  //   .catch((res) => {
  //     console.log('response in ERROR:', res);
  //   })
  // }, [])

  // Micro Cycle
  // useEffect(()=>{
  //   getActivityTypes()
  //   .then((res) => {
  //     setActivityTypes(res)
  //     console.log('response in SUCCESS:', res);
  //   })
  //   .catch((res) => {
  //     console.log('response in ERROR:', res);
  //   })
  // }, [])


  const onFinish = (values) => {
    createActivity(userID, accessToken, values)
    .then((res) => {
      navigate('/show-activities')
      console.log(res);})
    .catch((res) => { console.log(res);})
  };

  return (
    <>
    <PageHeader
        className="site-page-header"
        onBack={() => navigate('/show-activities')}
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
      <Form.Item label="Create Form">
        <span className="ant-form-text">Activity</span>
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

       
      <Form.Item label="Pace">
        <Form.Item name="pace" noStyle>
          <InputNumber min={1} max={500} />
        </Form.Item>
        <span className="ant-form-text"> mins per 1km</span>
      </Form.Item>
      <Form.Item label="Speed">
        <Form.Item name="speed" noStyle>
          <InputNumber min={1} max={50} />
        </Form.Item>
        <span className="ant-form-text"> kmph</span>
      </Form.Item>
      <Form.Item label="Heart Rate">
        <Form.Item name="heart_rate" noStyle>
          <InputNumber min={1} max={700} />
        </Form.Item>
        <span className="ant-form-text"> bpm</span>
      </Form.Item>
      <Form.Item label="RPE">
        <Form.Item name="rpe" noStyle>
          <InputNumber min={1} max={2000} />
        </Form.Item>
        <span className="ant-form-text"> points</span>
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
           {activityTypes.map((el) => <Option key={el.id} value={el.id}>{el.id}</Option>)}
        </Select>
      </Form.Item>


      <Form.Item
        name="exercises"
        label="Exercises"
        hasFeedback
      >
        <Select placeholder="Please select exercise type">
           {exercises.map((el) => <Option key={el.id} value={el.id}>{el.name}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        name="goal"
        label="Goal"
        hasFeedback
      >
        <Select placeholder="Please select exercise type">
           {activityTypes.map((el) => <Option  key={el.id} value={el.id}>{el.id}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        name="micro_cycle"
        label="Micro Cycle"
        hasFeedback
      >
        <Select placeholder="Please select exercise type">
           {activityTypes.map((el) => <Option  key={el.id} value={el.id}>{el.id}</Option>)}
        </Select>
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
          Create Activity
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreateActivity;