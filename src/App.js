import 'antd/dist/antd.css';import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import {
DesktopOutlined,
FileOutlined,
PieChartOutlined,
TeamOutlined,
UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Periodization from './components/Periodization/Periodization';
import MenuBar from './components/MenuBar/MenuBar';
const { Header, Content, Footer, Sider } = Layout;


function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">

    <Layout style={{ minHeight: '100vh', }} >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MenuBar/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, }} />
        <Content style={{ margin: '0 16px', }} >
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/periodization' element={<Periodization />}/>
    
            </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
