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
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]} onPress={() => this.props.navigation.navigate('scoringrules')}>
              <Text style={matchStyle.adminfont}>评审规则</Text>
              <Image
                source={require('../../image/icon_guize.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
            <View style={matchStyle.adminContent}>
            </View>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccf8f1' }]} onPress={() => this.props.navigation.navigate('signupproject')}>
              <Text style={matchStyle.adminfont}>报名项目</Text>
              <Image
                source={require('../../image/icon_xiangmu3x.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
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
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]} onPress={() => this.props.navigation.navigate('grade')}>
              <Text style={matchStyle.adminfont}>成绩排名</Text>
              <Image
                source={require('../../image/icon_paiming3x.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={matchStyle.adminRow}>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]} onPress={() => this.props.navigation.navigate('setupindex', { match_id: params.match_id})}>
              <Text style={matchStyle.adminfont}>评委设置</Text>
              <Image
                source={require('../../image/icon_Judgesset.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
            <View style={matchStyle.adminContent}>
            </View>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccf8f1' }]} onPress={() => this.props.navigation.navigate('signupproject')}>
              <Text style={matchStyle.adminfont}>项目分配</Text>
              <Image
                source={require('../../image/icon_projectassignments.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}