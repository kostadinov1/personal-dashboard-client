
import { Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage'
import { AuthContext } from './contexts/AuthContext';
import Home from './components/Home/Home';
import React, { useState } from 'react';
import Periodization from './components/Periodization/Periodization';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Activities from './components/Activities/Activities';

import { Layout } from 'antd';
import 'antd/dist/antd.css';import './App.css';
import CreateProfile from './components/Profile/CreateProfile';
import EditProfile from './components/Profile/EditProfile';

import DeleteProfile from './components/Profile/DeleteProfile';
import ShowProfile from './components/Profile/ShowProfile';
import PeriodizationV2 from './components/Periodization/PeriodizationV2';
import Statistics from './components/Periodization/Statistics';
import { ExperimentTwoTone } from '@ant-design/icons';
import CalendarFullPage from './components/Calendar/Calendar';
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
    <Layout style={{ minHeight: '100vh', }} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo">
        <ExperimentTwoTone style={{ fontSize: '22px', color: '#08c',
                                    marginInline: '15px' }}/>
        <span style={{color:'white', fontFamily: 'fantasy',
                      fontWeight: 'bold', fontStretch: 'expanded'}}>ScrollLog</span>
        </div>
        <MenuBar/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, }}></Header>
        <Content style={{ margin: '0 16px', }} >
            <Routes>             
                  {/* Core  */}
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<Home/>}/>
                <Route path='/contacts' element={<Home/>}/>
                <Route path='/calendar' element={<CalendarFullPage/>}/>

                 {/* Authentication */}
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>

                   {/* Profile */}
                <Route path='/show-profile' element={<ShowProfile />}/>
                <Route path='/create-profile' element={<CreateProfile />}/>                   
                <Route path='/edit-profile' element={<EditProfile />}/>
                <Route path='/delete-profile' element={<DeleteProfile />}/>

                  {/* Periodization */}
                <Route path='/periodization' element={<Periodization />}/>
                <Route path='/periodization-v2' element={<PeriodizationV2 />}/>
                <Route path='/statistics' element={<Statistics />}/>



                  {/* Activities */}
                <Route path='/activities' element={<Activities />}/>

                   {/* Exercises */}
                <Route path='/exercises' element={<Activities />}/>


            </Routes>
        </Content>
        <Footer style={{ textAlign: 'center', }} >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </AuthContext.Provider>
  );
}

export default App;
