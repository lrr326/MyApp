import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Mine from './pages/Mine';


const Router = createStackNavigator({
        Mine: {
            screen: Mine
        }, // 我的
        Login: {
            screen: Login
        }, // 登录页
        
        
    },
    {
        initialRouteName: 'Mine'
    });

export default Router;
