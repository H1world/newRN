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
import Echarts from 'native-echarts'
import Header from '../../component/header';
import { homeStyle } from '../../layout/homeStyle';

export default class Overview extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `总览`,
  // }); 
  renderItem() {
    return (
        '总览'
    )
  };
  backClick() {
    return (
      this        //this传到header组件
    )
  };
  render() {
    //echares
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        <Header
          titleItem={() => this.renderItem()}
          backFunc={() => this.backClick()}
        />
        <View style={homeStyle.overViewStyle}>
          <View style={[homeStyle.leftRight36D, homeStyle.overViewBox, homeStyle.marginB30]}>
            <Text style={homeStyle.overlist_1_titel}>
              基本信息
            </Text>
            <View style={homeStyle.overlist_1_instL}>
              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
                <View style={homeStyle.overlist_1_line}></View>
              </View>

              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
                <View style={homeStyle.overlist_1_line}></View>                
              </View>

              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
              </View>
            </View>
            <View style={homeStyle.overlist_1_instL}>
              <View style={homeStyle.overlist_1_instB}>
               <View style={homeStyle.overlist_1_CL}></View>
              </View>
            </View>
            <View style={homeStyle.overlist_1_instL}>
              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
                <View style={homeStyle.overlist_1_line}></View>
              </View>

              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
                <View style={homeStyle.overlist_1_line}></View>
              </View>

              <View style={homeStyle.overlist_1_instB}>
                <Text style={homeStyle.overlist_1_font_1}> 1314 </Text>
                <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
              </View>
            </View>
          </View>
          <View style={[homeStyle.leftRight36D, homeStyle.marginB30]}>
            <Echarts option={option} height={300} />
          </View>

        </View>


      </View>
    )
  }
}
