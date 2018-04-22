import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
// //导入stack导航组件
// import { StackNavigator, TabNavigator } from 'react-navigation';
// import { SearchBar, Button, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class MyScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#dddddd', alignItems: 'center' }}>      
         <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }}
          onPress={this._saveData}>
          <Text>修改数据</Text>
        </TouchableOpacity>
      </View>
    )
    
  }
  _saveData = () => {
    var user = new Object();
    user.routId = '1';
    global.MySorage._sava('token', user);
  };
}