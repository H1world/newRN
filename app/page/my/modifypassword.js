
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
  StatusBar,
  Platform,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { loginStyle } from '../../layout/loginStyle';
import Header from '../../component/header';
import { Toast } from 'antd-mobile';
import { inject, observer } from "mobx-react";
import { apiBa } from '../../../api/api';

@inject('homeStore')
@observer
export default class modifyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      modifyInput_1: '',
      modifyInput_2: '',
      modifyInput_3:'',
      passwordType_1: true,
      passwordType_2: true,
      passwordType_3:true,
      show_1: false,
      show_2: false,
      show_3: false,
    }
  };

  changeText(name, text){
    if (name == 'input_1') {
        this.setState({
          modifyInput_1: text,
        });
    };
    if (name == 'input_2') {
      this.setState({
        modifyInput_2: text,
      });
    };
    if (name == 'input_3') {
      this.setState({
        modifyInput_3: text,
      });
    };
  };

  async surnModify(){
    let value = this.state.modifyInput_2.trim().length;
    let passwordYz = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
    if (!passwordYz.test(this.state.modifyInput_2)) {
      Toast.info('新密码格式不正确，请重新输入(6-20位字母数字组合)', 30);
      setTimeout(() => {
        Toast.hide();
      }, 1500);
      return;
    };
    if (this.state.modifyInput_2 != this.state.modifyInput_3) {
      Toast.info('确认密码错误请重新确认', 30);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    };
    let url = this.props.homeStore.api + 'mobile/system/updateSystemPassword';
    let data = {
      oldpassword: this.state.modifyInput_1,
      newpassword: this.state.modifyInput_2,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      const resetLogin = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login' })//要跳转到的页面名字
        ]
      });
      Toast.success('修改成功，请您重新登录',30);
      setTimeout(() => {
        Toast.hide();
        global.MySorage._remove('userList');
        // this.props.navigation.navigate('Login');
        this.props.navigation.dispatch(resetLogin);        
      }, 3000);
    }
  }

  clertNum(nameString) {
    if (nameString == 1) {
      this.setState({
        show_1: !this.state.show_1,
        passwordType_1: !this.state.passwordType_1,
      });
    }
    if (nameString == 2) {
      this.setState({
        show_2: !this.state.show_2,
        passwordType_2: !this.state.passwordType_2,
      });
    }
    if (nameString == 3) {
      this.setState({
        show_3: !this.state.show_3,
        passwordType_3: !this.state.passwordType_3,
      });
    }
  };
  
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => '修改密码'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '保存'}
          sureGo={() => this.surnModify()}
        />
        <View style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
          <View style={loginStyle.MyList}>
            <View style={loginStyle.modifyLeft}>
              <Text style={loginStyle.modifyFont}>
              现有密码
              </Text>
            </View>
            <View style={loginStyle.modifyRight}>
              <TextInput style={loginStyle.modifyInput}
                defaultValue={this.state.modifyInput_1}
                onChangeText={(text) => this.changeText('input_1', text)}
                secureTextEntry={this.state.passwordType_1}                
                underlineColorAndroid='transparent'
                placeholder='请输入现有密码'
              />
              <TouchableOpacity
                onPress={() => this.clertNum(1)}
              >
              <Image
                  source={this.state.show_1 == false ? (require('../../image/icon_eye_close.png')) : (require('../../image/icon_eye_open.png'))}
                style={loginStyle.password_img}
              />
              </TouchableOpacity>
            </View>
          </View>

          <View style={loginStyle.MyList}>
            <View style={loginStyle.modifyLeft}>
              <Text style={loginStyle.modifyFont}>
                新密码
              </Text>
            </View>
            <View style={loginStyle.modifyRight}>
              <TextInput style={loginStyle.modifyInput}
                defaultValue={this.state.modifyInput_2}
                onChangeText={(text) => this.changeText('input_2', text)}
                secureTextEntry={this.state.passwordType_2}  
                underlineColorAndroid='transparent'
                placeholder='请输入新密码'
              />
              <TouchableOpacity
                onPress={() => this.clertNum(2)}
              >
                <Image
                  source={this.state.show_2 == false ? (require('../../image/icon_eye_close.png')) : (require('../../image/icon_eye_open.png'))}
                  style={loginStyle.password_img}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={loginStyle.MyList}>
            <View style={loginStyle.modifyLeft}>
              <Text style={loginStyle.modifyFont}>
                再次输入新密码
              </Text>
            </View>
            <View style={loginStyle.modifyRight}>
              <TextInput style={loginStyle.modifyInput}
                defaultValue={this.state.modifyInput_3}
                onChangeText={(text) => this.changeText('input_3', text)}
                secureTextEntry={this.state.passwordType_3}  
                underlineColorAndroid='transparent'
                placeholder='再次输入新密码'
              />
              <TouchableOpacity
                onPress={() => this.clertNum(3)}
              >
                <Image
                  source={this.state.show_3 == false ? (require('../../image/icon_eye_close.png')) : (require('../../image/icon_eye_open.png'))}
                  style={loginStyle.password_img}
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
