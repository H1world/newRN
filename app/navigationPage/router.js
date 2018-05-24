import React from 'react';
import {
  Platform,
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
import AddProjectPage from '../page/match/addProjectPage';      //添加赛事
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
import ProjectMap from '../page/indexPorject/projectmap';      //index项目地图
import matchType from '../page/match/matchtype';      //赛事类别
import matchStage from '../page/match/matchstage';      //赛事阶段
import SetUpIndex from '../page/match/judgesSetUp/setUpIndex';      //评审设置
import AddClassPage from '../page/match/judgesSetUp/addclasspage';      //评审设置-->添加分组
import addReview from '../page/match/judgesSetUp/addreview';      //评审设置-->添加评委
import Distribution from '../page/match/projectdistribution';      //项目分配


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
  // ProjectPage: {
  //   screen: MyProject,
  //   navigationOptions: {
  //     header: null,
  //     tabBarLabel: '项目',
  //     tabBarIcon: ({ focused,tintColor }) => (
  //       <Image
  //         source={focused ? require('../image/icon_xiangmu_green3x.png') : require('../image/icon_xiangmu_grey.png')}
  //         style={[loginStyle.footImage]}
  //       />
  //     ),
  //   }
  // },
  // Sapien: {
  //   screen: Sapien,
  //   navigationOptions: {
  //     header: null,
  //     tabBarLabel: '投智人',
  //     tabBarIcon: ({ focused,tintColor }) => (
  //       <Image
  //         source={focused ? require('../image/icon_touzhiren_green3x.png') : require('../image/icon_touzhiren_grey.png')}        
  //         style={[loginStyle.footImage]}
  //       />
  //     ),
  //   }
  // },
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
    // indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    // labelStyle: {
    //   fontSize: scaleSize(30), // 文字大小
    //   position: 'absolute',
    //   top: scaleSize(60),
    // },
    // style: {  
    //   height: scaleSize(147),
    //   backgroundColor: '#b00',
    // },  
    style: { //TabNavigator 的背景颜色
      backgroundColor: 'white',
      height: 55,
    },
    indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
      height: 0,
    },
    labelStyle: {//文字的样式
      fontSize: scaleSize(30),
      marginTop: -5,
      marginBottom: 5,
    },
    iconStyle: {//图标的样式
      marginBottom: 5,
    }
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
        height: 55,
        backgroundColor: '#ffffff',  
      },
    },
  }
)

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});

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
  addpage:{
    screen:AddProjectPage
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
  matchtype: {
    screen: matchType,
  },
  matchstage: {
    screen: matchStage,
  },
  setupindex: {
    screen: SetUpIndex,
  },  
  addclasspage: {
    screen: AddClassPage,
  },
  addreview: {
    screen: addReview,
  }, 
  distribution: {
    screen: Distribution,
  },  
},
{
  transitionConfig: TransitionConfiguration,
  navigationOptions: {
      header: null,
      gesturesEnabled: true,
    },
  }
);
