import React from 'react';
import {
  Image,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from '../page/Login';
import MyHome from '../page/Home';
import MyProject from '../page/project/Project';
import Sapien from '../page/othered/HomoSapiens';
import Information from '../page/my/MyInformation';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: MyHome,
    navigationOptions: {
      header: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
        // source={require('./image/bar_home_nomarl@3x.png')}
        // style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  ProjectPage: {
    screen: MyProject,
    navigationOptions: {
      tabBarLabel: '项目',
      tabBarIcon: ({ tintColor }) => (
        <Image
        // source={require('./image/bar_center_normal@3x.png')}
        // style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  Sapien: {
    screen: Sapien,
    navigationOptions: {
      tabBarLabel: '投智人',
      tabBarIcon: ({ tintColor }) => (
        <Image
        // source={require('./image/bar_center_normal@3x.png')}
        // style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  My: {
    screen: Information,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
        // source={require('./image/bar_center_normal@3x.png')}
        // style={[{ tintColor: tintColor }, styles.icon]}
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
    activeTintColor: '#008AC9', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    style: {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
  });
//注册页面
export const Login_page = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      // headerTitle: '',
      headerLeft: null,
      gesturesEnabled: false,
    }
  },
});
//首页内容页
export const RootStack = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  }
});
