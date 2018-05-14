import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import Echarts from 'native-echarts'
import Mask from '../../component/Mask';
import Header from '../../component/header';
import { matchStyle } from '../../layout/matchStyle';
import { setSpText, scaleSize } from '../../algorithm/company';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
const { width, height } = Dimensions.get('window');
@inject('homeStore')
@observer
export default class projectSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      loading: '',
      basicData: '',
      echart: '',
      tableHead: ['排名', '学院', '行业', '项目数', '总计'],   
      tableList:'',
    }
  };

  componentDidMount() {
    this.getProjectTotalInfo();
  };
  async getProjectTotalInfo() {
    let url = this.props.homeStore.api + 'mobile/system/getProjectNumTotalInfo';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        basicData: res.data,
        echart: res.data.projectnumberlist,
      });
      this.getProjectTableList();
    }
  }; 

  async getProjectTableList() {
    this.setState({
      loading: false,
    })
    let url = this.props.homeStore.api + 'mobile/system/getCollegeTradeProjectNumTotalInfo';
    let data = {
      orgid: this.state.beforData.orgid,
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        tableList: res.data,
        loading: true,
      });
    }
  }; 

  render() {
    let echart_data = []; 
    let echart_legend = []; 
    if (this.state.echart != '') {
      for(let i in this.state.echart){
        echart_data.push({
          value: this.state.echart[i].projectnumber, name: this.state.echart[i].yearname, value_2: this.state.echart[i].projectproportion
        })
        echart_legend.push(this.state.echart[i].yearname)
      }
    }
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#fb9644', '#ed6900', '#6cacde'], 
      legend: {
        orient: 'vertical',
        data: echart_legend,
        padding: [scaleSize(150), scaleSize(280), scaleSize(5), scaleSize(5)],
        x: 'right',
        y:'top',
      },
      series: [
        {
          name: '项目汇总',
          type: 'pie',
          radius: [0, '80%'],
          center: ['25%', '50%'],
          label: {            
            normal: {
              position: 'inner',
              formatter: function (params) {
                return params.name + '\nn' + params.value + '个' + '\nn' + params.data.value_2;
              },
            }
          },
          data: echart_data
        },
      ]
    };
    //列表
    let tabList = [];
    if (this.state.tableList != '') {
      tabList = this.state.tableList.map((item, index) => {
          return (
            [index + 1, item.collegename, item.tradename, item.num, item.projectsum]
          )
      })
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}      
        <Header
          titleItem={() => '项目汇总'}
          backFunc={() => this}
        />
        <View style={matchStyle.Middle}>


          <View style={[matchStyle.summaryechart, matchStyle.width_36]}>
            <Echarts option={option} height={scaleSize(500)} width={width}/>
            <View style={matchStyle.summaryOp}>
              <View>
                <Text style={matchStyle.summaryF}>
                  {this.state.basicData.projectsum}
                </Text>
                <Text style={matchStyle.summarysF}>
                  项目总数
                </Text>
              </View>   
            </View>
          </View>
        </View> 
        <View style={[matchStyle.summaryTl,{flex:1}]}>
          <Text style={[matchStyle.classTitle, matchStyle.mb_48, matchStyle.text_cen]}>项目详情</Text>
            <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.summarytable}>
                <TableWrapper>
                  <Row flexArr={[1, 2, 2, 1, 1]} data={this.state.tableHead} style={matchStyle.table_title} textStyle={[matchStyle.fz_42_333, matchStyle.text_cen]}/>
                </TableWrapper>
              </Table>
            <ScrollView style={matchStyle.summary_sceoll}>                
              <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.summarytable}>
                <TableWrapper>
                  <Rows data={tabList} flexArr={[1, 2, 2, 1, 1]} style={matchStyle.table_fontBox} textStyle={[matchStyle.text_cen, matchStyle.table_font]}/>
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
      </View>
    )
  }
}