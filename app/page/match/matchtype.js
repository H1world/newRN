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
import { DatePicker, List, Toast } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      gameList:'',
    }
  };

  componentDidMount() {
    this.getSysProjectGameList();
  }

  async getSysProjectGameList() {
    let url = this.props.homeStore.api + 'pc/system/getSysProjectGameList';
    let data = {
      orgid: this.state.beforData.orgid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);

    if (res.result == "success") {
      this.setState({
        gameList:res.data,
      });
    } else {
      Alert.alert(res.describe);
    };
  };

  render() {
    let matchTList = '';
    if (this.state.gameList != ''){
      let matchList = this.state.gameList.map((item,index) => {
        return(
          <List.Item arrow="horizontal" onClick={() => this.props.navigation.navigate('matchstage', { gameid: item.gameid, gamename: item.gamename})} key={index}>
            <Text style={[matchStyle.edit_font]}>
              {item.gamename}
            </Text>
          </List.Item>
        )
      })
      matchTList = matchList;
    }
    
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => '赛事类别'}
          backFunc={() => this}
        />
        <ScrollView>
          <List style={matchStyle.mb_30}>
            {matchTList}
          </List>
        </ScrollView>
      </View>
    )
  }

}