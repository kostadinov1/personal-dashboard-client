import { SmileOutlined } from '@ant-design/icons';
import { Button, Divider,  Result } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar'

const activitySteps = [
  {
    title: 'Create Activity',
    content:   <Result
    icon={<SmileOutlined />}
    title="First create your activity"
    extra={<Link to='/create-activity'>
      <Button
      type='primary'
      shape='round'
      >Create ACtivity
      </Button>
      </Link>}
  />,
  },
  {
    title: 'Add Exercises',
    content:   <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />,
  },
  {
    title: 'Done',
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

function Home() {

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
