import { Col, Divider, Row, Space, Avatar, List,  } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import {  } from 'antd';
import { Pie } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import { getAllActivities } from '../../services/activities/getAllActivities';
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Activities = () => {
  const [activities, setActivities] = useState()

  const pushPullValue = 4;   

  const data = [
    {
      type: 'Push Pull',
      value: pushPullValue,
    },
    {
      type: 'Run',
      value: 25,
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

  useEffect(() => {
    getAllActivities()
    .then((res) => {
      setActivities(res)
      console.log(res)})
    .catch((res) => {console.log(res)})
  }, [])

  return (
  <>
    <Pie {...config} />;

    <Divider orientation="left">sub-element align left</Divider>

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
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.image}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
  </>
  )
};

export default Activities;



