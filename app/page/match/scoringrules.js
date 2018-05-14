import React, { Component } from 'react';
import {
  Text,
  View,
  Switch
} from 'react-native';
import { Toast } from 'antd-mobile';
import Header from '../../component/header';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa,copy } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class ScoringRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date:'',
    };
  }

  componentDidMount() {
    this.getConfig();
  }

  async getConfig() {
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameConfig';
    let data = {
      projectgameid: getprojectgameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      for (let i in res.data){
        if (res.data[i].configvalue == "1"){
          res.data[i].configvalue = true
        }else{
          res.data[i].configvalue = false
        }
      };  
      this.setState({
        date: res.data
      })
    } else {
      Toast.fail(res.describe, 30);
      setTimeout(() => {
        Toast.hide();
      }, 2000);  
    };
  };

  async updateConfig(){
    let data_b = this.state.date;
    let list = [];
    let config = [];    
    list = copy(data_b, list);
    for (let i in list){
      if (list[i].configvalue == true) {
        list[i].configvalue = '1'
      } else {
        list[i].configvalue = '0'
      }
      config.push(list[i].configkey + '_' + list[i].configvalue )
    };
    let configStr = config.join(",")
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/updateProjectGameConfig';
    let data = {
      projectgameid: getprojectgameid,
      config: configStr
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      Toast.success('修改成功', 30);
      setTimeout(() => {
        Toast.hide();
      }, 2000);  
    } else {
      Toast.fail(res.describe, 30);
      setTimeout(() => {
        Toast.hide();
      }, 2000);  
    };

  };

  switchChange(item,index){
    let date_t = this.state.date.map((item, index_t) => {
      if (index_t == index) {
        this.state.date[index_t].configvalue = !this.state.date[index_t].configvalue
      }
      return (item)
    })
    this.setState({
      date: date_t
    })
  };


  render() {
    let datelist = [];
    if (this.state.date != '') {
      datelist = this.state.date.map((item, index) => {
        return(
          <View style={matchStyle.scoring} key={index}>
            <View style={matchStyle.scoring_list}>
              <Text style={matchStyle.scoring_list_text}>
                {item.configkey}
            </Text>
              <Switch
                value={item.configvalue}
                onChange= { () => this.switchChange(item,index)}
              />
            </View>
            <Text style={matchStyle.scoring_text}>
              {item.context}
            </Text>
          </View> 
        )
      })
    }

    return (
      <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
        <Header
          titleItem={() => '评审规则'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '确定'}          
          sureGo={() => this.updateConfig()}
        />
        {datelist}
      </View>      
    )
  }
}