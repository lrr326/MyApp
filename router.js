import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import User from './pages/User';
import Register from './pages/register'
import Index from './pages/Index'
import Home from './pages/Home'


const Router = createStackNavigator({
        User: {
            screen: User
        }, // 我的
        Login: {
            screen: Login
        }, // 登录页
        Register:{
            screen:Register
        },
        Index:{
            screen:Index
        },
        Home:{
            screen:'Home'
        }
        
        
    },
    {
        initialRouteName: 'Login'
    });

export default Router;
