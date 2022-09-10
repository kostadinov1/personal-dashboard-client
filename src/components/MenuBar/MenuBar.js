import {
    HomeFilled,
    LineChartOutlined,
    PhoneOutlined,
    PieChartOutlined,
    QuestionCircleOutlined,
    UserOutlined,
    } from '@ant-design/icons';

    
    import { Menu } from 'antd';
    import { Link } from 'react-router-dom';
    
    function MenuBar() {
  return (
    <Menu theme="dark" mode="inline">

      <Menu.Item key="1" icon={<HomeFilled/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>

      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to='/show-profile'>Profile</Link>
      </Menu.Item>

 

      <Menu.SubMenu title='Periodization' key='10' icon={<PieChartOutlined />}>
          <Menu.Item key="11" icon={<LineChartOutlined />}>
            <Link to='/periodization'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<PieChartOutlined />}>
            <Link to='/periodization-v2'>Periodization</Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<PieChartOutlined />}>
            <Link to='/statistics'>Cycles</Link>
          </Menu.Item>
        
      </Menu.SubMenu>

      <Menu.SubMenu title='Activities' key='20' icon={<PieChartOutlined />}>
          <Menu.Item key="21" icon={<PieChartOutlined />}>
            <Link to='/activities'>All Activities</Link>
          </Menu.Item>
          <Menu.Item key="22" icon={<PieChartOutlined />}>
            <Link to='/create-activity'>Create Activity</Link>
          </Menu.Item>          
      </Menu.SubMenu>

      <Menu.SubMenu title='Exercises' key='30' icon={<PieChartOutlined />}>
          <Menu.Item key="31" icon={<PieChartOutlined />}>
            <Link to='/show-exercises'>Exercises</Link>
          </Menu.Item>
          <Menu.Item key="32" icon={<PieChartOutlined />}>
            <Link to='/create-exercise'>Create Exercise</Link>
          </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="3" icon={<QuestionCircleOutlined/>}>
        <Link to='/about'>About</Link>
      </Menu.Item>

      <Menu.Item key="4" icon={<PhoneOutlined/>}>
        <Link to='/contacts'>Contacts</Link>
      </Menu.Item>

    </Menu>
  )
}

export default MenuBar
