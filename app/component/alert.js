import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Button,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
import { apiBa } from '../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class AlertBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      transparent: true,
      orgid: this.props.homeStore.basicData.orgid,
      token: this.props.homeStore.basicData.token,
    }
  }
  alertTextF() {
    if (this.props.alertText === undefined) return;
    return this.props.alertText();
  };

  BtypeF() {
    if (this.props.Btype === undefined) return;
    return this.props.Btype();
  };

  whatPage(){
    if (this.props.pageName === undefined) return;
    return this.props.pageName();
  };

  overBox(){
    this.setState({ visible: false })
    let _this = this.BtypeF();
    _this.setState({
      alertType: false,
    });
  };

  delBox(){
    this.setState({ 
      visible: false 
    })
    let _this = this.BtypeF();
    _this.setState({
      alertType: false,
    });
    let requirementid = _this.state.alertData;
    this.getSchoolData(requirementid)
  };
  //删除接口
  async getSchoolData(requirementid) {
    let _this = this.BtypeF();
    let list_data = this.BtypeF().state.data;
    let pagename  = this.whatPage();
    let url = '';
    if (pagename == '本校需求'){
      url = this.props.homeStore.api + 'mobile/system/deleteByPersonRequirementId';
    }
    if (pagename == '推荐需求') {
      url = this.props.homeStore.api + 'mobile/system/deleteRequirementOrgRecommend';
    }
    let data = {
      orgid: this.state.orgid,
      requirementid: requirementid
    }
    const res = await apiBa(url, data, "POST", this.state.token, this.props);
    if (res.result == "success") {
      for (let i in list_data) {
        if (requirementid == list_data[i].requirementid) {
          list_data.splice(i, 1)
        }
      };
      list = [];
      list = list.concat(list_data);
      _this.setState({
        data: list
      });
    } else {
      Alert.alert(res.describe);
    };
  };

  render() {
    return (
      <View>
        <Modal
          visible={this.state.visible}
          transparent={this.state.transparent}
          >
          <View
            style={alertBox.alertList}>
            <View style={alertBox.alertList_ine}>
              <View style={alertBox.alertList_line}>
                <Text style={alertBox.alertList_title}> {this.alertTextF()} </Text>
              </View>
              <View style={alertBox.alertList_line}>
                <TouchableOpacity style={[alertBox.alertList_btn,{backgroundColor:'#fff'}]} onPress={() => this.overBox()}>
                  <Text style={{ color: '#999', fontSize: scaleSize(48)}}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[alertBox.alertList_btn, { backgroundColor: '#499165' }]} onPress={() => this.delBox()}>
                  <Text style={{ color: '#fff', fontSize: scaleSize(48) }}>确定</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}


const alertBox = StyleSheet.create({
  alertList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b00',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  alertList_ine: {
    height: scaleSize(360),
    width: scaleSize(945),
    backgroundColor: 'white',
    borderRadius: scaleSize(20),
  },
  alertList_line: {
    flex: 1,
    flexDirection: 'row',
  },
  alertList_title: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: scaleSize(48),
    marginTop: scaleSize(48),
    marginLeft: scaleSize(48),

  },
  alertList_btn: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: scaleSize(1),
    borderTopColor: '#999',
  },

})