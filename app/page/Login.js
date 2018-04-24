import React from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { loginStyle } from '../layout/loginStyle.js';
import { RootStack } from '../../app/navigationPage/router';
import { Button, List, Badge, InputItem } from 'antd-mobile';
import {apiBa} from '../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show_2: false,
      phoneNum: 'bjdx',
      passwordType: true,
      passwordNum: 'bjdx5004',
      data: null
    }
  };

  componentDidMount() {
  }

  changeText(name, text) {
    if (name == 'phone') {
      if (text != '') {
        this.setState({
          phoneNum: text,
          show: true,
        });
      } else {
        this.setState({
          phoneNum: text,
          show: false,
        });
      }
    };
    if (name == 'password') {
      this.setState({
        passwordNum: text,
      });
    }
  };

  clertNum(nameString) {
    if (nameString == 1) {
      this.setState({
        phoneNum: '',
        show: false,
      });
    }
    if (nameString == 2) {
      this.setState({
        show_2: !this.state.show_2,
        passwordType: !this.state.passwordType,
      });
    }
  };

  async _onPress() {
    let url = this.props.homeStore.api + 'mobile/login/dologin';
    let data = {
      accountname: this.state.phoneNum,
      password: this.state.passwordNum,
    }
    const res = await apiBa(url, data,"POST");
    if (res.result == "success"){
      this.setState({
        data: res
      });
      this._changeSaveData();
    }else{
      Alert.alert(res.describe);
    }
  }; 
  
  clertBlur() {
    this.refs.textInput1.blur();
    this.refs.textInput2.blur();
  };

  selectionChange(event) {
    let length = (this.state.passwordNum).length
    event.nativeEvent.selection.start = length;
    event.nativeEvent.selection.end = length;
  };

  onReset() {
  };

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.clertBlur()} >
          <View style={loginStyle.container}>
            <StatusBar
              backgroundColor="#259461"
            />
            <Image
              source={require('../image/tzqlogo.png')}
              style={loginStyle.loginLogo}
            />
            <View style={loginStyle.InputBox}>
              <View style={loginStyle.InputBox_insid}>
                <Image
                  source={require('../image/phone.png')}
                  style={loginStyle.InputBox_img}
                />
                <TextInput style={loginStyle.inputText}
                  ref="textInput1"
                  defaultValue={this.state.phoneNum}
                  onChangeText={(text) => this.changeText('phone', text)}
                  underlineColorAndroid='transparent'
                  placeholder='请输入账号'
                  placeholderTextColor='rgba(255,255,255,.6)'
                />
                <TouchableOpacity
                  onPress={() => this.clertNum(1)}
                >
                  <Image
                    source={this.state.show == false ? (null) : (require('../image/close.png'))}
                    style={loginStyle.InputBox_img}
                  />
                </TouchableOpacity>
              </View>
              <View style={loginStyle.InputBox_insid}>
                <Image
                  source={require('../image/lock.png')}
                  style={loginStyle.InputBox_img}
                />
                <TextInput
                  ref="textInput2"
                  onSelectionChange={(event) => this.selectionChange(event)}
                  defaultValue={this.state.passwordNum}
                  onChangeText={(text) => this.changeText('password', text)}
                  secureTextEntry={this.state.passwordType}
                  style={loginStyle.inputText}
                  underlineColorAndroid='transparent'
                  placeholder='请输入密码'
                  placeholderTextColor='rgba(255,255,255,.6)'
                  // selectionColor = '#b00'
                />
                <TouchableOpacity
                  onPress={() => this.clertNum(2)}
                >
                  <Image
                    source={this.state.show_2 == false ? (require('../image/eye_close.png')) : (require('../image/eye_open.png'))}
                    style={loginStyle.InputBox_img}
                  />
                </TouchableOpacity>
              </View>
              <TouchableHighlight style={loginStyle.buttonStyle} underlayColor={'#fff'} onPress={()=>this._onPress()}>
                <Text style={loginStyle.buttonText}>
                  登录
              </Text>
              </TouchableHighlight>
            </View>
            {/* <Text>
              当前的值是: {APPState.timer}
            </Text>
            <TouchableOpacity onPress={() => { this.onReset() }}>
              <Text style={{ backgroundColor: 'green', color: 'white', marginLeft: 30, fontSize: 20 }}>
                重置
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }}
              onPress={this._changeSaveData}>
              <Text>修改数据</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
//更改登录状态
  _changeSaveData (){
    let userData = this.state.data.data;
    // this.props.navigation.navigate('Home', { title: '北京大学' })
    var user = new Object();
    user.beOverdue = '2';
    user.orgid = userData.orgid;                      //组织id
    user.accountid = userData.accountid;
    user.roleid = userData.roleid;                    //身份id
    user.layer = userData.layer;                      //认证id
    user.token = userData.xytoken;                    //组织列表
    user.orgname = userData.orgname;                  //组织名称
    user.userimage = userData.userimage;              //组织logo
    user.username = userData.username;                //用户名称
    global.MySorage._sava('userList', user);
    this.props.navigation.navigate('Home')
    // this.props.navigation.navigate('Home', { title: '北京大学' })
  };
}
export default Login;