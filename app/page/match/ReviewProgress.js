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
      tableHead: ['评委姓名', '联系方式', '已评', '未评', '进度'],
      loading: '',      
    }
  };

  componentDidMount() {
    this.gitRPlist()
  };

  async gitRPlist() {
    this.setState({
      loading: false,
    })
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getRaterPingProcessByProjectGameId';
    let data = {
      projectgameid: getprojectgameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      if (res.data != ''){
        for (let i in res.data){
          res.data[i]['selecttype'] = false;
        }
      }
      this.setState({
        date: res.data,
        loading: true,
      });
    } else {
      Alert.alert(res.describe);
    };
  }

  showTable(index){
    let date_t = this.state.date.map((item,index_t)=>{
      if (index_t == index){
        this.state.date[index_t].selecttype = !this.state.date[index_t].selecttype
      }
      return(item)
    })
    this.setState({
      date: date_t
    })
  }

  render() {
    let datelist = [];
    if (this.state.date != ''){
      datelist = this.state.date.map((item,index)=>{   
        let list_2 = item.grouplist.map((item,index)=>{
          let table_list = item.teacherlist.map((item)=>{
            return(
              [item.username, item.phone, item.checkednum, item.notcheckednum, item.raterpingprocess]
            )
          })
          return(
            <View style={[matchStyle.RP_CL]} key={index}>
              <Text style={matchStyle.classTitle}>{item.groupname}</Text>
              <Table borderStyle={{ borderWidth: 0 }} style={matchStyle.table}>
                <TableWrapper flexArr={[2, 2, 1, 1, 1]}>
                  <Row flexArr={[2, 2, 1, 1, 1]} data={this.state.tableHead} style={matchStyle.table_title} textStyle={[matchStyle.fz_42_333, matchStyle.text_cen]} />
                  <Rows data={table_list} flexArr={[2, 2, 1, 1, 1]} style={matchStyle.table_fontBox} textStyle={[matchStyle.text_cen, matchStyle.table_font]} numberOfLines={2} />
                </TableWrapper>
              </Table>
            </View>
          )
        })
        return(
          <View style={matchStyle.RP_list} key={index}>
            <View style={[matchStyle.width_36]}>
              <TouchableOpacity style={[matchStyle.RP_listBox]} onPress={() => this.showTable(index)}>
                <View style={matchStyle.RP_lb_ine}>
                  <Image
                    source={require('../../image/icon_creative3x.png')}
                    style={[matchStyle.RP_icon, matchStyle.mr_27]}
                  />
                  <Text style={matchStyle.fz_42_333}>{item.projectclassname}</Text>
                </View>
                <View style={[matchStyle.RP_lb_ine, matchStyle.fl_R]}>
                  <Text style={[matchStyle.fz_42_333, matchStyle.mr_27]}> {item.avgpingprocess} </Text>
                  {/* <TouchableOpacity onPress={() => this.showTable(index)}> */}
                    <Image
                      source={require('../../image/icon_return3x.png')}
                      style={[matchStyle.RP_icon_2,  item.selecttype == false ? matchStyle.transformR_180 : null ]}
                    />
                  {/* </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
              {item.selecttype == false ? null :
                <View>
                  {list_2}
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
          titleItem={() => '评审进度'}
          backFunc={() => this}
        />
        <View style={matchStyle.width_line}></View>
        {/* <View style={matchStyle.width_box}> */}
          <ScrollView style={matchStyle.RP_sceoll}>
          {datelist}
          </ScrollView>
        {/* </View> */}

      </View>
    )
  }
}
