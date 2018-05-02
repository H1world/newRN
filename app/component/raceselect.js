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
  TouchableHightlight,
  Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

const selectS = StyleSheet.create({
  selectBox: {
    flexDirection: 'row',
    height: scaleSize(132),
    alignItems: 'center',
    justifyContent: 'center', 
    borderTopWidth: scaleSize(1),
    borderBottomWidth: scaleSize(1),
    borderColor:'#dedede',
  },
  selectList:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',   
  },
  fontStyle:{
    fontSize: scaleSize(48),
    color:'#333'
  },
  toolIcon:{
    width: scaleSize(22),
    height:scaleSize(22),
    marginLeft: scaleSize(60),
  },
  textBox:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',  
  },
  beforBox:{
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  hideBoxAndroid:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginTop: scaleSize(266),
  },
  hideBoxIos:{
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginTop: scaleSize(326),
  },
  box_1:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
  },
  hideFont:{
    lineHeight: scaleSize(130),
    height: scaleSize(130),
    width:width,
    backgroundColor:'#fff',
    alignItems: 'center',
    paddingLeft: scaleSize(100),
  },
  hideFont_select:{
    lineHeight: scaleSize(130),
    height: scaleSize(130),
    width: width,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: scaleSize(100),
    color:'#259461',
  },
  fontStyle_2:{
    fontSize: scaleSize(48),
    color: '#259461'
  },
  textBorder:{
    height: scaleSize(50),
    width: scaleSize(1),
    backgroundColor:'#dedede',
  }
})

export default class ReceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.listData(),
      leftData: '',
      rightData:'',
      leftType: false,
      rightType:false,
      visible: false,
      transparent: true,
      phoneIos:'',
      visible_2: false,
      transparent_2: true,
      changeColorDe_1:'',
      changeColorDe_2:'',
      leftTitle: this.props.select_1(),
      rightTitle: this.props.select_2(),
      titleColor: false,
      titleColor_2:false,
    }
  };
  componentDidMount() {
    this.whatTfather();
  }
  whatTfather() {        
    if (Platform.OS === 'ios'){
      this.setState({
        phoneIos:true,
      })
    }else{
      this.setState({
        phoneIos: false,
      })
    }
  };
  clertBlur(){
    this.setState({
      visible: false,
      visible_2: false
    })
  };
  show(){
    this.setState({
      visible: true
    })
  };
  show_2() {
    this.setState({
      visible_2: true
    })
  };
  hide(){
    this.setState({
      visible: false,
      visible_2: false
    })
  };
  hide_2() {
    this.setState({
      visible: false,      
      visible_2: false
    })
  };
  listFunction() {
    if (this.props.listData === undefined) { return }
    else {
      return this.props.listData();
    }
  };
  listTitleF() {
    if (this.props.listTitle === undefined) {return}
    else{
      return this.props.listTitle();
    }
  };
  fatherThis() {
    if (this.props._this === undefined) { return }
    else {
      return this.props._this();
    }
  };

  functionF() {
    if (this.props.listFunction === undefined) { return }
    else {
      return this.props.listFunction();
    }
  };

  changeColor(item){
    this.setState({
      changeColorDe_1: item,
      leftTitle: item.yearname,
      titleColor: true,
      visible: false,
      visible_2: false,
    })
    let _this = this.fatherThis();
    _this.setState({
      yearData: item.year,
      // pageNum:1,
    });
    this.props.listFunction(item.year, _this.state.stateData, 1)
  };
  changeColor_2(item) {
    this.setState({
      changeColorDe_2: item,
      rightTitle: item.statename,
      titleColor_2:true,
      visible: false,
      visible_2: false
    });
    let _this = this.fatherThis();
    _this.setState({
      stateData: item.state,
      // pageNum: 1,
    })
    this.props.listFunction(_this.state.yearData, item.state, 1)
  };

  render() {
    let leftData = [];
    let rightData = [];
    if (this.listTitleF() == '赛事'){
      if (this.listFunction() != ''){
        leftData = this.listFunction().yearlist.map((item,index) => {
          return (
            <TouchableOpacity key={index} activeOpacity={1}
              onPress={() => this.changeColor(item)}>
              <Text style={this.state.changeColorDe_1 == item ? selectS.hideFont_select : selectS.hideFont} key={index}> {item.yearname} </Text>
            </TouchableOpacity>
          )
        })
        rightData = this.listFunction().statelist.map((item, index) => {
          return (
            <TouchableOpacity key={index} activeOpacity={1}
              onPress={() => this.changeColor_2(item)}>
              <Text style={this.state.changeColorDe_2 == item ? selectS.hideFont_select : selectS.hideFont} key={index}> {item.statename} </Text>
            </TouchableOpacity>
          )
        })
      }
    }
    return (
      <View style={selectS.selectBox}>
        <TouchableOpacity style={[selectS.selectList]} onPress={() => this.show()}>
          <View style={selectS.textBox}>
            <Text style={this.state.titleColor == true ? selectS.fontStyle_2 : selectS.fontStyle}>{this.state.leftTitle}</Text>
          <Image
            source={this.state.titleColor == true ? require('../image/icon_trianglegreen3x.png') : require('../image/icon_triangle3x.png')}
            style={selectS.toolIcon}
          />
          </View>
          <Modal
            visible={this.state.visible}
            transparent={this.state.transparent}
          >
            <TouchableWithoutFeedback
              onPress={() => this.clertBlur()} >
            <View style={selectS.beforBox}>
              <TouchableOpacity style={this.state.phoneIos == true ? selectS.hideBoxIos : selectS.hideBoxAndroid} onPress={() => this.hide()}>
                <View style={selectS.box_1}>
                  {leftData}
                </View>
              </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
        </TouchableOpacity>
        <View style={selectS.textBorder}></View>
        <TouchableOpacity style={selectS.selectList} onPress={() => this.show_2()}>
          <View style={selectS.textBox}>
            <Text style={this.state.titleColor_2 == true ? selectS.fontStyle_2 : selectS.fontStyle}>{this.state.rightTitle}</Text>
          <Image
              source={this.state.titleColor_2 == true ? require('../image/icon_trianglegreen3x.png') : require('../image/icon_triangle3x.png')}
            style={selectS.toolIcon}
          />
          </View>
          <Modal
            visible={this.state.visible_2}
            transparent={this.state.transparent}
          >
            <TouchableWithoutFeedback
              onPress={() => this.clertBlur()} >
              <View style={selectS.beforBox}>
                <TouchableOpacity style={this.state.phoneIos == true ? selectS.hideBoxIos : selectS.hideBoxAndroid} onPress={() => this.hide_2()}>
                  <View style={selectS.box_1}>
                    {rightData}
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </TouchableOpacity>
      </View>
    );
  }
}