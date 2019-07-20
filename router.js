import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Mine from './pages/Mine';
import Register from './pages/register'
import Index from './pages/Index'
import Home from './pages/Home'


const Router = createStackNavigator({
        Mine: {
            screen: Mine
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
        initialRouteName: 'Mine'
    });

export default Router;
