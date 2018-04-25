import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
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
    height: scaleSize(132),
    alignItems: 'center',
    justifyContent: 'center', 
  },
   titleFont: {
     fontSize: scaleSize(54),
     color: '#333',
   },
 })
// class Header extends Component
export default class Header extends Component{

  static propTypes = {
    titleItem: PropTypes.func,
    backFunc: PropTypes.func,
  };

  renderItem() {
    if (this.props.titleItem === undefined) return;
    return this.props.titleItem();
  };

  backBtnFunc() {
    if (this.props.backFunc === undefined) return;
    return this.props.backFunc();
  };

  backGo() {
    let _this = this.backBtnFunc();
    _this.props.navigation.goBack();  
  };

  render() {
    return (
      <View>
        {Platform.OS === 'ios' ? <View style={headerStyle.topHeight}></View> : null}
        <View style={headerStyle.headerBox}>
          <TouchableOpacity onPress={() => this.backGo()}>
            <Image 
              source={require('../image/icon_return2x.png')}
              style={headerStyle.headerGoUp}
            />
          </TouchableOpacity>
          <View style={headerStyle.headerText}>
            <Text style={headerStyle.titleFont}>{this.renderItem()}</Text>          
          </View>
          
        </View>
      </View>
    );
  }
}