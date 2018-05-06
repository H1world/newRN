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
import { Table, TableWrapper, Row, Rows, Col  } from 'react-native-table-component';
// import { Accordion, List } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class reviewProgress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date:'',
      tableHead: ['评审方式', '联系方式', '已评', '未评', '进度'],
      tableData: [
        ['周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦', '12333333333', '10', '10', '25%'],
        ['周杰伦', '12333333333', '10', '10', '25%'],
        ['周杰伦', '12333333333', '10', '10', '25%'],
      ]
    }
  };

  componentDidMount() {
    this.gitRPlist()
  };

  async gitRPlist() {
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getRaterPingProcessByProjectGameId';
    let data = {
      projectgameid: getprojectgameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    console.log(res)
    if (res.result == "success") {
      this.setState({
        date: res.data,
      });
    } else {
      Alert.alert(res.describe);
    };
  }

  onChange = (key) => {
    console.log(key);
  };

  render() {
    const state = this.state;
    let datelist = [];
    if (this.state.date != ''){
      datelist = this.state.date.map((item,index)=>{
        return(
          <View style={matchStyle.RP_list}>
            <View style={[matchStyle.width_36]}>
              <View style={matchStyle.RP_listBox}>
                <View style={matchStyle.RP_lb_ine}>
                  <Image
                    source={require('../../image/icon_home_green3x.png')}
                    style={[matchStyle.RP_icon, matchStyle.mr_27]}
                  />
                  <Text style={matchStyle.fz_42_333}>{item.projectclassname}</Text>
                </View>
                <View style={[matchStyle.RP_lb_ine, matchStyle.fl_R]}>
                  <Text style={[matchStyle.fz_42_333, matchStyle.mr_27]}>50%</Text>
                  <Image
                    source={require('../../image/icon_home_green3x.png')}
                    style={matchStyle.RP_icon_2}
                  />
                </View>
              </View>
              <View style={matchStyle.RP_CL}>
                <Text style={matchStyle.classTitle}>第一组</Text>
                <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.table}>
                  <TableWrapper flexArr={[2, 2, 1, 1, 1]}>
                    <Row flexArr={[2, 2, 1, 1, 1]} data={this.state.tableHead} style={matchStyle.table_title} textStyle={[matchStyle.fz_42_333, matchStyle.text_cen]} />
                    <Rows data={this.state.tableData} flexArr={[2, 2, 1, 1, 1]} style={matchStyle.table_fontBox} textStyle={[matchStyle.text_cen, matchStyle.table_font]} numberOfLines={2} />
                  </TableWrapper>
                </Table>
              </View>
            </View>
          </View>
        )
      })
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => '评审进度'}
          backFunc={() => this}
        />
        
        {/* <Accordion onChange={this.onChange}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion> */}
        <View style={matchStyle.width_line}></View>
        <View style={matchStyle.width_box}>
          {/* <View style={matchStyle.RP_list}>
              <View style={[matchStyle.width_36]}>
                <View style={matchStyle.RP_listBox}>
                  <View style={matchStyle.RP_lb_ine}>
                    <Image
                      source={require('../../image/icon_home_green3x.png')}
                      style={[matchStyle.RP_icon, matchStyle.mr_27]}
                    />
                    <Text style={matchStyle.fz_42_333}>创意类</Text>
                  </View>
                  <View style={[matchStyle.RP_lb_ine, matchStyle.fl_R]}>
                    <Text style={[matchStyle.fz_42_333, matchStyle.mr_27]}>50%</Text>
                    <Image
                      source={require('../../image/icon_home_green3x.png')}
                      style={matchStyle.RP_icon_2}
                    />
                  </View>
                </View>
                <View style={matchStyle.RP_CL}> 
                  <Text style={matchStyle.classTitle}>第一组</Text>
                  <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.table}>
                      <TableWrapper flexArr={[2, 2, 1, 1, 1]}>
                        <Row flexArr={[2, 2, 1, 1, 1]} data={this.state.tableHead} style={matchStyle.table_title} textStyle={[matchStyle.fz_42_333, matchStyle.text_cen]}/>
                        <Rows data={this.state.tableData} flexArr={[2, 2, 1, 1, 1]} style={matchStyle.table_fontBox} textStyle={[matchStyle.text_cen, matchStyle.table_font]} numberOfLines={2}/>
                    </TableWrapper>
                  </Table>
              </View>
            </View>           
          </View> */}
          <ScrollView style={matchStyle.RP_sceoll}>
          {datelist}
          </ScrollView>
        </View>

      </View>
    )
  }
}
