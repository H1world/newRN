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
// import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';
import { Table, TableWrapper, Row, Rows, Col, Cell } from '../../../Resources/react-native-table-component';
import { setSpText, scaleSize } from '../../algorithm/company';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer


export default class ProjectMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date: '',
      tableHead: ['项目地图', '移动互联网', '云计算', '大数据', '人工智能', '物联网', '虚拟现实'],
      loading:'',
      // tableHead: ['dff', 'Head1', 'Head2', 'Head3'],
      // tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      demo1: ['dff', 'Head1', 'Head2', 'Head3'],
      demo2: [
        ['0', '2', '3', '4', '5', '6'],
        ['1', '2', '3', '4', '5', '6'],
        ['1', '2', '3', '4', '5', '6'],
        ['1', '2', '3', '4', '5', '6'],
      ],
    }
  };

  componentDidMount() {
    this.gitRPlist()
  };

  async gitRPlist() {
    this.setState({
      loading: false,      
    })
    let url = this.props.homeStore.api + 'mobile/system/getProjectTradeOfTechnologyMap';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    // console.log(res)
    // console.log(this.state.tableData)
    if (res.data != '') {
      for (let i in res.data) {
        res.data[i]['selecttype'] = false;
      }
    }
    if (res.result == "success") {
      this.setState({
        date: res.data,
        loading: true,
      });
    }
  
  }

  showTable(index) {        
    let date_t = this.state.date.map((item, index_t) => {
      if (index_t == index) {
        this.state.date[index_t].selecttype = !this.state.date[index_t].selecttype
      }
      return (item)
    })
    // console.log(date_t)        
    this.setState({
      date: date_t
    })
  }

  demo(item) {
    console.log(item)
  }

  render() {
    let datelist = [];
    if (this.state.date != '') {
      datelist = this.state.date.map((item, index) => {
        let tableTitle = item.subtradelist.map((item) => {
          return (
            [item.subtradename]
          )
        })
        let subtrade_list = [];
        for (let i in item.subtradelist){
          let table_list = [];
          for (let j in item.subtradelist[i].technologylist) {
            table_list.push(item.subtradelist[i].technologylist[j].num)
          }
          subtrade_list.push(table_list)
        }
        return (
          <View style={matchStyle.RP_list} key={index}>
            <View style={[matchStyle.width_36]}>
              <TouchableOpacity style={[matchStyle.RP_listBox]} onPress={() => this.showTable(index)}>
                <View style={matchStyle.RP_lb_ine}>
                  <Image
                    source={require('../../image/icon_creative3x.png')}
                    style={[matchStyle.RP_icon, matchStyle.mr_27]}
                  />
                  <Text style={matchStyle.fz_42_333}>{item.tradename}</Text>
                </View>
                <View style={[matchStyle.RP_lb_ine, matchStyle.fl_R]}>
                  <Text style={[matchStyle.fz_42_333, matchStyle.mr_27]}> {item.avgpingprocess} </Text>
                  <Image
                    source={require('../../image/icon_return3x.png')}
                    style={[matchStyle.RP_icon_2, item.selecttype == false ? matchStyle.transformR_180 : null]}
                  />
                </View>
              </TouchableOpacity>
              {item.selecttype == false ? null :
                <View>
                  <View style={[matchStyle.RP_CL]} key={index}>
                    <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.mapTable}>
                      <Row flexArr={[1, 1.5, 1, 1, 1, 1, 1]} data={this.state.tableHead} style={matchStyle.map_table_title} textStyle={[matchStyle.fz_30_999, matchStyle.text_cen]} />
                      <TableWrapper style={{ flexDirection: 'row' }}>
                        <Col data={tableTitle} numberOfLines={1} textStyle={[matchStyle.fz_30_333, matchStyle.text_cen]} heightArr={[scaleSize(110)]} />
                        <Rows data={subtrade_list} flexArr={[1, 1, 1, 1, 1, 1]} style={matchStyle.map_table_fontBox} textStyle={[matchStyle.fz_30_333, matchStyle.text_cen]} textStyleY={matchStyle.fz_30_f28109} numberOfLines={1} />
                      </TableWrapper>
                    </Table>
                  </View>
                </View>
              }
            </View>
          </View>
        )
      })
    }

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}
        <Header
          titleItem={() => '项目地图'}
          backFunc={() => this}
        />
        <ScrollView style={matchStyle.RP_sceoll}>
          {datelist}
        </ScrollView>
      </View>
    )
  }
}
