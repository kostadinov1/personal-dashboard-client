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

      <Menu.Item key="2" icon={<LineChartOutlined />}>
            <Link to='/dashboard'>Dashboard</Link>
          </Menu.Item>

      <Menu.SubMenu title='Periodization' key='10' icon={<PieChartOutlined />}>

          <Menu.Item key="11" icon={<PieChartOutlined />}>
            <Link to='/periodization'>Periodization</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<PieChartOutlined />}>
            <Link to='/statistics'>MacroCycles</Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<PieChartOutlined />}>
            <Link to='/statistics'>MesoCycles</Link>
          </Menu.Item>
          <Menu.Item key="14" icon={<PieChartOutlined />}>
            <Link to='/statistics'>MicroCycles</Link>
          </Menu.Item>
        
      </Menu.SubMenu>

      <Menu.Item key="3" icon={<PieChartOutlined />}>
            <Link to='/activities'>All Activities</Link>
          </Menu.Item>


      <Menu.Item key="4" icon={<PieChartOutlined />}>
            <Link to='/show-exercises'>Exercises</Link>
          </Menu.Item>
      <Menu.Item key="5" icon={<QuestionCircleOutlined/>}>
        <Link to='/about'>About</Link>
      </Menu.Item>

      <Menu.Item key="6" icon={<PhoneOutlined/>}>
        <Link to='/contacts'>Contacts</Link>
      </Menu.Item>

    </Menu>
  )
}

export default MenuBar
