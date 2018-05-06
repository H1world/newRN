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
import { DatePicker, List, Toast } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchEdit extends Component {
  
  constructor(props) {
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date: now,
      starttime:'',
      endtime:'',
      signendtime: '',
      pingendtime:'',
      maechName:'',
      editData:'',
      typel:[
        { data: '学生直接报名',id: 1 },
        { data: '老师推荐', id: 0 },
        { data: '平级推荐', id: 2 },
      ],
      t_s_s:{},
    }
  };

  componentDidMount() {
    this.getMatcheditList();
  }

  async getMatcheditList() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameInfo';
    let data = {
      projectgameid: params.match_id
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);

    if (res.result == "success") {
      this.setState({
        editData: res.data,
        starttime: new Date(res.data.starttime),
        endtime: new Date(res.data.endtime),
        signendtime: new Date(res.data.signendtime),
        pingendtime: new Date(res.data.pingendtime),
        maechName: res.data.projectgamename,
      });
      for (let i in this.state.typel){
        if (res.data.signtype == this.state.typel[i].id){
          this.setState({
            t_s_s: this.state.typel[i]
          })
        }
      }
    } else {
      Alert.alert(res.describe);
    };
  };
  //提交
  async updateProjectGame() {
    const { params } = this.props.navigation.state;
    let time1 = this.state.starttime;
    let time2 = this.state.endtime;
    let time3 = this.state.signendtime;
    let time4 = this.state.pingendtime;
    // //转换时间
    let upstarttime = time1.getFullYear() + '-' + (time1.getMonth() + 1) + '-' + time1.getDate() + ' ' + time1.getHours() + ':' + time1.getMinutes() + ':' + time1.getSeconds(); 
    let upendtime = time2.getFullYear() + '-' + (time2.getMonth() + 1) + '-' + time2.getDate() + ' ' + time2.getHours() + ':' + time2.getMinutes() + ':' + time2.getSeconds(); 
    let upsignendtime = time3.getFullYear() + '-' + (time3.getMonth() + 1) + '-' + time3.getDate() + ' ' + time3.getHours() + ':' + time3.getMinutes() + ':' + time3.getSeconds(); 
    let uppingendtime = time4.getFullYear() + '-' + (time4.getMonth() + 1) + '-' + time4.getDate() + ' ' + time4.getHours() + ':' + time4.getMinutes() + ':' + time4.getSeconds(); 
    
    let url = this.props.homeStore.api + 'mobile/system/updateProjectGame';
    let data = {
      projectgameid: params.match_id,
      projectgamename: this.state.maechName,
      starttime: upstarttime,
      endtime: upendtime,
      signendtime: upsignendtime,
      pingendtime: uppingendtime,
      signtype: this.state.t_s_s.id,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);

    if (res.result == "success") {
      Toast.success('修改成功', 30);
      let match_t1 = time1.getFullYear() + '-' + (time1.getMonth() + 1) + '-' + time1.getDate();
      let match_t2 = time3.getFullYear() + '-' + (time3.getMonth() + 1) + '-' + time3.getDate()
      let list = this.props.homeStore.matchIndexDate.slice();
      let list_1 = [];
      for (let i in list) {
        if (params.match_id == this.props.homeStore.matchIndexDate.slice()[i].projectgameid) {
          list[i].projectgamename = this.state.maechName;
          list[i].starttime = match_t1;
          list[i].signendtime = match_t2;
          list[i].gameflagname = this.state.t_s_s.data;
        }
      }
      this.props.homeStore.matchIndexDate = list_1.concat(list);
      this.props.navigation.goBack();  
      setTimeout(() => {
        Toast.hide();
      }, 2000);  
    } else {
      Alert.alert(res.describe);
    };
  };

  typeSige(item){
    this.setState({
      t_s_s: item
    });
  };

  changeText(text){
    this.setState({
      maechName: text,
    });
  };
  render() {
    let tylelist = this.state.typel.map((item,index)=>{
      return(
        <TouchableOpacity onPress={() => this.typeSige(item)} key={index}>
          <Text style={this.state.t_s_s == item ? matchStyle.type_select : matchStyle.type_f}>
            {item.data}
          </Text>
        </TouchableOpacity>
        
      )
    });
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '修改赛事信息'}
          backFunc={() => this}
          headRight={() => true}
          sureGo={() => this.updateProjectGame()}
        />
        <View style={{ backgroundColor: '#f2f2f2'}}> 
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
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="开始时间"
              value={this.state.starttime}
              onChange={starttime => this.setState({ starttime })}
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
              onChange={endtime => this.setState({ endtime })}
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
              onChange={signendtime => this.setState({ signendtime })}
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
              onChange={pingendtime => this.setState({ pingendtime })}
            >
              <List.Item arrow="horizontal" style={{ borderTopWidth: 0}}>
                <Text style={[matchStyle.edit_font]}>
                  评分截止时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>

          <View style={[matchStyle.editType, matchStyle.plr_36]}>
            <Text style={[matchStyle.fz_42_333, matchStyle.mtb_48]}>
              报名方式
            </Text>
            <View style={matchStyle.typeList}>
              {tylelist}
            </View>
          </View>

        </View>

      </View>

    )
  }
}