import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/register'
import Index from './pages/Index'
import InstantRecharge from './pages/ Recharge/InstantRecharge'


const Router = createStackNavigator({
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
        },
        InstantRecharge:{
            screen:InstantRecharge
        }
    },
    {
        initialRouteName: 'Login'
    });

export default Router;
