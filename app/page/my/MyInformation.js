
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

export default class Information extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#dddddd', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }} 
        onPress={() => { this.SignOut() }}>
          <Text>退出登录</Text>
        </TouchableOpacity>
      </View>
    )
  }

  SignOut() {
    // let user = new Object();
    // user.beOverdue = '1';
    // user.orgid = '';                   //组织id
    // user.roleid = '';                    //身份id
    // user.layer = '';                     //认证id
    // user.orglist = '';                   //组织列表
    // user.token = '';                     //组织列表
    // global.MySorage._sava('token', user);
    global.MySorage._remove('userList');
    this.props.navigation.navigate('Login');
  }
}
