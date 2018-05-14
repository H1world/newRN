import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import IndexPage from '../page/index';
import Login from '../page/Login';
import MyHome from '../page/Home';
import MyProject from '../page/project/Project';
import Sapien from '../page/othered/HomoSapiens';
import Information from '../page/my/MyInformation';
import Overview from '../page/indexpage/overView';
import Demandindex from '../page/indexpage/demandI';
import matchPage from '../page/match/matchIndex';
import matchEdit from '../page/match/matchedit';
import matchAdmin from '../page/match/matchadmin';
import reviewProgress from '../page/match/ReviewProgress';
import scoringRules from '../page/match/scoringrules';
import SignUpProject from '../page/match/signUpProject';
import selectPage from '../page/match/selectProject';
import gradeRankings from '../page/match/grade/allranking';
import groupingRankings from '../page/match/grade/groupingranking';
import projectAdmin from '../page/indexPorject/indexproject';      //index项目
import projectSummary from '../page/indexPorject/summary';      //index项目汇总
import ProjectMap from '../page/indexPorject/projectmap';      //index项目汇总

import modifyPassword from '../page/my/modifypassword';      //修改密码


import { loginStyle } from '../layout/loginStyle.js';
import { setSpText, scaleSize } from '../algorithm/company';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: MyHome,
    navigationOptions: {
      header: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require('../image/icon_home_green3x.png') : require('../image/icon_home_grey.png') }
          style={[loginStyle.footImage]}
        />
      ),
    }
  },
  ProjectPage: {
    screen: MyProject,
    navigationOptions: {
      header: null,
      tabBarLabel: '项目',
      tabBarIcon: ({ focused,tintColor }) => (
        <Image
          source={focused ? require('../image/icon_xiangmu_green3x.png') : require('../image/icon_xiangmu_grey.png')}
          style={[loginStyle.footImage]}
        />
      ),
    }
  },
  Sapien: {
    screen: Sapien,
    navigationOptions: {
      header: null,
      tabBarLabel: '投智人',
      tabBarIcon: ({ focused,tintColor }) => (
        <Image
          source={focused ? require('../image/icon_touzhiren_green3x.png') : require('../image/icon_touzhiren_grey.png')}        
          style={[loginStyle.footImage]}
        />
      ),
    }
  },
  My: {
    screen: Information,
    navigationOptions: {
      header: null,
      tabBarLabel: '我的',
      tabBarIcon: ({ focused,tintColor }) => (
        <Image
          source={require('../image/icon_mygrey.png')}
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
//成绩排名bar
const GradePage = TabNavigator({
  allrank: {
    screen: gradeRankings,
    navigationOptions: {
      header: null,
      tabBarLabel: '总体排名',
    }
  },
  groupingrank: {
    screen: groupingRankings,
    navigationOptions: {
      header: null,
      tabBarLabel: '分组排名',
    }
  },
},
  {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 左右滑动
    // backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#259461', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      labelStyle: {
        fontSize: scaleSize(50), // 文字大小
        marginBottom: scaleSize(47)
      },
      style: {
        height: scaleSize(150),
        backgroundColor: '#ffffff',  
      },
    },
  }
)

//路由.
export const RootStack = StackNavigator({
  Index:{
    screen: IndexPage,
    navigationOptions: {
      gesturesEnabled: false,
      animationEnabled: false,  
    }
  },
  Home: {
    screen: MainScreenNavigator,
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: false,
      headerTintColor: 'black',
    },
  },
  Login: {
    screen: Login,
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  overview:{
    screen: Overview,
  },
  demoand: {
    screen: Demandindex,
  },
  match: {
    screen: matchPage,
  },
  matchedit: {
    screen: matchEdit,
  },
  matchadmin: {
    screen: matchAdmin,
  },
  reviewprogress: {
    screen: reviewProgress,
  },
  scoringrules: {
    screen: scoringRules,
  },
  signupproject: {
    screen: SignUpProject,
  },
  selectpage: {
    screen: selectPage,
  },
  grade:{
    screen: GradePage,
  },
  projectadmin:{
    screen: projectAdmin,
  },
  projectsummary: {
    screen: projectSummary,
  },
  projectmap: {
    screen: ProjectMap,
  },
  modify: {
    screen: modifyPassword,
  },
  
},
{
  navigationOptions: {
      header: null,
      gesturesEnabled: true,
    },
  }
);
