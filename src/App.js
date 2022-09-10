
import { Link, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage'
import { AuthContext } from './contexts/AuthContext';
import Home from './components/Home/Home';
import React, { useState } from 'react';
import Periodization from './components/Periodization/Periodization/Periodization';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Activities from './components/Activities/Activities';
import { Button, Layout } from 'antd';
import EditProfile from './components/Profile/EditProfile';
import DeleteProfile from './components/Profile/DeleteProfile';
import ShowProfile from './components/Profile/ShowProfile';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Periodization/Periodization/Statistics';
import { ExperimentTwoTone, UserOutlined } from '@ant-design/icons';
import CalendarFullPage from './components/Calendar/Calendar';
import 'antd/dist/antd.css';
import { logoutService } from './services/auth/logoutServce';
import ShowExercises from './components/Exercises/ShowExercises';
import CreateExercise from './components/Exercises/CreateExercise';
import EditExercise from './components/Exercises/EditExercise';
import CreateActivity from './components/Activities/CreateActivity';
import DeleteActivity from './components/Activities/DeleteActivity';
import EditActivity from './components/Activities/EditActivity';
import DeleteExercise from './components/Exercises/DeleteExercise';
const { Header, Content, Footer, Sider }  = Layout;


function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken',{accessToken: ''})
  const [userID, setUserID] = useLocalStorage('userID', {userID: ''})
  const [user, setUser] = useLocalStorage('user', {user: ''})

  const onLogin = (user) => {
    setUser(user);
    setUserID(user.user_id);
    setAccessToken(user.token)};
    
  
  const onLogOut = () => {
    logoutService(userID, accessToken).then(res => {
      setUser({user: ''});
      setUserID({userID: ''});
      setAccessToken({accessToken:''});
      console.log('onLogout', res);

    }).catch((err)=>{console.log('onLogout error:',err)});
        setUser({user: ''});
        setUserID({userID: ''});
        setAccessToken({accessToken:''});
      }
  
  return (
    <AuthContext.Provider value={{  onLogin, onLogOut}} >
    <Layout style={{ minHeight: '100vh', }} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo">
        <ExperimentTwoTone style={{ fontSize: '22px', color: '#08c',
                                    marginInline: '15px' }}/>
        <span style={{color:'white', fontFamily: 'fantasy',
                      fontWeight: 'bold', fontStretch: 'expanded'}}>LOG</span>
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
               <>
                 {/* <span style={{color: 'white'}}>{user.email}  </span> */}
                <Button
                shape='round'
                ghost='true'
                size='small'
                onClick={onLogOut}
                ><Link to='/'>logout</Link>
                </Button>
                <Button
                icon={<UserOutlined/>}
                shape='round'
                ghost='true'
                size='small'
                ><Link to='/show-profile'>Profile</Link>
                </Button>
                </>
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

                  {/* Dashboard */}
                <Route path='/dashboard' element={<Dashboard />}/>

                  {/* Periodization */}
                <Route path='/periodization' element={<Periodization />}/>
                <Route path='/statistics' element={<Statistics />}/>

                      {/* MacroCycle */}
                    <Route path='/macrocycle' element={<Periodization />}/>
                    <Route path='/create-macrocycle' element={<Periodization />}/>
                    <Route path='/edit-macrocycle/:id' element={<Periodization />}/>
                    <Route path='/delete-macrocycle/:id' element={<Periodization />}/>

                      {/* MesoCycle */}
                    <Route path='/mesocycle' element={<Periodization />}/>
                    <Route path='/create-mesocycle' element={<Periodization />}/>
                    <Route path='/edit-mesocycle/:id' element={<Periodization />}/>
                    <Route path='/delete-mesocycle/:id' element={<Periodization />}/>

                      {/* MicroCycle */}
                    <Route path='/microcycle' element={<Periodization />}/>
                    <Route path='/create-microcycle' element={<Periodization />}/>
                    <Route path='/edit-microcycle/:id' element={<Periodization />}/>
                    <Route path='/delete-microcycle/:id' element={<Periodization />}/>

                  {/* Activities */}
                <Route path='/activities' element={<Activities />}/>
                <Route path='/create-activity' element={<CreateActivity />}/>
                <Route path='/edit-activity/:id' element={<EditActivity />}/>
                <Route path='/delete-activity/:id' element={<DeleteActivity />}/>

                   {/* Exercises */}
                <Route path='/show-exercises' element={<ShowExercises />}/>
                <Route path='/create-exercise' element={<CreateExercise />}/>
                <Route path='/edit-exercise/:id' element={<EditExercise />}/>
                <Route path='/delete-exercise/:id' element={<DeleteExercise />}/>

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
