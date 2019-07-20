import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';


const Router = createStackNavigator({
        Login: {
            screen: Login
        }, // 登录页
        
    },
    {
        initialRouteName: 'Login'
    });

export default Router;
