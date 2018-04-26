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
    width: width - scaleSize(204),
    height: scaleSize(132),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  wtfBtn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleFont: {
    fontSize: scaleSize(42),
    color: '#999',
    flex:1,
  },
  flR:{
    textAlign: 'right',
    marginRight: scaleSize(22.5),
  },
  flL: {
    textAlign: 'left',
    marginLeft: scaleSize(22.5),
  },
  bigFstyle:{
    fontSize: scaleSize(54),
    color: '#333',
  }
})
// class Header extends Component
export default class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigFont: this.backBtnFunc()
    }
  }

  static propTypes = {
    titleItem_1: PropTypes.func,
    titleItem_2: PropTypes.func,
    fontType: PropTypes.func,
    backFunc: PropTypes.func,
  };

  renderItem_1() {
    if (this.props.titleItem_1 === undefined) return;
    return this.props.titleItem_1();
  };

  renderItem_2() {
    if (this.props.titleItem_2 === undefined) return;
    return this.props.titleItem_2();
  };

  backBtnFunc() {
    if (this.props.backFunc === undefined) return;
    return this.props.backFunc();
  };

  backGo() {
    let _this = this.backBtnFunc();
    _this.props.navigation.goBack();
  };

  tabT() {
    let _this = this.backBtnFunc();
    _this.setState({
      tabtype: false
    });
  };

  tabTF() {
    let _this = this.backBtnFunc();
    _this.setState({
      tabtype: true
    });
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
            <TouchableOpacity style={headerStyle.wtfBtn} onPress={() => this.tabT()}>
              <Text style={[headerStyle.titleFont, headerStyle.flR, this.state.bigFont.state.tabtype == false ? headerStyle.bigFstyle : null]}>{this.renderItem_1()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={headerStyle.wtfBtn} onPress={() => this.tabTF()}>
              <Text style={[headerStyle.titleFont, headerStyle.flL, this.state.bigFont.state.tabtype == true ? headerStyle.bigFstyle : null]}>{this.renderItem_2()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}