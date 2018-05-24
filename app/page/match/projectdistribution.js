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
import Header from '../../component/header';
import { Toast, List, ActionSheet, } from 'antd-mobile';
import { matchStyle } from '../../layout/matchStyle';
import { setSpText, scaleSize } from '../../algorithm/company';
import { apiBa } from '../../../api/api';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class Distribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      tableHead: ['组别', '项目数', '已分配数量', '未分配数量'],   
      tabledata: [],
    }
  };
  componentDidMount() {
    this.getAllotTotalInfo();
  }

  async getAllotTotalInfo() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getAllotTotalInfo';
    let data = {
      projectgameid: params.match_id,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        tabledata: res.data.projectclasslist,
      })
    }
  }

  async surnDistribution() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/allotProjectToGroup';
    let data = {
      projectgameid: params.match_id,
      requestnum:1
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      Toast.success('分配成功', 100);
      this.getAllotTotalInfo();      
      setTimeout(() => {
        Toast.hide();
      }, 2000);
    }
  }

  render() {
    let tabRight=[];
    let tabContent = [];
    if (this.state.tabledata != []){
      tabRight = this.state.tabledata.map((item,index)=>{
        return(
          item.classname
        )
      })
      for (let i in this.state.tabledata) {
        tabContent.push([this.state.tabledata[i].allclassnum, this.state.tabledata[i].allotprojectclassnum, this.state.tabledata[i].notallotprojectnum])
      }
    }
    return (
      <View style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
        <Header
          titleItem={() => '项目分配'}
          backFunc={() => this}
        />
        <View>
          <View style={[matchStyle.RP_CL]}>
            <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.mapTable}>
              <Row flexArr={[2,1, 1, 1]} data={this.state.tableHead} style={matchStyle.map_table_title} textStyle={[matchStyle.fz_30_999, matchStyle.text_cen]} />
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={tabRight} flex={2} numberOfLines={1} textStyle={[matchStyle.fz_30_333, matchStyle.text_cen]} heightArr={[scaleSize(110)]} />
                <Rows data={tabContent} flexArr={[1, 1, 1]} style={matchStyle.map_table_fontBox} textStyle={[matchStyle.fz_30_333, matchStyle.text_cen]} numberOfLines={1} />
              </TableWrapper>
            </Table>
            <View style={matchStyle.distributionBtn}>
              <TouchableOpacity style={matchStyle.distributionBtn_b} onPress={() => this.surnDistribution()}>
                <Text style={matchStyle.btn_t}>
                  自动分配
                </Text>
              </TouchableOpacity>
            </View>
          </View>          
        </View>

     </View>
    )
  }
}