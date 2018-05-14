
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import { loginStyle } from '../../layout/loginStyle';
import { setSpText, scaleSize } from '../../algorithm/company';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {Platform.OS === 'ios' ? <View style={{height:scaleSize(60)}}></View> : null}
        <View style={{ backgroundColor: '#f4f4f4', flex: 1 }}>

          <View style={loginStyle.myNamelogo}>
            <Text style={loginStyle.myName}>
              {this.state.beforData.orgname}
            </Text>
            <Image
              // source={require('../../image/icon_end.png')}
              source={{ uri: this.state.beforData.userimage }}            
              style={loginStyle.myLogo}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('modify')}}>
            <View style={loginStyle.MyList}>
              <View style={loginStyle.MyListLeft}>
                <Image
                  source={require('../../image/icon_lock.png')}
                  style={loginStyle.MyListPng}
                />
                <Text style={loginStyle.MyListFont}>
                  修改密码
                </Text>
              </View>
              <View style={loginStyle.MyListRight}>
                <Image
                  source={require('../../image/icon_enter.png')}
                  style={loginStyle.MyListRightIco}
                />
              </View> 
            </View>
          </TouchableWithoutFeedback>

          <View style={loginStyle.MyList}>
            <View style={loginStyle.MyListLeft}>
              <Image
                source={require('../../image/icon_qingchu.png')}
                style={loginStyle.MyListPng}
              />
              <Text style={loginStyle.MyListFont}>
                清除缓存
              </Text>
            </View>
            <View style={loginStyle.MyListRight}>
              <Image
                source={require('../../image/icon_enter.png')}
                style={loginStyle.MyListRightIco}
              />
            </View>
          </View>
          
          <TouchableWithoutFeedback onPress={() => { this.SignOut() }}>
            <View style={loginStyle.MyList}>
              <Text style={loginStyle.signOut}>
                退出账号
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
  SignOut() {
    global.MySorage._remove('userList');
    this.props.navigation.navigate('Login');
  }
}
