import 'antd/dist/antd.css';import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';

import { Layout } from 'antd';
import React, { useState } from 'react';
import Periodization from './components/Periodization/Periodization';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Authentication/Login';
import { useLocalStorage } from './hooks/useLocalStorage'
import { AuthContext } from './contexts/AuthContext';
import Register from './components/Authentication/Register';
import Activities from './components/Activities/Activities';
import RCForm from './components/RCForm/RCForm';
const { Header, Content, Footer, Sider }  = Layout;



function App() {

  const [collapsed, setCollapsed] = useState(false);

  const [accessToken, setAccessToken] = useLocalStorage('userToken',{accessToken:''})

  const onLogin = (token) => {
    setAccessToken(token);

  }

  const onLogOut = (token) => {
    setAccessToken(token);

  }


  return (
    <AuthContext.Provider value={{ accessToken, onLogin, onLogOut}} >
    <div className="App">
    <Layout style={{ minHeight: '100vh', }} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MenuBar/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, }}></Header>
        <Content style={{ margin: '0 16px', }} >
            <Routes>              
                <Route path='/' element={<Home/>}/>

                <Route path='/periodization' element={<Periodization />}/>
                <Route path='/activities' element={<Activities />}/>
                <Route path='/rc-form' element={<RCForm />}/>




                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/logout' element={<Login />}/>

            </Routes>
        </Content>
        <Footer style={{ textAlign: 'center', }} >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </div>
    </AuthContext.Provider>

  );
}

export default App;
