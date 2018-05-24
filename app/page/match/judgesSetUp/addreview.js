import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  ScrollView
} from 'react-native';
import Header from '../../../component/header';
import { Toast, List, ActionSheet,} from 'antd-mobile';
import { matchStyle } from '../../../layout/matchStyle';
import { apiBa } from '../../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class addReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      phone:'',
      viewname: '',
      visible: false,
      transparent: true,      
      classtypelist:[],
    }
  };
  componentDidMount() {
    this.getCLassList();
  }

  async getCLassList() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getProjectClassProjectGameGroupListByProjectGameId';
    let data = {
      projectgameid: params.projectgameid,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        classtypelist: res.data
      })
      for (let i in res.data){
        for (let j in res.data[i].grouplist){
          res.data[i].grouplist[j]['select'] = false;
        }
      }
    }
  }

  changeText_1(text) {
    this.setState({
      viewname: text
    })
  }

  changeText_2(text) {
    this.setState({
      phone: text
    })
  }

  async addSure() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/addProjectGameRater';
    let groupidArr = [];
    for (let i in this.state.classtypelist) {
      for (let j in this.state.classtypelist[i].grouplist) {
        if (this.state.classtypelist[i].grouplist[j].select == true) {
          groupidArr.push(this.state.classtypelist[i].grouplist[j].groupid)
        }
      }
    }
    let groupid = groupidArr.join("&");
    if (this.state.viewname == '') {
      Toast.fail('评审姓名不得为空', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    }
    let reg = /^1[3|4|5|7|8|9][0-9]{9}$/;
    if (reg.test(this.state.phone) == false) {
      Toast.fail('电话格式不正确请重新输入', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    }
    if (groupid == '') {
      Toast.fail('请选择赛事类别', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
      return;
    }
    let data = {
      orgid: this.state.beforData.orgid,
      username: this.state.viewname,
      phone: this.state.phone,
      groupid: groupid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      params._this.setState({
        RefreshType: true,
      });
      Toast.success('添加成功', 100);
      this.props.navigation.goBack();
      setTimeout(() => {
        Toast.hide();
      }, 2000);
    }
  }

  selectBox(item){
    for (let i in this.state.classtypelist) {
      for (let j in this.state.classtypelist[i].grouplist) {
        if (this.state.classtypelist[i].grouplist[j].groupid == item.groupid){
          this.state.classtypelist[i].grouplist[j].select = !this.state.classtypelist[i].grouplist[j].select
        }
      }
    }
    // console.log(this.state.classtypelist);
    this.setState({
      classtypelist: this.state.classtypelist
    })
  }

  hideM() {
    this.setState({ visible: false })
  }
  hideS() {
    this.setState({ visible: false })
  }

  render() {
    let typeList = [];
    if (this.state.classtypelist != []){
      typeList = this.state.classtypelist.map((item,index)=>{
        let typeSmallList = item.grouplist.map((item, index) => {
            return (
              <TouchableOpacity style={item.select == false ? [matchStyle.modelList_s, matchStyle.borderColor_de] : [matchStyle.modelList_s, matchStyle.borderColor_blue]} onPress={() => this.selectBox(item)} key={index}>
                <Text style={item.select == false ? matchStyle.modelText : matchStyle.modelSText} numberOfLines={1}>
                  {item.groupname}
                </Text>
              </TouchableOpacity>
            )
        })
        return(
          <View key={index}>
            <Text style={[matchStyle.modeltitle, matchStyle.fz_42_333]}>
              {item.name}
            </Text>
            <View style={matchStyle.modelList}>
              {typeSmallList.length == [] ? <Text style={matchStyle.nofont}>暂无数据</Text> : typeSmallList }
            </View>
          </View>
        )
      })
    }
    return (
      <View style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
        <Header
          titleItem={() => '添加评委'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '确定'}
          sureGo={() => this.addSure()}
        />
        <View>
         
          <View style={[matchStyle.match_name, matchStyle.plr_36, matchStyle.borderTop_1_eee, { marginTop: 0,marginBottom:0 }]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                姓名
              </Text>
            </View>
            <TextInput style={matchStyle.inputText}
              keyboardType='default'
              defaultValue={this.state.viewname}
              onChangeText={(text) => this.changeText_1(text)}
              underlineColorAndroid='transparent'
              placeholder='请填写'
              placeholderTextColor='#999'
            />
          </View>

          <View style={[matchStyle.match_name, matchStyle.plr_36, matchStyle.borderTop_1_eee,{ marginTop: 0, marginBottom: 0,}]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                电话
              </Text>
            </View>
            <TextInput style={matchStyle.inputText}
              keyboardType='default'
              defaultValue={this.state.phone}
              onChangeText={(text) => this.changeText_2(text)}
              underlineColorAndroid='transparent'
              placeholder='请填写'
              placeholderTextColor='#999'
            />
          </View>

          <List style={[matchStyle.mb_30, { marginTop: 0}]}>
            <List.Item extra={this.state.matchType} arrow="horizontal" onClick={() => { this.setState({ visible: true }) }}>
              <Text style={[matchStyle.edit_font]}>
                赛事类别
              </Text>
            </List.Item>
          </List>

          <Modal
            visible={this.state.visible}
            transparent={this.state.transparent}
            animationType='fade'
          >
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <TouchableOpacity style={matchStyle.mobelTop} onPress={() => this.hideM()}>
              </TouchableOpacity>
              <View style={matchStyle.mobel}>
                <View style={[matchStyle.mobelTitle, matchStyle.borderBottom_1_dedede]}>
                  < TouchableOpacity onPress={() => this.hideM()}>
                    <Text style={matchStyle.fz_42_999}>
                      取消
                    </Text>
                  </TouchableOpacity>
                
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={[matchStyle.fz_48_333]}>
                      所在分组
                    </Text>
                  </View>
                  < TouchableOpacity onPress={() => this.hideS()}>
                  <Text style={matchStyle.fz_42_259461}>
                    确定
                  </Text>
                  </TouchableOpacity>                  
                </View>
                  
                <ScrollView>
                  {typeList}
                </ScrollView>

              </View>
            </View>
            
          </Modal>
          
        </View>

      </View>
    )
  }

    
}