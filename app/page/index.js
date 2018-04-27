import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { loginStyle } from '../layout/loginStyle.js';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];

export default class Index extends Component {
  componentDidMount(){
    this._readData();
  }

  _readData() { 
    // let t = setTimeout(() => {
      global.MySorage._load('userList', (data) => {
        if (data == null) {
          this.props.navigation.navigate('Login')
        }
        if (data != undefined) {
          if (data.beOverdue == "1") {
            this.props.navigation.navigate('Login')
          };
          if (data.beOverdue == "2") {
            this.props.navigation.navigate('Home')
          };
        } else {
          this.props.navigation.navigate('Login')
        }
      })
    // },3000);
  }

  render() {
    return (
      <View style={loginStyle.indexBackground}>
        <Text>
          <Image
            source={require('../image/start_splash.png')}
            style={loginStyle.indexBackgroundImg}
          />
        </Text>
      </View>
    );
  }
}
