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
  ScrollView,
  Switch
} from 'react-native';
import { DatePicker, List, Toast } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx';
@inject('homeStore')
@observer
export default class AddProjectPage extends Component {

  constructor(props) {
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date: now,
      starttime: this.props.homeStore.mAddTime1,
      endtime: this.props.homeStore.mAddTime2,
      signendtime: this.props.homeStore.mAddTime3,
      pingendtime: this.props.homeStore.mAddTime4,
      maechName: this.props.homeStore.matchname,
      editData: '',
      typel: [
        { data: "学生直接报名", id: 1 },
        { data: "老师推荐", id: 0 },
        { data: "平级推荐", id: 2 },
      ],
      t_s_s: {},
      startDate: new Date(new Date().toLocaleDateString()),
      matchType: this.props.homeStore.matchType,
      switchType: this.props.homeStore.mSharestatus,
    }
  };

  componentDidMount() {
    if (this.props.homeStore.mSigntype != ''){     
      this.setState({
        t_s_s:toJS(this.props.homeStore.mSigntype),
      })
      let arr = toJS(this.props.homeStore.mSigntype);
      for(let i in this.state.typel){
        if (JSON.stringify(arr) == JSON.stringify(this.state.typel[i])){      
        }
      }
    }
  }

  //提交
  async updateProjectGame() {
    const { params } = this.props.navigation.state;
    let time1 = this.state.starttime;
    let time2 = this.state.endtime;
    let time3 = this.state.signendtime;
    let time4 = this.state.pingendtime;
    if (time1 == '' || time2 == '' || time3 == '' || time4 == ''){
      Toast.fail('时间不得为空，请检查', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    }
    let sharestatus = '';
    if (this.state.switchType == true){
      sharestatus = 1;
    }else{
      sharestatus = 0;      
    }
    // //转换时间
    let upstarttime = time1.getFullYear() + '-' + (time1.getMonth() + 1) + '-' + time1.getDate() + ' ' + time1.getHours() + ':' + time1.getMinutes() + ':' + time1.getSeconds();
    let upendtime = time2.getFullYear() + '-' + (time2.getMonth() + 1) + '-' + time2.getDate() + ' ' + time2.getHours() + ':' + time2.getMinutes() + ':' + time2.getSeconds();
    let upsignendtime = time3.getFullYear() + '-' + (time3.getMonth() + 1) + '-' + time3.getDate() + ' ' + time3.getHours() + ':' + time3.getMinutes() + ':' + time3.getSeconds();
    let uppingendtime = time4.getFullYear() + '-' + (time4.getMonth() + 1) + '-' + time4.getDate() + ' ' + time4.getHours() + ':' + time4.getMinutes() + ':' + time4.getSeconds();

    let url = this.props.homeStore.api + 'mobile/system/addProjectGame';
    let data = {
      orgid: this.state.beforData.orgid,
      gameid: this.props.homeStore.gameid,
      stageid: this.props.homeStore.stageid,
      projectgamename: this.state.maechName,
      starttime: upstarttime,
      endtime: upendtime,
      signendtime: upsignendtime,
      pingendtime: uppingendtime,
      signtype: this.state.t_s_s.id,
      sharestatus: sharestatus,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      Toast.success('添加成功', 30);
      this.props.homeStore.matchIndexDate.unshift(res.data)  
      this.props.navigation.goBack();
      setTimeout(() => {
        Toast.hide();
      }, 2000);
    } else {
      Alert.alert(res.describe);
    };
  };

  typeSige(item) {
    this.setState({
      t_s_s: item
    });
    this.props.homeStore.setMatchSigntype(item);
  };

  changeText(text) {
    this.props.homeStore.setMatchName(text);
  };

  switchChange(item, index) {
    
  };

  render() {
    let tylelist = this.state.typel.map((item, index) => { 
      return (
        <TouchableOpacity onPress={() => this.typeSige(item)} key={index}>
          <Text style={JSON.stringify(this.state.t_s_s) == JSON.stringify(item) ? matchStyle.type_select : matchStyle.type_f}>
            {item.data}
          </Text>
        </TouchableOpacity>
      )
    });

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '创建赛事'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '确定'}
          sureGo={() => this.updateProjectGame()}
        />
        <View style={{ backgroundColor: '#f2f2f2' }}>
          <View style={[matchStyle.match_name, matchStyle.plr_36]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                赛事名称
              </Text>
            </View>
            <TextInput style={matchStyle.inputText}
              keyboardType='default'
              defaultValue={this.state.maechName}
              onChangeText={(text) => this.changeText(text)}
              underlineColorAndroid='transparent'
              placeholder='请填写'
              placeholderTextColor='#999'
            />
          </View>

          <List style={matchStyle.mb_30}>
            <List.Item extra={this.state.matchType} arrow="horizontal" onClick={() => this.props.navigation.navigate('matchtype',)}>
              <Text style={[matchStyle.edit_font]}>
                赛事类别
              </Text>
            </List.Item>            
          </List>
          
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="开始时间"   
              extra='请选择'     
              value={this.state.starttime}
              // defaultDate={this.state.date}
              minDate={this.state.startDate}
              // onChange={(starttime) => this.props.homeStore.setMatchAddT1(starttime)}
              onChange={(starttime) => { this.setState({ starttime }); this.props.homeStore.setMatchAddT1(starttime) }}              
            >
              <List.Item arrow="horizontal">
                <Text style={[matchStyle.edit_font]}>
                  开始时间
                </Text>
              </List.Item>
            </DatePicker>
          </List>

          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="结束时间"
              value={this.state.endtime}
              minDate={this.state.startDate}              
              onChange={endtime => { this.setState({ endtime }); this.props.homeStore.setMatchAddT2(endtime) }}
            >
              <List.Item arrow="horizontal">
                <Text style={[matchStyle.edit_font]}>
                  结束时间
                </Text>
              </List.Item>
            </DatePicker>
          </List>
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="报名截止时间"
              value={this.state.signendtime}
              minDate={this.state.startDate}              
              onChange={signendtime => { this.setState({ signendtime }); this.props.homeStore.setMatchAddT3(signendtime)}}
            >
              <List.Item arrow="horizontal">
                <Text style={[matchStyle.edit_font]}>
                  报名截止时间
                </Text>
              </List.Item>
            </DatePicker>
          </List>
          <List>
            <DatePicker
              title="评分截止时间"
              value={this.state.pingendtime}
              minDate={this.state.startDate}              
              onChange={pingendtime => { this.setState({ pingendtime }); this.props.homeStore.setMatchAddT4(pingendtime)}}
            >
              <List.Item arrow="horizontal" style={{ borderTopWidth: 0 }}>
                <Text style={[matchStyle.edit_font]}>
                  评分截止时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>

          <View style={[matchStyle.editType, matchStyle.plr_36, matchStyle.pb_36]}>
            <Text style={[matchStyle.fz_42_333, matchStyle.mtb_48]}>
              报名方式
            </Text>
            <View style={matchStyle.typeList}>
              {tylelist}
            </View>
          </View>

          <View style={[matchStyle.switch_type, matchStyle.plr_36]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                全社会公开发布
              </Text>
            </View>
            <Switch
              value={this.state.switchType}
              onValueChange={(value) => {
                this.setState({
                  switchType: value,
                });
                this.props.homeStore.setMatchSharestatus(value);                              
              }
              }
            />
          </View>

        </View>

      </View>

    )
  }
}