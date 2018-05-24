import React, { Component } from 'react';
import {
  Platform,
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
  ScrollView,
  Dimensions,
  NativeModules,
  Alert
} from 'react-native';
import { Tabs, WhiteSpace, Toast} from 'antd-mobile';
import Header from '../../../component/header';
import Mask from '../../../component/Mask';
import ReceSelect from '../../../component/raceselect';
import { matchStyle } from '../../../layout/matchStyle';
import { apiBa } from '../../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class SetUpIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      upIndexList:[],
      tableList:[],
      tabSelect:'',
      classTypeList:[],
      refreshing: false,      
      RefreshType:false,
    }
  };
  componentDidMount() {
    this.getProjectNumByProjectGameId();
  }

  componentWillMount() {
    console.log(this.state.RefreshType)
  }

  render() {
    if (this.state.RefreshType == true){
      this.getProjectNumByProjectGameId();
    };
    let setupList = [];
    if (this.state.upIndexList != []){
      let listLength = this.state.upIndexList.length;
      let result = [];
      for (let i = 0; i < listLength; i += 3) {
        result.push(this.state.upIndexList.slice(i, i + 3));
      }
      setupList = result.map((item, index) => {
        let setupLi = item.map((item, index) => {
          return (
            <View style={matchStyle.setupboxLi} key={index}>
              <Text style={[matchStyle.fz_60_333, matchStyle.mb_20]}>
                {item.projectnum == null ? null : item.projectnum}
              </Text>
              <Text style={matchStyle.fz_36_333} numberOfLines={1}>
                {item.name == null ? null : item.name}
              </Text>
            </View>
          )
        })
        return (
            <View style={matchStyle.setupboxTr} key={index}>
              {setupLi}
            </View>
        )
      })
    }
    //tab滚动列表
    let tabList = [];
    if (this.state.tableList != []) {
      tabList = this.state.tableList.map((item, index) => {
        return (
          <TouchableOpacity onPress={(e) => this.clickTab(e,item)} key={index}>
            <Text style={this.state.tabSelect == item ? matchStyle.tableSelectText : matchStyle.tableText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      })
    }

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '评审设置'}
          backFunc={() => this}
          headRight={() => true}
          headRightText={() => '添加评委'}
          sureGo={() => this.goAddJudges()}
        />

        <View style={matchStyle.setupTop}>
          <Text style={matchStyle.fz_48_333}>
            项目数量
          </Text>
          <View style={matchStyle.setuptopBox}>
            {setupList}
          </View>
        </View>
        <View style={matchStyle.line_30_f0}></View>

        <View>
          <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          style={matchStyle.tablehorizontal}
          ref='scrollView'
          // onTouchEnd={(e) => this._toucheEnd(e)}
            // onTouchEnd={this._toucheEnd}
          >
            <View style={{ flexDirection: 'row', }} onLayout={this._onLayout}>
              {tabList}
            </View>
          </ScrollView>

          <TouchableOpacity style={matchStyle.addClass} onPress={()=>this.goAddPage()}>
            <Image
              source={require('../../../image/icon_tianjia.png')}
              style={matchStyle.icon_addclass}
            />
            <Text style={matchStyle.fz_42_333}>
              添加分组
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.classTypeList}
          renderItem={this.renderMovie}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
          keyExtractor={this._extraUniqueKey}
        />

        </View>
        )
  }

  async getProjectNumByProjectGameId() {
    this.setState({
      RefreshType: false,
    })
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getProjectNumByProjectGameId';
    let data = {
      projectgameid: params.match_id
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        upIndexList: res.data
      })
      if (this.state.upIndexList.length != 3){
        let arr = [...Array((3 - this.state.upIndexList.length % 3))].map((undefined) => this.state.upIndexList.push({ classid: null, name: null, projectnum: null }))
      }
      this.getAllProjectClassList();
    } else {
      Alert.alert(res.describe);
    };
  };

  async getAllProjectClassList() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getAllProjectClassList';
    let data = {
      projectgameid: params.match_id
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      this.setState({
        tableList: res.data
      })
      let classid = '';      
      if (res.data != ''){
        this.setState({
          tabSelect: res.data[0]
        })
        classid = res.data[0].classid
      }
      this.getClassTypeList(classid);
    } else {
      Alert.alert(res.describe);
    };
  };

  //获取某项目分类下的列表(默认第一个)
  async getClassTypeList(classid) {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'mobile/system/getProjectGameGroupUserListByProjectGameId';
    let data = {
      projectgameid: params.match_id,
      classid: classid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      if (res.data != '') {
        for (let i in res.data) {
          res.data[i]['selecttype'] = false;
        }
      }
      this.setState({
        classTypeList: res.data
      })
    } else {
      Alert.alert(res.describe);
    };
  };
  
  showTable(index) {
    let date_t = this.state.classTypeList.map((item, index_t) => {
      if (index_t == index) {
        this.state.classTypeList[index_t].selecttype = !this.state.classTypeList[index_t].selecttype
      }
      return (item)
    })
    this.setState({
      classTypeList: date_t
    })
  }

  clickTab(e,item){
    // NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
    //   // pageY是组件在当前屏幕上的绝对位置
    //   if (pageX > Dimensions.get('window').width / 2) {
    //     this.refs.scrollView.scrollTo({ x: width / 2 - pageX, y: 0, animated: true }, 1)
    //   }
    // });
    
    this.setState({
      tabSelect:item
    });
    this.getClassTypeList(item.classid);
  }

  renderMovie = (info) => {
    let length = info.item.teacherlist.length;
    let classtype_l = info.item.teacherlist.map((item, index) => {
      return (
        <View style={matchStyle.smallList} key={index}>
          <Image
            source={{ uri: item.userimage }}
            style={[matchStyle.classImg]}
          />
          <View style={index == length - 1 ? [matchStyle.classContent, { borderBottomWidth: 0 }] : matchStyle.classContent}>
            <Text style={[matchStyle.fz_48_333]} numberOfLines={1}>
              {item.username}
            </Text>
            <Text style={[matchStyle.fz_36_333]}>
              {item.phone}
            </Text>
            <Text style={[matchStyle.fz_33_999, matchStyle.mt_36]}>
              {item.orgname}
            </Text>
            <TouchableOpacity style={[matchStyle.classDele]} onPress={() => this.deleteRater(info.item,item)}>
              <Image
                source={require('../../../image/WechatIMG3.png')}
                style={[matchStyle.classDele]}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    })
    return(
    <View style={matchStyle.RP_list} key={info.index}>
      <View style={[matchStyle.width_36]}>
        <TouchableOpacity style={[matchStyle.RP_listBox]} onPress={() => this.showTable(info.index)}>
          <View style={matchStyle.RP_lb_ine}>
            <Image
              source={require('../../../image/WechatIMG2.png')}
              style={[matchStyle.RP_icon, matchStyle.mr_27]}
            />
            <Text style={matchStyle.fz_42_333}> {info.item.groupname} </Text>
          </View>
          <View style={[matchStyle.RP_lb_ine, matchStyle.fl_R]}>
            <Image
              source={require('../../../image/icon_return3x.png')}
              style={[matchStyle.RP_icon_2, info.item.selecttype == false ? matchStyle.transformR_180 : null]}
            />
          </View>
        </TouchableOpacity>
        {info.item.selecttype == false ? null :
          <View>
            {classtype_l}
          </View>
        }
      </View>
    </View>
    )
  }

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    const timer = setTimeout(() => {
      this.getClassTypeList(this.state.tabSelect.classid);
      this.setState({
        refreshing: false,
      });
    }, 1500);
  };

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }

  _onLayout = (e) => {
    // console.log(e.nativeEvent.contentOffset.x);
    NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
      // this.currentPosY = pageY;
      // console.log(x);
      // console.log(width);
      // // pageY是组件在当前屏幕上的绝对位置
      // console.log(x, y);
      // console.log(pageX, pageY);
    });
  }

  _toucheEnd (e) {
    console.log(e.nativeEvent);
  }

  goAddJudges(){
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('addreview',
      {
        projectgameid: params.match_id,
        _this:this,
      })
  }

  goAddPage(){
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('addclasspage', 
    { 
      projectgameid: params.match_id, 
      classid: this.state.tabSelect.classid,
      classname: this.state.tabSelect.name,
      thisdata: this      
    })
  }

  //删除评委
  deleteRater(itemed,item){
    Alert.alert(
      '确定要删除该评审？',
      '',
      [
        { text: '取消', style: 'cancel' },
        { text: '确定', onPress: () => this.thePsisOver(itemed.groupid, item.raterid) },
      ],
      { cancelable: false }
    )
  }
  async thePsisOver(groupid, raterid){
    let url = this.props.homeStore.api + 'mobile/system/deleteProjectGameRaterAllot';
    let data = {
      groupid: groupid,
      raterid: raterid,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
      for (let i in this.state.classTypeList) {
        if (this.state.classTypeList[i].groupid == groupid) {
          for (let j in this.state.classTypeList[i].teacherlist) {
            if (this.state.classTypeList[i].teacherlist[j].raterid == raterid) {
              this.state.classTypeList[i].teacherlist.splice(0, j + 1);
            }
          }
        }
      }
      list = [];
      list = list.concat(this.state.classTypeList);
      this.setState({
        classTypeList: list,
      })
      Toast.success('删除成功', 100);
      setTimeout(() => {
        Toast.hide();
      }, 2000);
    }
  }
}