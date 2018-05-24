import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import Header from '../../../component/header';
import { Toast } from 'antd-mobile';
import { matchStyle } from '../../../layout/matchStyle';
import { apiBa } from '../../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class addClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,      
      title: '',
      classname:'',
    }
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    // console.log(params.projectgameid)
    // console.log(params.classid)
    // console.log(params.thisdata)
    this.setState({
      title: params.classname,
    })
  }

  changeText(text){
    this.setState({
      classname:text
    })
  }

  async addSure(){
    const { params } = this.props.navigation.state;
    // console.log(params.thisdata)
    // console.log(params.thisdata.state.classTypeList)
    
    // return;
    let url = this.props.homeStore.api + 'mobile/system/addProjectGameGroup';
    if (this.state.classname == ''){
      Toast.fail('分组名称不得为空', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    } 
    let data = {
      projectgameid: params.projectgameid,
      groupname: this.state.classname,
      classid: params.classid,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      for (let i in res.data) {
        res.data[i]['selecttype'] = false;
      }
      let listdata = params.thisdata.state.classTypeList;
      listdata.push(res.data[0]);
      list = [];
      list = list.concat(listdata);
      params.thisdata.setState({
        classTypeList: list
      })
      Toast.success('添加成功', 100);
      this.props.navigation.goBack();
      setTimeout(() => {
        Toast.hide();
      }, 2000);
     
    }
  }

  render() {
    return(
      <View style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
        <Header
          titleItem={() => '添加分组'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '确定'}
          sureGo={() => this.addSure()}
        />
        <View>
          <Text style={matchStyle.classtitle}>
            {this.state.title}
          </Text>
          <View style={[matchStyle.match_name, matchStyle.plr_36, { marginTop:0}]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                分组名称
              </Text>
            </View>
            <TextInput style={matchStyle.inputText}
              keyboardType='default'
              defaultValue={this.state.classname}
              onChangeText={(text) => this.changeText(text)}
              underlineColorAndroid='transparent'
              placeholder='请填写'
              placeholderTextColor='#999'
            />
          </View>
        </View>

      </View>
    )
  }

}