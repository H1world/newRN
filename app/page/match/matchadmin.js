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
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
    }
  };

  componentDidMount() {
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => params.match_name}
          backFunc={() => this}
        />
        <View style={matchStyle.adminPage}>
          <View style={matchStyle.adminRow}>
            <View style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]}>
              <Text style={matchStyle.adminfont}>评审规则</Text>
              <Image
                source={require('../../image/icon_guize.png')}
                style={matchStyle.adminIcon}
              />
            </View>
            <View style={matchStyle.adminContent}>
            </View>
            <View style={[matchStyle.adminBox, { backgroundColor: '#ccf8f1' }]}>
              <Text style={matchStyle.adminfont}>报名项目</Text>
              <Image
                source={require('../../image/icon_xiangmu3x.png')}
                style={matchStyle.adminIcon}
              />
            </View>
          </View>
          <View style={matchStyle.adminRow}>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccf8f1' }]} onPress={() => this.props.navigation.navigate('reviewprogress')}>
              <Text style={matchStyle.adminfont}>评审进度</Text>
              <Image
                source={require('../../image/icon_jindu3x.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
            <View style={matchStyle.adminContent}>
            </View>
            <View style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]}>
              <Text style={matchStyle.adminfont}>成绩排名</Text>
              <Image
                source={require('../../image/icon_paiming3x.png')}
                style={matchStyle.adminIcon}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}