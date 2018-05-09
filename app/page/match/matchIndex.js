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
      data:'',
      yearData: 0,
      rightData: 0,
      refreshing: false,
      loading:false,
      showFoot: 0,
      pageNum: 1,
      totalPage: '',
    }
  };
  componentDidMount() {
    this.getSearch();
  }

  async getSearch() {
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameSearchCondition';
    let data = {};
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        search: res.data,
      });
      this.getList(this.state.yearData, this.state.rightData,1)
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
        totalPage: res.data.totalpage
      });
      if ((page >= this.state.totalPage)) {
        this.setState({
          showFoot: 1,
        });
      } else {
        this.setState({
          showFoot: 2,
        });
      };
      if (res.data.page == 1) {
        let matchDate = res.data.projectgamelist;
        this.props.homeStore.setmatchIndexDate(matchDate);
        this.setState({
          data: this.props.homeStore.matchIndexDate,
          loading: true,
          pageNum: 1,
        });
      } else {
        this.props.homeStore.matchIndexDate.push(...res.data.projectgamelist);
        this.setState({
          loading: true,
          pageNum: page,
        });
      }
    } else {
      Alert.alert(res.describe);
    };
  };

  render() {
    this.state.data = this.props.homeStore.matchIndexDate.slice();
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}
        <Header
          titleItem={() => '赛事'}
          backFunc={() => this}
        />
        <ReceSelect
          select_1={() => '年份'}
          select_2={() => '状态'}
          _this={() => this}
          leftList={() => this.state.search.yearlist}
          rightList={() => this.state.search.statelist}
          listFunction={(year, state, page) => this.getList(year, state, page)}
        />
          <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={matchStyle.list}
            onRefresh={this.onRefresh}
            onEndReachedThreshold={0.1}
            onEndReached={this._onEndReached}
            ListFooterComponent={this._renderFooter}
            refreshing={this.state.refreshing}
            keyExtractor={this._extraUniqueKey}
          />
      </View>
    )
  };

  goAdmin(item){
    this.props.navigation.navigate('matchadmin', { match_name: item.projectgamename });
    let projectgameid = item.projectgameid; 
    this.props.homeStore.setProjectgameid(projectgameid);
  };

  renderMovie = ({ item, index }) => (
    <View style={matchStyle.matchSubject}>
      <View style={matchStyle.matchinside}>
        {/* this.props.navigation.navigate('matchadmin', {match_name: item.projectgamename}) */}
        <TouchableOpacity style={matchStyle.matchinsidein} 
        onPress={() => this.goAdmin(item)}>
          <Image
            source={{uri: item.projectgamelogo}}
            style={matchStyle.matchLogo}
          />
          <View style={matchStyle.matchTextBox}>
            <View style={matchStyle.matchNull}>
              <Text style={matchStyle.font_1} numberOfLines={1}>
                {item.projectgamename}
              </Text>
              <View style={matchStyle.icon_B}>
                {item.status == 1 ?
                  <Image
                    source={require('../../image/icon_end.png')}
                    style={matchStyle.icon}
                  /> :
                  <Image
                    source={require('../../image/icon_ongoing.png')}
                    style={matchStyle.icon}
                  />
                }
              </View>
            </View>
            <View style={matchStyle.matchNull}>
              <Text style={matchStyle.fz_36_666}>
                组织：{item.orgname}
                    </Text>
            </View>
            <View style={[matchStyle.matchNull, matchStyle.mg_42]}>
              <Text style={[matchStyle.mr_100, matchStyle.fz_36_666]}>
                项目数：{item.projectnum}
                    </Text>
              <Text style={[matchStyle.fz_36_666]}>
                创建者：{item.creater}
                    </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={matchStyle.icon_editBox} onPress={() => this.props.navigation.navigate('matchedit', { match_id: item.projectgameid })}>
          <Image
            source={require('../../image/icon_xiangmu_grey.png')}
            style={matchStyle.icon_edit}
          />
        </TouchableOpacity>
      </View>
      <View style={[matchStyle.matchinside, { borderBottomWidth: 0, marginTop: 0, paddingBottom: 0 }]}>
        <Text style={[matchStyle.fz_30_999, matchStyle.text_l]}>
          报名日期：{item.starttime} 至 {item.signendtime}
              </Text>
        <Text style={[matchStyle.fz_30_999, matchStyle.text_l]}>
          报名方式：{item.gameflagname}
              </Text>
      </View>
    </View>
  );

  onRefresh = () => {
    // console.log(this.state.yearData, this.state.stateData)
    this.setState({
      refreshing: true,
      pageNum: 1,
    });
    const timer = setTimeout(() => {
      this.getList(this.state.yearData, this.state.rightData, 1)
      this.setState({
        refreshing: false,
      });
    }, 1500);
  };

  _onEndReached = () => {
    if ((this.state.pageNum >= this.state.totalPage)) {
      return;
    } else {
      this.state.pageNum++
    }
    this.setState({ showFoot: 2 });
    this.getList(this.state.yearData, this.state.rightData, this.state.pageNum)
  };

  _renderFooter = () => {
    if (this.state.showFoot == 0) {
      return (
        <View style={matchStyle.footer}>
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
        <View style={matchStyle.footer}>
          <Text>下拉加载更多数据...</Text>
        </View>
      );
    };
  };

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }  
}