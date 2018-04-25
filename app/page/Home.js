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
  
  _goRouter(item) {
    this.props.navigation.navigate(item.router)    
  }
  // static navigationOptions = ({ navigation }) => ({
    // title: `Chat with ${this.state.data.data.orgname}`,
  // }); 

  render() {
    const { params } = this.props.navigation.state;
    let bannerList = [
      { name: '总览', uri: bannericon1, router:'overview'},
      { name: '项目汇总', uri: bannericon2, router: 'overview'},
      { name: '成绩排名', uri: bannericon3, router: 'overview'},
    ];
    let iconList = bannerList.map((item,index) => {
      return (
        <TouchableOpacity style={homeStyle.bannerBox} key={index} onPress={() => this._goRouter(item)}>
          <Image
            source={item.uri}
            style={homeStyle.bannerIcon}
          />
          <Text style={homeStyle.bannerIconFont}> {item.name} </Text>
        </TouchableOpacity>
        )
    });
    let toolList = [
      { name: '需求', uri: toolIcon1 },
      { name: '项目', uri: toolIcon2 },
      { name: '赛事', uri: toolIcon3 },
      { name: '教学', uri: toolIcon4 },
    ];
    let trLength = Math.ceil(toolList.length / 3);
    let toolEd = [];
    //计算行数
    for (let i = 0; i < trLength; i++){
      toolEd.push(
        <View style={homeStyle.toolList}>
        </View>   
      );
    }
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
              source={require('../image/icon_xuqui.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 需求 </Text>
          </View>
          <View style={homeStyle.toolBox}>
            <Image
              source={require('../image/icon_xiangmu.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 项目 </Text>
          </View>
          <View style={homeStyle.toolBoxNull}>
            <Image
              source={require('../image/icon_saishi.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 赛事 </Text>
          </View>
        </View>
        <View style={homeStyle.toolList}>
          <View style={homeStyle.toolBox}>
            <Image
              source={require('../image/icon_jiaoxue.png')}
              style={homeStyle.toolIcon}
            />
            <Text style={homeStyle.toolFont}> 教学 </Text>
          </View>
          <View style={homeStyle.toolBox}>
          </View>
          <View style={homeStyle.toolBoxNull}>
          </View>
        </View>
      </View>
    )
    
  }

}