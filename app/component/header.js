import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import homeStyle from '../layout/homeStyle'
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

 const headerStyle = StyleSheet.create({
  headerBox:{
    flexDirection: 'row',
    height: scaleSize(132),
    alignItems: 'center',
  },
  headerGoUp : {
    width: scaleSize(66),
    height: scaleSize(66),
    marginLeft: scaleSize(36)
  },
   topHeight:{
    width: scaleSize(60),
    height: scaleSize(60),
    
  },
  headerText:{
    width: width - scaleSize(204),
    // flex:1,
    height: scaleSize(132),
    alignItems: 'center',
    justifyContent: 'center', 
  },
   titleFont: {
     fontSize: scaleSize(54),
     color: '#333',
   },
   headerRight:{
     fontSize: scaleSize(42),
     color: '#259461',
     marginRight: scaleSize(36)
   },
   searchBox: {
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
   bigBox:{
     flex: 1,
     backgroundColor:'#b00'
   },
   inputText: {//搜索框
     backgroundColor: 'transparent',
     fontSize: scaleSize(42),
     color: '#999',
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
export default class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectbox: this.selectFun(), //此搜索框非彼搜索框 放在header组件内 主要是为了跳转到 真正的select页 集体操作在select内完成
    };
  }

  componentDidMount() {
  }

  static propTypes = {
    titleItem: PropTypes.func,
    backFunc: PropTypes.func,
  };

  renderItem() {
    if (this.props.titleItem === undefined) return;
    return this.props.titleItem();
  };

  selectFun() {
    if (this.props.selectStyle === undefined) return;
    return this.props.selectStyle();
  }

  backBtnFunc() {
    if (this.props.backFunc === undefined) return;
    return this.props.backFunc();
  };

  headerRight() {
    if (this.props.headRight === undefined) return;
    return this.props.headRight();
  };

  backGo() {
    let _this = this.backBtnFunc();
    if (this.renderItem() == '成绩排名' || this.renderItem() == '分组排名'){
      // _this.props.navigation.navigate('overview')
      // console.log(_this.props.navigation)
      // console.log(_this.props.navigation.pop());
      _this.props.navigation.pop();      
    }else{  
      _this.props.navigation.goBack();
    }
  };

  Focus(){
    let _this = this.backBtnFunc();
    _this.props.navigation.navigate('selectpage')
  }
  
  sureGo(){
      this.props.sureGo();
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff'}}>
        {Platform.OS === 'ios' ? <View style={headerStyle.topHeight}></View> : null}
        <View style={headerStyle.headerBox}>
          <TouchableOpacity onPress={() => this.backGo()}>
            <Image 
              source={require('../image/icon_return2x.png')}
              style={headerStyle.headerGoUp}
            />
          </TouchableOpacity>
          <View style={headerStyle.headerText}>
            {this.state.selectbox == true ? 
              <TouchableWithoutFeedback onPress={() => this.Focus()} style={headerStyle.bigBox}>
              <View style={headerStyle.searchBox}>
                <Image source={require('../image/select.png')} style={headerStyle.inputIcon} />
                  <Text style={headerStyle.inputText}>
                  搜索项目
                  </Text>
              </View> 
              </TouchableWithoutFeedback>
              : <Text style={headerStyle.titleFont} numberOfLines={1}>{this.renderItem()}</Text> }
          </View>
          <TouchableOpacity onPress={() => this.sureGo()}>
            {this.headerRight() == true ? <Text style={headerStyle.headerRight}>{this.props.headRightText()}</Text> : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}