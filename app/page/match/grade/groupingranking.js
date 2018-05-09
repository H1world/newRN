import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';
import Header from '../../../component/header';
import { matchStyle } from '../../../layout/matchStyle';
import Mask from '../../../component/Mask';
import ReceSelect from '../../../component/raceselect';
import { apiBa } from '../../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class gradeRankings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      data: '',
      loading: '',
      showFoot: 0,
      pageNum: 1,
      totalPage: '',
      refreshing: false,
      leftData:'',
      rightData:'',
      leftNum: '',
      rightNum: '',    
      leftName:'',
      rightName:'',
    }
  };

  componentDidMount() {
    this.getClassList();
    // this.getProjectSort(1);
  };

  async getClassList() {
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getAllProjectClassList';
    let data = {
      projectgameid: getprojectgameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        leftData: res.data,
        leftNum: res.data[0].classid,
        leftName: res.data[0].name,  
      });
      this.getGroupList(this.state.leftNum)
    }
  }

  async getGroupList(classid) {
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getProjectClassProjectGroupList';
    let data = {
      projectgameid: getprojectgameid,
      classid: classid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        rightData: res.data,
        rightNum: res.data[0].groupid, 
        rightName: res.data[0].groupname,  
      });
      this.getProjectSort(this.state.leftNum, this.state.rightNum, 1)
    }
  }

  async getProjectSort(classid, groupid, page) {
    this.setState({
      loading: false
    })
    if (page == 1 ){
      this._flatList.scrollToOffset({ animated: true, offset: 0 });
    }
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameProjectSort';
    let data = {
      projectgameid: getprojectgameid,
      classid: classid,
      groupid: groupid,
      page: page
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
        this.state.data.push(...res.data.projectlist);
        this.setState({
          loading: true,
          pageNum: page,
        });
      }
    }
  };

  render() {
    if (this.state.leftData != undefined && this.state.leftData != '') {
      var leftL = this.state.leftData;
    }
    if (this.state.rightData != undefined && this.state.rightData != '') {
      var rightL = this.state.rightData;
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}
        <Header
          titleItem={() => '成绩排名'}
          backFunc={() => this}
        />
        <ReceSelect
          select_1={() => this.state.leftName}
          select_2={() => this.state.rightName}
          selectTitle={() => '成绩排名'}
          _this={() => this}
          leftList={() => leftL}
          rightList={() => rightL}
          listFunction={(classid, groupid, page) => this.getProjectSort(classid, groupid, page)}
        />
        {/* <Button title='滚动到指定位置' onPress={() => {
          //this._flatList.scrollToEnd();
          // this._flatList.scrollToIndex({viewPosition:0,index:8});
          this._flatList.scrollToOffset({ animated: true, offset: 0 });
        }} /> */}
        <View style={[matchStyle.matchSubject, matchStyle.mb_304, { borderBottomWidth: 0 }]}>
          <FlatList
            ref={(flatList) => this._flatList = flatList}
            data={this.state.data}
            renderItem={this.renderMovie}
            onRefresh={this.onRefresh}
            style={matchStyle.rankList}
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

  renderMovie = ({ item, index }) => (
    <View style={[matchStyle.matchinside, matchStyle.mt_42, matchStyle.pb_0]}>
      <View style={matchStyle.matchinsidein}>
        <View style={matchStyle.rank}>
          {index == '0' ?
            <ImageBackground style={[matchStyle.rankBox]} source={require('../../../image/numone.png')} resizeMode='cover'>
              <Text style={[matchStyle.rankFont]}>
                {index + 1}
              </Text>
            </ImageBackground>
            : null
          }
          {index == '1' ?
            <ImageBackground style={[matchStyle.rankBox]} source={require('../../../image/numtwo.png')} resizeMode='cover'>
              <Text style={[matchStyle.rankFont]}>
                {index + 1}
              </Text>
            </ImageBackground>
            : null
          }
          {index == '2' ?
            <ImageBackground style={[matchStyle.rankBox]} source={require('../../../image/numthree.png')} resizeMode='cover'>
              <Text style={[matchStyle.rankFont]}>
                {index + 1}
              </Text>
            </ImageBackground>
            : null
          }
          {index > '2' ?
            <ImageBackground style={[matchStyle.rankBox]} source={require('../../../image/numfour.png')} resizeMode='cover'>
              <Text style={[matchStyle.rankFont]}>
                {index + 1}
              </Text>
            </ImageBackground>
            : null
          }

        </View>
        <Image
          source={{ uri: item.projectlogo }}
          style={matchStyle.matchLogo}
        />
        <View style={matchStyle.matchTextBox_2}>
          <View style={[matchStyle.matchNull, matchStyle.width_500]}>
            <Text style={matchStyle.font_1} numberOfLines={1}>
              {item.projectname}
            </Text>
          </View>
          <View style={[matchStyle.matchNull, matchStyle.width_500]}>
            <Text style={matchStyle.fz_36_666} numberOfLines={1}>
              创始人:{item.username}
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
            <Text style={[matchStyle.mr_36, matchStyle.fz_30_999]}>
              {item.collegename}
            </Text>
          </View>
        </View>
      </View>
      <View style={[matchStyle.scorNum]}>
        <Text style={[matchStyle.rankscoring]}>90</Text>
        <Text style={[matchStyle.rankfen]}>分</Text>
      </View>
    </View>
  );

  onRefresh = () => {
    this.setState({
      refreshing: true,
      pageNum: 1,
    });
    const timer = setTimeout(() => {
      this.getProjectSort(this.state.leftNum, this.state.rightNum,1)
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
    this.getProjectSort(this.state.leftNum, this.state.rightNum, this.state.pageNum)
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
        <View style={matchStyle.footer}>
          <Text style={matchStyle.footerfont}>
            没有更多数据了
          </Text>
        </View>
      );
    };
    if (this.state.showFoot == 2) {
      return (
        <View style={matchStyle.footer}>
          <Text style={matchStyle.footerfont}>下拉加载更多数据...</Text>
        </View>
      );
    };
  };

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
}