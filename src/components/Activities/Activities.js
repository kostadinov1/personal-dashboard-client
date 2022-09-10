import { Divider, Avatar, List, Button,   Popconfirm } from 'antd';
import {   EditFilled, } from '@ant-design/icons';
import {  } from 'antd';
import { Pie } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import { getAllActivities } from '../../services/activities/getAllActivities';
import { Link, useNavigate } from 'react-router-dom';
import { deleteActivity} from '../../services/activities/deleteActivity'
import DeleteActivity from './DeleteActivity';


const Activities = () => {

  const [activities, setActivities] = useState()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);




  useEffect(() => {
    getAllActivities()
    .then((res) => {
      setActivities(res)
      console.log(res)})
    .catch((res) => {console.log(res)})
  }, [])

  const runs = activities ? activities.filter((a) => a.type === 1).length : 0

  const pushPullValue = 4;   
  // Pie Chart Data
  const data = [
    {
      type: 'Push Pull',
      value: pushPullValue,
    },
    {
      type: 'Run',
      value: runs,
    },
    {
      type: 'Swim',
      value: 18,
    },
    {
      type: 'Bike',
      value: 15,
    },
    {
      type: 'Hike',
      value: 10,
    },
    {
      type: 'Yoga',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  const createExerciseHandler = (e) => {
    e.preventDefault()
    navigate('/create-activity')
  }

  return (
  <>
    <Pie {...config} />;
    <Divider orientation="left"></Divider>

    <Button onClick={createExerciseHandler} type="primary" block>
      Create Activity
    </Button>
    <Divider orientation="left">Activities</Divider>

    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={activities}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.name}
        actions={[
          <Link to={`/edit-activity/${item.id}`}>
            <Button 
              type="primary" 
              shape="round" 
              icon={<EditFilled />} 
              size={'small'}>
                Edit
            </Button>
          </Link>,

          <DeleteActivity item={item}></DeleteActivity>
//   <Link to={`/delete-activity/${item.id}`}>
        //   <Button 
        //     type="primary" 
        //     shape="round" 
        //     icon={<EditFilled />} 
        //     size={'small'}>
        //       Delete
        //   </Button>
        // </Link>,


        ]}
        extra={
          <img
            width={150}
            height={130}
            alt="logo"
            src={item.image}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={<Link to={'/'}>{item.name}</Link>}
        description={`Type: ${item.type}`}
        />
        {item.description}
      </List.Item>
    )}
  />
  </>
  )
};


export default Activities;



