import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import TableHeader from '../../component/taberheader';
import Mask from '../../component/Mask';
import AlertBox from '../../component/alert';
import { homeStyle } from '../../layout/homeStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class DemandSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      orgid: this.props.homeStore.basicData.orgid,
      token: this.props.homeStore.basicData.token,
      refreshing: false,
      showFoot: 0,
      pageNum:1,
      totalPage:'',
      alertData: '',
      alertType: false,
    }
  };
  componentDidMount() {
    this.getSchoolData(1);
  };
  async getSchoolData(page){
    let url = this.props.homeStore.api + 'mobile/system/getThisOrgRequirementListByCondition';
    let data = {
      orgid: this.state.orgid,
      page: page
    }
    const res = await apiBa(url, data, "POST", this.state.token, this.props.thisProps());
    if (res.result == "success") {
      this.setState({
        totalPage: res.data.totalpage
      });    
      if ((this.state.pageNum >= this.state.totalPage)) {
        this.setState({
          showFoot: 1,
        });
      } else {
        this.setState({
          showFoot: 2,
        });
      };
      if (res.data.page == 1) {
        this.setState({
          data: res.data.requirementlist,
          pageNum: 1,
        });
      }else{
        this.state.data.push(...res.data.requirementlist);
        this.setState({
          pageNum: page,
        });
      }
    } else {
      Alert.alert(res.describe);
    };
  };
  //alert组件
  alertText() {
    return (
      '您确定取消推荐此需求?'
    )
  };
  alert(item) {
    this.state.alertData = '';
    this.setState({
      alertType: true,
      alertData: item.requirementid,
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.alertType == true ?
          <AlertBox
            alertText={() => this.alertText()}
            Btype={() => this}
            pageName={() => '本校需求'}
          />
          : null}
          <View style={[homeStyle.overViewStyle]}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderMovie}
              style={homeStyle.list}
              onRefresh={this.onRefresh}
              onEndReachedThreshold={0.1}
              onEndReached={this._onEndReached}
              ListFooterComponent={this._renderFooter}
              refreshing={this.state.refreshing}
              keyExtractor={this._extraUniqueKey}
            />
          </View>
      </View>
    )
  }
  onRefresh = () => {
    this.setState({
      refreshing: true,
      pageNum: 1,
    });
    const timer = setTimeout(() => {
      this.getSchoolData(1);
      this.setState({
        refreshing: false,
      });
    }, 1500);
  };
  renderMovie = ({ item, index }) => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <View style={[homeStyle.leftRight36D, homeStyle.demandList]}>
      <View style={[homeStyle.demandInline]}>
        <Image
          source={{ uri: item.userimage }}
          style={homeStyle.demandImg}
        />
        <View style={homeStyle.demandNameT}>
          <Text style={[homeStyle.font_36_333, homeStyle.marginB_15]}>{item.postername}</Text>
          <Text style={[homeStyle.font_30_999]}> {item.createtime} </Text>
        </View>
      </View>
      <View style={[homeStyle.demandInline]}>
        <Text style={homeStyle.demandInline_2F}> {item.title} </Text>
      </View>
      <View style={[homeStyle.demandInline]}>
        <View style={homeStyle.demandInline_3F_1}>
          <Text style={[homeStyle.border_yellow, homeStyle.marginR_15, homeStyle.demandInline_3_font]}>区域</Text>
          <Text style={[homeStyle.font_30_333]}> {item.provincename} - {item.cityname}</Text>
        </View>
        <View style={homeStyle.demandInline_3F}>
          <Text style={[homeStyle.border_yellow, homeStyle.marginR_15, homeStyle.demandInline_3_font]}>行业</Text>
          <Text style={[homeStyle.font_30_333]}>{item.tradename} - {item.subtradename}</Text>
        </View>
      </View>
      <View style={[homeStyle.demandInline]}>
        <View style={homeStyle.demandLine}></View>
      </View>
      <View style={[homeStyle.demandInline, homeStyle.demandBot]}>
        <View style={homeStyle.demandInline_3F_1}>
          <Text style={[homeStyle.font_30_999]}>浏览 {item.browsenumber} 次</Text>
        </View>
        <View style={homeStyle.demandInline_3F}>
          <Text style={[homeStyle.font_30_999]}>承接 {item.willnumber} 次</Text>
        </View>
      </View>
      <TouchableOpacity style={[homeStyle.demandDem]} onPress={() => this.alert(item)}>
        <Text style={homeStyle.delbtn}>×</Text>
      </TouchableOpacity>
    </View>
      </View>
  );
  _renderFooter=()=>{
    if (this.state.showFoot == 0) {
      return (
        <View style={homeStyle.footer}>
          <Text></Text>
        </View>
      )
    };
      if (this.state.showFoot == 1) {
      return (
        <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
          <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
            没有更多数据了
          </Text>
         </View>
      );
    };
    if (this.state.showFoot == 2) {
      return (
        <View style={homeStyle.footer}>
          <Text>下拉加载更多数据...</Text>
        </View>
      );
    };
  };
  _onEndReached = () => {
    if ((this.state.pageNum >= this.state.totalPage)) {
      return;
    } else {
      this.state.pageNum++
    }
    this.setState({ showFoot: 2 });
    this.getSchoolData(this.state.pageNum);
  };

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }  
}