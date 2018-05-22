import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { Toast } from 'antd-mobile';
import Header from '../../component/header';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import Mask from '../../component/Mask';
import { apiBa, copy } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class SignUpProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      search:'',
      yearData:0,
      rightData:0,
      data:'',
      totalPage:'',
      showFoot:'',
      loading:'',
      pageNum:'',
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getYear();
  }

  async getYear() {
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameYearList';
    let data = {
      orgid: this.state.beforData.orgid,
      projectgameid: getprojectgameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        search: res.data,
      });
      this.getList(this.state.yearData, this.state.rightData, 1);
    }
  };

  async getList(year,classid,page) {
    this.setState({
      loading:false,
    })
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getSignUpCompetitionProjectList';
    let data = {
      projectgameid: getprojectgameid,
      year: year,
      page: page,
      classid: classid,
      projectname:'',
    };
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
        this.setState({
          data: res.data.projectlist,
          loading: true,
          pageNum: 1,
        });
      } else {
        if (Platform.OS === 'ios') {
          this.state.data.push(...res.data.projectlist);
        } else {
          list = [];
          list = list.concat(this.state.data);
          list.push(...res.data.projectlist)
          this.state.data = list;  
        }
        this.setState({
          loading: true,
          pageNum: page,
        });
      }
    }
  }

  render(){
    if (this.state.yearlist != ''){
      var yearL = this.state.yearlist;
    }
    if (this.state.classlist != '') {
      var classL = this.state.classlist;
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}
        <Header
          selectStyle={() => true}
          backFunc={() => this}
        />
        
        <ReceSelect
          select_1={() => '年份'}
          select_2={() => '分类'}
          _this={() => this}
          leftList={() => this.state.search.yearlist}
          rightList={() => this.state.search.projectclasslist}
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
  }

  renderMovie = ({ item, index }) => (
    <View style={[matchStyle.matchSubject, matchStyle.mb_10,{ borderBottomWidth: 0,}]}>
      <View style={[matchStyle.matchinside_2]}>
        <View style={matchStyle.matchinsidein}>
          <Image
            source={{ uri: item.projectlogo }}
            style={matchStyle.matchLogo}
          />
          <View style={matchStyle.matchTextBox_2}>
            <View style={matchStyle.matchNull}>
              <Text style={matchStyle.font_1} numberOfLines={1}>
                {item.projectname}
              </Text>
            </View>
            <View style={matchStyle.matchNull}>
              <Text style={matchStyle.fz_36_666} numberOfLines={1}>
                {item.projectintro}
              </Text>
            </View>
            <View style={[matchStyle.matchNull, matchStyle.mg_42]}>
              <View style={[matchStyle.mr_36, matchStyle.signUpP]}>
                <Text style={[matchStyle.yellBox]}>分类</Text>
                <Text style={[matchStyle.fz_30_999, matchStyle.whiteBox]}> {item.classname} </Text>
              </View>
              <View style={[matchStyle.mr_36, matchStyle.signUpP]}>
                <Text style={[matchStyle.yellBox]}>行业</Text>
                <Text style={[matchStyle.fz_30_999, matchStyle.whiteBox]}> {item.tradeinfo} </Text>
              </View>
            </View>
            <View style={[matchStyle.matchNull]}>
              <Text style={[matchStyle.mr_36, matchStyle.fz_30_999]}>
                {item.orgname}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  onRefresh = () => {
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