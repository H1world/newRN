import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { loginStyle } from '../layout/loginStyle.js';
import { YellowBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import { Login } from './Login';
// import MyScreen from './Home';
import { NavigationActions } from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];

export default class Index extends Component {
  componentDidMount(){
    SplashScreen.hide(); //隐藏
    this._readData();
  }

  _readData() { 
    const resetLogin = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })//要跳转到的页面名字
      ]
    });
    const resetIndex = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })//要跳转到的页面名字
      ]
    });
    // let t = setTimeout(() => {
      global.MySorage._load('userList', (data) => {
        if (data == null) {
          // this.props.navigation.navigate('Login', { transition: 'forFadeFromBottomAndroid' })
          this.props.navigation.dispatch(resetLogin);
        }
        if (data != undefined) {
          if (data.beOverdue == "1") {
            // this.props.navigation.navigate('Login', { transition: 'forFadeFromBottomAndroid' })
            this.props.navigation.dispatch(resetLogin);
          };
          if (data.beOverdue == "2") {
            // this.props.navigation.navigate('Home', { transition: 'forFadeFromBottomAndroid' })
            this.props.navigation.dispatch(resetIndex);            
          };
        } else {
          // this.props.navigation.navigate('Login', { transition: 'forFadeFromBottomAndroid' })
          this.props.navigation.dispatch(resetLogin);
        }
      })
    // },10000);

  }

  render() {
    return (
      <View style={loginStyle.indexBackground}>
        <Text>
          {/* <Image
            source={require('../image/start_splash.png')}
            style={loginStyle.indexBackgroundImg}
          /> */}
        </Text>
      </View>
      // <View style={loginStyle.indexBackground}>
      //   <MyScreen/>
      // </View>

    );
  }
}
