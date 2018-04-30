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
import Echarts from 'native-echarts'
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      search:'',
      listData:'',
    }
  };
  componentDidMount() {
    // this.getSearch();
  }

  async getSearch() {
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameSearchCondition';
    let data = {}
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        search: res.data,
      });
      this.getList(0,0,1)
    } else {
      Alert.alert(res.describe);
    };
  };

  async getList(year,state,page) {
    let url = this.props.homeStore.api + 'mobile/system/getOrgProjectGameList';
    let data = {
      year: year,
      state: state,
      page: page
    }
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        listData: res.data,
      });
      console.log(this.state.listData)
    } else {
      Alert.alert(res.describe);
    };
  };

  async getSearch() {
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameSearchCondition';
    let data = {}
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        search: res.data,
      });
    } else {
      Alert.alert(res.describe);
    };
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '赛事'}
          backFunc={() => this}
        />
        <ReceSelect
          select_1={() => '年份'}
          select_2={() => '状态'}
          _this={() => this}
          listTitle={() => '赛事'}
          listData={() => this.state.search}
        />
        <View style={matchStyle.matchSubject}>
          <View style={matchStyle.matchBox}>
            <View style={matchStyle.matchinside}>
              <Image
                source={require('../../image/loading.png') }
                style={matchStyle.matchLogo}
              />
              <View style={matchStyle.matchTextBox}>
                <View style={matchStyle.matchNull}>
                  <Text style={matchStyle.font_1} numberOfLines={1}>
                    工具啊开了个会就+什测试测试测试测试测试测试测试测试测试测试测试
                  </Text>
                  <View style={matchStyle.icon_B}>
                    <Image
                      source={require('../../image/icon_ongoing.png')}
                      style={matchStyle.icon}
                    />
                  </View>
                </View>
                <View style={matchStyle.matchNull}>
                  <Text style={matchStyle.fz_36_666}>
                    组织：电视剧哦感觉
                  </Text>
                </View>
                <View style={[matchStyle.matchNull, matchStyle.mg_42]}>
                  <Text style={[matchStyle.mr_100, matchStyle.fz_36_666]}>
                    项目数：34
                  </Text>
                  <Text style={[matchStyle.fz_36_666]}>
                    创建者：张三
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../image/icon_xiangmu_grey.png')}
                style={matchStyle.icon_edit}
              />
            </View>
            <View style={[matchStyle.matchinside, { borderBottomWidth: 0, marginTop: 0, paddingBottom: 0}]}>
              <Text style={[matchStyle.fz_30_999, matchStyle.text_l]}>
                项目数：34
              </Text>
              <Text style={[matchStyle.fz_30_999, matchStyle.text_l]}>
                创建者：张三
              </Text>           
            </View>
          </View>
        </View>
      </View>
    )
  }




}