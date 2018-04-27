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
  ImageBackground,
  ScrollView
} from 'react-native';
import Echarts from 'native-echarts'
import Header from '../../component/header';
import Mask from '../../component/Mask';
import { homeStyle } from '../../layout/homeStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      loading:false,
      basicData: '',
      echart_1: '',
      echart_2:'',
    }
  };
  componentDidMount() {
    this.getOrgTotalInfo();
  };
  async getOrgTotalInfo() {
    let url = this.props.homeStore.api + 'mobile/system/getOrgTotalInfo';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        basicData: res.data,
      });
      this.getProjectTrendStatisticsCountByOrgId();
    } else {
      Alert.alert(res.describe);
    };
  }; 
  async getProjectTrendStatisticsCountByOrgId() {
    let url = this.props.homeStore.api + 'mobile/system/getProjectTrendStatisticsCountByOrgId';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        echart_1: res.data.projectlist,
      });
      this.getRequirementCountByDate();
    } else {
      Alert.alert(res.describe);
    };
  }; 
  async getRequirementCountByDate() {
    let url = this.props.homeStore.api + 'mobile/system/getRequirementCountByDate';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        echart_2: res.data.reqirementlist,
        loading: true,
      });
    } else {
      Alert.alert(res.describe);
    };
    // console.log(echart_2);
  }; 

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
    //布局
    let basicList =
        <View>
          <View style={homeStyle.overlist_1_instL}>
            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.entrepreneurnumber} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 创业者 </Text>
              <View style={homeStyle.overlist_1_line}></View>
            </View>

            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.projectnumber} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 项目 </Text>
              <View style={homeStyle.overlist_1_line}></View>
            </View>

            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.requirementnum} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 需求 </Text>
            </View>
          </View>
          <View style={homeStyle.overlist_1_instL}>
            <View style={homeStyle.overlist_1_instB}>
              <View style={homeStyle.overlist_1_CL}></View>
            </View>
          </View>
          <View style={homeStyle.overlist_1_instL}>
            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.projectgamenum} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 赛事 </Text>
              <View style={homeStyle.overlist_1_line}></View>
            </View>

            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.wisemannumber} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 投智人 </Text>
              <View style={homeStyle.overlist_1_line}></View>
            </View>

            <View style={homeStyle.overlist_1_instB}>
              <Text style={homeStyle.overlist_1_font_1}> {this.state.basicData.courselivenum} </Text>
              <Text style={homeStyle.overlist_1_font_2}> 课程 </Text>
            </View>
          </View>
        </View>;    
    let echart_1_data = [];   
    let echart_1_num = [];   
    if (this.state.echart_1 != ''){
      let arr = this.state.echart_1.map((item) => {
        return (item.date)
      })
      let arr_2 = this.state.echart_1.map((item) => {
        return (item.projectnum)
      })
      echart_1_data = arr;
      echart_1_num = arr_2;
    }
    //echares
    const option_1 = {
      grid: {
        top: 30,
        bottom: 40,
        right:20,
      },
      tooltip: {
        trigger: "axis",
        formatter: "{b}:{c}项"
      },
      xAxis: {
        type: 'category',
        show: true,
        data: echart_1_data,
        axisTick: {
          alignWithLabel: true
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        splitArea: {
          show: true
        }
      },
      series: [{
        data: echart_1_num,
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: "circle",
      }]
    };
    let echart_2_data = [];
    let echart_2_num1 = [];
    let echart_2_num2 = [];
    let echart_2_num3 = [];
    if (this.state.echart_2 != '') {
      let arr = this.state.echart_2.map((item) => {
        return (item.date)
      })
      let arr_2 = this.state.echart_2.map((item) => {
        return (item.rnum)
      })
      let arr_3 = this.state.echart_2.map((item) => {
        return (item.snum)
      })
      let arr_4 = this.state.echart_2.map((item) => {
        return (item.cnum)
      })
      echart_2_data = arr;
      echart_2_num1 = arr_2;
      echart_2_num2 = arr_3;
      echart_2_num3 = arr_4;
    }
    var option_2 = {
      tooltip: {
        trigger: "axis",
        formatter: '{a} <br/>{b} : {c}'
      },
      grid: {
        top: 30,
        bottom: 40,
        right: 20,
      },
      xAxis: [
        {
          type: "category",
          show: true,
          data: echart_2_data,
          axisTick: {
            alignWithLabel: true
          },
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          minInterval: 1,
          splitLine: {
            show: false
          },
          splitArea: {
            show: true
          }
        }
      ],
      series: [
        {
          name: '本校需求数量',
          type: "line",
          smooth: true,
          symbolSize: 10,
          symbol: "circle",
          data: echart_2_num1
        },
        {
          name: '面向学校的需求数量',
          type: 'line',
          smooth: true,
          symbolSize: 10,
          symbol: "circle",
          data: echart_2_num2
        },
        {
          name: '面向企业的需求数量',
          type: 'line',
          smooth: true,
          symbolSize: 10,
          symbol: "circle",
          data: echart_2_num3
        }
      ]
    };

    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        {this.state.loading == false ? <Mask /> : null}
        <Header
          titleItem={() => this.renderItem()}
          backFunc={() => this.backClick()}
        />
        <ScrollView 
          contentContainerStyle={{ paddingTop: 10,paddingBottom:20}}
        >
        <View style={homeStyle.overViewStyle}>
          <View style={[homeStyle.leftRight36D, homeStyle.overViewBox, homeStyle.marginB30]}>
            <Text style={homeStyle.overlist_1_titel}>
              基本信息
            </Text>
            {basicList}
          </View>
          <View style={[homeStyle.leftRight36D, homeStyle.marginB30, homeStyle.echartBox]}>
            <Text style={homeStyle.echartTitle}>项目趋势图</Text>
            <View style={homeStyle.echartList}>
              <Echarts option={option_1} height={250} />
            </View>  
          </View>

          <View style={[homeStyle.leftRight36D, homeStyle.marginB30, homeStyle.echartBox]}>
            <Text style={homeStyle.echartTitle}>需求趋势图</Text>
            <View style={homeStyle.echartList}>
              <Echarts option={option_2} height={250} />
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}
