import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/register'
import Index from './pages/Index'


const Router = createStackNavigator({
        Login: {
            screen: Login
        }, // 登录页
        Register:{
            screen:Register
        },
        Index:{
            screen:Index
        }
        
    },
    {
        initialRouteName: 'Login'
    });

export default Router;
