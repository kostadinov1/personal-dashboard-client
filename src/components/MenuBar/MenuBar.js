import React, { useState } from 'react'
import {
  HomeFilled,
    LineChartOutlined,
    PieChartOutlined,
    ProfileFilled,
    } from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PandaIcon } from '../Icons/icons';

function MenuBar() {

    const [collapsed, setCollapsed] = useState(false);

  return (

    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<HomeFilled/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<ProfileFilled />}>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.SubMenu title='Periodization'  icon={<PieChartOutlined />}>
          <Menu.Item key="11" icon={<LineChartOutlined />}>
            <Link to='/periodization'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<PieChartOutlined />}>
            <Link to='/create-activity'>Create</Link>
          </Menu.Item>          
      </Menu.SubMenu>

      <Menu.SubMenu title='Activities'  icon={<PieChartOutlined />}>
          <Menu.Item key="11" icon={<PandaIcon />}>
            <Link to='/activities'>All Activities</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<PieChartOutlined />}>
            <Link to='/create-activity'>Create Activity</Link>
          </Menu.Item>          
      </Menu.SubMenu>

      <Menu.SubMenu title='Exercises'  icon={<PieChartOutlined />}>
          <Menu.Item key="21" icon={<PieChartOutlined />}>
            <Link to='/exercises'>Exercises</Link>
          </Menu.Item>
          <Menu.Item key="22" icon={<PieChartOutlined />}>
            <Link to='/create-exercise'>Create Exercise</Link>
          </Menu.Item>
      </Menu.SubMenu>

    </Menu>

  )
}

export default MenuBar
