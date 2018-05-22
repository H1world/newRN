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
import { NavigationActions } from 'react-navigation';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      stageList: '',
    }
  };

  componentDidMount() {
    this.getSysProjectGameList();
  }

  async getSysProjectGameList() {
    const { params } = this.props.navigation.state;
    let url = this.props.homeStore.api + 'system/getProjectGameStage';
    let data = {
      gameid: params.gameid
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);

    if (res.result == "success") {
      this.setState({
        stageList: res.data,
      });
    } else {
      Alert.alert(res.describe);
    };
  };

  goAddPage(item){
    const { params } = this.props.navigation.state;
    this.props.homeStore.setMatchType(params.gamename + '-' + item.stagename);
    this.props.homeStore.setGameid(params.gameid);
    this.props.homeStore.setStageid(item.stageid);
    const resetIndex = NavigationActions.reset({  //重设路由
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),        
        NavigationActions.navigate({ routeName: 'match' }),
        NavigationActions.navigate({ routeName: 'addpage' }),
      ]
    });
    this.props.navigation.dispatch(resetIndex);
  }

  render() {
    let matchTList = '';
    if (this.state.stageList != '') {
      let matchList = this.state.stageList.map((item, index) => {
        return (
          <List.Item arrow="horizontal" onClick={() => this.goAddPage(item)} key={index}>
              <Text style={[matchStyle.edit_font]}>
                {item.stagename}
              </Text>
          </List.Item>
        )
      })
      matchTList = matchList;
    }

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => '赛事阶段'}
          backFunc={() => this}
        />
        <ScrollView>
          <List>
            {matchTList}
          </List>
        </ScrollView>
      </View>
    )
  }

}