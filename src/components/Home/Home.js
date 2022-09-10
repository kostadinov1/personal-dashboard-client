import { UserOutlined } from '@ant-design/icons';
import { Button, Divider, PageHeader, Result } from 'antd';
import React from 'react'
import ProgressBar from './ProgressBar'

const pageHeaderStyles =  {
  border:['1px', 'solid', 'rgb(235, 237, 240)']
}


function Home() {
  const activitySteps = [
    {
      title: 'First',
      content: 'Create Activity',
    },
    {
      title: 'Second',
      content: 'Create Exercises If Needed',
    },
    {
      title: 'Last',
      content:   <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />,
    },
  ];

  const cyclesSteps = [
    {
      title: 'First',
      content: 'Create Macro Cycle for the hole Year',
    },
    {
      title: 'Second',
      content: 'Create Meso Cycles for each 2-4 months',
    },
    {
      title: 'Third',
      content: 'Create Micro Cycle for every single Week',
    },
    {
      title: 'Last',
      content:   <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />,
    },
  ];

  return (

    <>

      <Divider orientation='left'>How to Create Activity</Divider>
      <ProgressBar steps={activitySteps}></ProgressBar>
      <Divider orientation='left'>How to Create Periodization</Divider>
      <ProgressBar steps={cyclesSteps}></ProgressBar>

    </>
  )
}

export default Home
