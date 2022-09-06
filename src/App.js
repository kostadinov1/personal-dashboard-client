
import { Link, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage'
import { AuthContext } from './contexts/AuthContext';
import Home from './components/Home/Home';
import React, { useState } from 'react';
import Periodization from './components/Periodization/Periodization';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Activities from './components/Activities/Activities';
import { Button, Layout } from 'antd';
import EditProfile from './components/Profile/EditProfile';
import DeleteProfile from './components/Profile/DeleteProfile';
import ShowProfile from './components/Profile/ShowProfile';
import PeriodizationV2 from './components/Periodization/PeriodizationV2';
import Statistics from './components/Periodization/Statistics';
import { ExperimentTwoTone } from '@ant-design/icons';
import CalendarFullPage from './components/Calendar/Calendar';
import 'antd/dist/antd.css';import './App.css';
import { logoutService } from './services/auth/logoutServce';
import ShowExercises from './components/Exercises/ShowExercises';
import CreateMyModel from './components/Upload/DraftUploadImage';
const { Header, Content, Footer, Sider }  = Layout;


function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken',{accessToken: ''})
  const [ userID, setUserID ] = useLocalStorage('userID', {userID: ''})
  const [user, setUser] = useState({})

  const onLogin = (user) => {
    setUserID(user.user_id)
    setUser(user)
    setAccessToken(user.token)};
  
  const onLogOut = () => {
    logoutService(user.token).then(res => {
      console.log('onLogout', res)
    }).catch((err)=>{console.log('onLogout error:',err)})
    setUserID({userID: ''})
    setAccessToken({accessToken:''});
  }
  
  return (
    <AuthContext.Provider value={{ user, accessToken, onLogin, onLogOut}} >
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
        <Header className="site-layout-background" style={{ padding: 0, }}>
          
          {/* Authentication Buttons */}
          <span style={{float:'right', marginRight: '20px'}}>
            {accessToken.accessToken === ''
             ? <> 
               <Button
                shape='round'
                ghost='true'
                size='small'
               ><Link to='/login'>login</Link>
               </Button> 
               <Button
                shape='round'
                ghost='true'
                size='small'
                ><Link to='/register'>register</Link>
               </Button> 
               </> : 
                <Button
                shape='round'
                ghost='true'
                size='small'
                onClick={onLogOut}
                ><Link to='/'>logout</Link>
                </Button>
              }
          </span>
        </Header>
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
                <Route path='/logout' element={<Login />}/>

                   {/* Profile */}
                <Route path='/show-profile' element={<ShowProfile />}/>
                <Route path='/edit-profile' element={<EditProfile />}/>
                <Route path='/delete-profile' element={<DeleteProfile />}/>

                  {/* Periodization */}
                <Route path='/periodization' element={<Periodization />}/>
                <Route path='/periodization-v2' element={<PeriodizationV2 />}/>
                <Route path='/statistics' element={<Statistics />}/>

                  {/* Activities */}
                <Route path='/activities' element={<Activities />}/>

                   {/* Exercises */}
                <Route path='/show-exercises' element={<ShowExercises />}/>
                <Route path='/draft' element={<CreateMyModel />}/>


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
