import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import IndexPage from '../page/index';
import Login from '../page/Login';
import MyHome from '../page/Home';
import MyProject from '../page/project/Project';
import Sapien from '../page/othered/HomoSapiens';
import Information from '../page/my/MyInformation';
import { loginStyle } from '../layout/loginStyle.js';
import { setSpText, scaleSize } from '../algorithm/company';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: MyHome,
    navigationOptions: {
      header: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../image/icon_home_grey.png')}
          style={[ { tintColor: tintColor }, loginStyle.footImage ]}
        />
      ),
    }
  },
  ProjectPage: {
    screen: MyProject,
    navigationOptions: {
      header: null,
      tabBarLabel: '项目',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../image/icon_xiangmu_grey.png')}
          style={[{ tintColor: tintColor }, loginStyle.footImage]}
        />
      ),
    }
  },
  Sapien: {
    screen: Sapien,
    navigationOptions: {
      header: null,
      tabBarLabel: '投智人',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../image/icon_touzhiren_grey.png')}
          style={[{ tintColor: tintColor }, loginStyle.footImage]}
        />
      ),
    }
  },
  My: {
    screen: Information,
    navigationOptions: {
      header: null,
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../image/icon_home_grey.png')}
          style={[{ tintColor: tintColor }, loginStyle.footImage]}
        />
      ),
    }
  },
}, 
{
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#259461', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    labelStyle: {
      fontSize: scaleSize(30), // 文字大小
      marginBottom: 5  
    },
    style: {
      height: scaleSize(147),
      backgroundColor: '#ffffff',
    },  
  },
  });
//路由.
export const RootStack = StackNavigator({
  Index:{
    screen: IndexPage,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      animationEnabled: false,  
    }
  },
  Home: {
    screen: MainScreenNavigator,
    mode: 'card',
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    mode: 'card',
  },
  
});
