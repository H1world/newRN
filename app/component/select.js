import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { Toast } from 'antd-mobile';
import homeStyle from '../layout/homeStyle'
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

const headerStyle = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    height: scaleSize(132),
    alignItems: 'center',
  },
  headerGoUp: {
    width: scaleSize(66),
    height: scaleSize(66),
    marginLeft: scaleSize(36)
  },
  topHeight: {
    width: scaleSize(60),
    height: scaleSize(60),

  },
  headerText: {
    // width: width - scaleSize(204),
    flex: 1,
    height: scaleSize(132),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFont: {
    fontSize: scaleSize(54),
    color: '#333',
  },
  headerRight: {
    fontSize: scaleSize(42),
    color: '#259461',
    marginRight: scaleSize(36)
  },
  searchBox:{
    height: scaleSize(90),
    borderColor: 'black',
    flexDirection: 'row',   // 水平排布
    borderRadius: 10,  // 设置圆角边
    backgroundColor: '#f1f1f1',
    borderRadius: scaleSize(29),
    borderColor: 'gray',
    alignItems: 'center',
    marginLeft: scaleSize(27),
    marginRight: scaleSize(18),
  },
  inputText: {//搜索框
    backgroundColor: 'transparent',
    fontSize: scaleSize(42),
    color:'#999',
    paddingBottom: 0,
    paddingTop: 0,
    flex: 1,
  },
  inputIcon: {//搜索图标
    height: scaleSize(39),
    width: scaleSize(39),
    marginLeft: scaleSize(27),
    marginRight: scaleSize(18),
    resizeMode: 'stretch'
  },
})
// class Header extends Component
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectText:'',
    };
  }

  componentDidMount() {
    this.refs.selectText.focus();
  }

  static propTypes = {
    backFunc: PropTypes.func,
  };

  backBtnFunc() {
    if (this.props.backFunc === undefined) return;
    return this.props.backFunc();
  };

  backGo() {
    let _this = this.backBtnFunc();
    this.refs.selectText.blur();
    _this.props.navigation.goBack();
  };

  selectClick() {
    let value = this.state.selectText.trim().length;  
    if (this.state.selectText == undefined || value == 0){
      Toast.fail('请输入搜索条件~', 30);
      setTimeout(() => {
        Toast.hide();
      }, 1500);  
    }else{
      this.props.selectGo(this.state.selectText);
    }
    this.refs.selectText.blur();
  };

  changeText(text){
    this.setState({
      selectText: text,
    });
  };

  // Focus(){

  // }
  keypress(e){
    // if (e.which !== 13) return
    // Toast.fail('点回车了？', 30);
    // setTimeout(() => {
    //     Toast.hide();
    //   }, 500);
    console.log(e)
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        {Platform.OS === 'ios' ? <View style={headerStyle.topHeight}></View> : null}
        <View style={headerStyle.headerBox}>
          <TouchableOpacity onPress={() => this.backGo()}>
            <Image
              source={require('../image/icon_return2x.png')}
              style={headerStyle.headerGoUp}
            />
          </TouchableOpacity>
          <View style={headerStyle.headerText}>
            <View style={headerStyle.searchBox}>
              <Image source={require('../image/select.png')} style={headerStyle.inputIcon} />
              <TextInput style={headerStyle.inputText}
                ref="selectText"
                defaultValue={this.state.selectText}
                onChangeText={(text) => this.changeText(text)}
                // onFocus={() => this.Focus()}
                // onKeyPress={(e)=>this.keypress(e)}
                // onKeyboardChange={(e) => this.keypress(e)}
                // returnKeyType="search"
                underlineColorAndroid='transparent'
                placeholder='搜索项目' />
            </View> 

          </View>
          <TouchableOpacity onPress={() => this.selectClick()}>
            <Text style={headerStyle.headerRight}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}