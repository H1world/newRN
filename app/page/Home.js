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
  ImageBackground
} from 'react-native';
// //导入stack导航组件
import { StackNavigator, TabNavigator} from 'react-navigation';
import { SearchBar, Button, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { homeStyle } from '../layout/homeStyle';
import bannericon1 from '../image/icon_zonglan.png';
import bannericon2 from '../image/icon_xiangmuhuizong.png';
import bannericon3 from '../image/icon_paiming.png';
import toolIcon1 from '../image/icon_xuqui.png';
import toolIcon2 from '../image/icon_xiangmu.png';
import toolIcon3 from '../image/icon_saishi.png';
import toolIcon4 from '../image/icon_jiaoxue.png';
export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this._readData = this._readData.bind(this);
  }

  
  // componentWillMount
  componentDidMount() {
    this._readData();
  }

  _readData() {
    global.MySorage._load('userList', (data) => {
      this.setState({
        data: data,
      });
    })
  };
  
  // static navigationOptions = ({ navigation }) => ({
    // title: `Chat with ${this.state.data.data.orgname}`,
  // }); 

  render() {
    const { params } = this.props.navigation.state;
    let bannerList = [
      { name: '总览', uri: bannericon1},
      { name: '项目汇总', uri: bannericon2},
      { name: '成绩排名', uri: bannericon3},
    ];
    let iconList = bannerList.map((item,index) => {
      return (
        <View style={homeStyle.bannerBox} key = {index}>
          <Image
            source={item.uri}
            style={homeStyle.bannerIcon}
          />
          <Text style={homeStyle.bannerIconFont}> {item.name} </Text>
        </View>
        )
    });
    let toolList = [
      { name: '需求', uri: toolIcon1 },
      { name: '项目', uri: toolIcon2 },
      { name: '赛事', uri: toolIcon3 },
      { name: '教学', uri: toolIcon4 },
    ];
    let trLength = Math.ceil(toolList.length / 3);
    // for (let i = 0; i < trLength; i++){
    //   return <View style={homeStyle.toolList}>

    //   </View>     
    // }
    
    // let toolDomList = toolList.map((item, index)=>{

    // })
    
    
    return (
      <View style={{backgroundColor:'#fff'}}>
        <View style={homeStyle.homeTop}>
          <StatusBar
            backgroundColor="#259461"
          />
          <Image
            source={{ uri: this.state.data.userimage }}
            style={homeStyle.titleImg}
          />
          <Text style={homeStyle.titleFont}> {this.state.data.orgname} </Text>
        </View>
        {/* 第二块 */}
        <View>
          <ImageBackground
            source={require('../image/background.png')}
            style={homeStyle.backgroundBigImg}
          >
            {iconList}
          </ImageBackground>
        </View>
        {/* 第三块 */}
        <View style={homeStyle.toolList}>
          <View style={homeStyle.toolBox}>
            <Image
              source={require('../image/background.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 1 </Text>
          </View>
          <View style={homeStyle.toolBox}>
            <Image
              source={require('../image/background.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 2 </Text>
          </View>
          <View style={homeStyle.toolBox}>
            <Image
              source={require('../image/background.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 3 </Text>
          </View>
        </View>
        
      </View>
    )
    
  }

}