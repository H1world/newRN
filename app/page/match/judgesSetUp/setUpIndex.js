import React, { Component } from 'react';
import {
  Platform,
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
import Header from '../../../component/header';
import Mask from '../../../component/Mask';
import ReceSelect from '../../../component/raceselect';
import { matchStyle } from '../../../layout/matchStyle';
import { apiBa } from '../../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class SetUpIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      demoList:[
        { classid: 360, name: "创业计划", projectnum: 0 },
        { classid: 361, name: "创业计划2", projectnum: 0 },
        { classid: 362, name: "创业计划3", projectnum: 0 },
        { classid: 363, name: "创业计划4", projectnum: 0 },
        { classid: 364, name: "创业计划5", projectnum: 0 },
        { classid: 365, name: "创业计划6", projectnum: 0 },
        { classid: 366, name: "创业计划7", projectnum: 0 },
      ]
    }
  };
  componentDidMount() {
    // this.getProjectNumByProjectGameId();
  }

  render() {
    let arr = [...Array((3 - this.state.demoList.length % 3))].map((undefined) => this.state.demoList.push({ classid: null, name: null, projectnum: null}))
    let listLength = this.state.demoList.length;
    let result = [];
    for (let i = 0; i < listLength; i+=3) {
      result.push(this.state.demoList.slice(i, i + 3));
    }
    let setupList = result.map((item,index)=>{
      let setupLi = item.map((item,index)=>{
        return (
          <View style={matchStyle.setupboxLi} key={index}>
            <Text style={[matchStyle.fz_60_333, matchStyle.mb_20]}>
              {item.projectnum == null ? null : item.projectnum}
            </Text>
            <Text style={matchStyle.fz_36_333}>
              {item.name == null ? null : item.name}
            </Text>
          </View>
        )
      })
      return(
        <View style={matchStyle.setupboxTr} key={index}>
          {setupLi}
        </View>
      )
    })

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '评审设置'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '添加评委'}
          sureGo={() => this.goAddJudges()}
        />

        <View style={ matchStyle.setupTop }>
          <Text style={matchStyle.fz_48_333}>
            项目数量
          </Text>
          <View style={matchStyle.setuptopBox}>
            {setupList}
          </View>
        </View>
          
        </View>
        )
  }


  async getProjectNumByProjectGameId() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getProjectNumByProjectGameId';
    let data = {
      projectgameid: params.match_id
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    // console.log(res)
    if (res.result == "success") {
      
    } else {
      Alert.alert(res.describe);
    };
  };

  goAddJudges(){

  }
}