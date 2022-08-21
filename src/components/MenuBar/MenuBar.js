import React, { useState } from 'react'
import {
  HomeFilled,
    LineChartOutlined,
    PhoneFilled,
    PieChartOutlined,
    QuestionCircleFilled,
    UserOutlined,
    } from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PandaIcon } from '../Icons/icons';

function MenuBar() {

    // const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu theme="dark" mode="inline">

      <Menu.Item key="1" icon={<HomeFilled/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>

      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      
      <Menu.Item key="98" icon={<UserOutlined />}>
        <Link to='/register'>Register</Link>
      </Menu.Item>

      <Menu.Item key="99" icon={<UserOutlined />}>
        <Link to='/login'>Login</Link>
      </Menu.Item>      

      <Menu.SubMenu title='Periodization' key='10' icon={<PieChartOutlined />}>
          <Menu.Item key="11" icon={<LineChartOutlined />}>
            <Link to='/periodization'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<PieChartOutlined />}>
            <Link to='/create-activity'>Create</Link>
          </Menu.Item>          
      </Menu.SubMenu>

      <Menu.SubMenu title='Activities' key='20' icon={<PieChartOutlined />}>
          <Menu.Item key="21" icon={<PandaIcon />}>
            <Link to='/activities'>All Activities</Link>
          </Menu.Item>
          <Menu.Item key="22" icon={<PieChartOutlined />}>
            <Link to='/create-activity'>Create Activity</Link>
          </Menu.Item>          
      </Menu.SubMenu>

      <Menu.SubMenu title='Exercises' key='30' icon={<PieChartOutlined />}>
          <Menu.Item key="31" icon={<PieChartOutlined />}>
            <Link to='/exercises'>Exercises</Link>
          </Menu.Item>
          <Menu.Item key="32" icon={<PieChartOutlined />}>
            <Link to='/create-exercise'>Create Exercise</Link>
          </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="3" icon={<QuestionCircleFilled/>}>
        <Link to='/about-us'>About Us</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<PhoneFilled/>}>
        <Link to='/Contacts'>Contacts</Link>
      </Menu.Item>

    </Menu>

  )
}

export default MenuBar
