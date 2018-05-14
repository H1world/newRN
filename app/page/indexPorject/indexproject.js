import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../../component/header';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class projectAdmin extends Component {

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
          titleItem={() => '项目'}
          backFunc={() => this}
        />
        <View style={matchStyle.adminPage}>
          <View style={matchStyle.adminRow}>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccd0ff' }]} onPress={() => this.props.navigation.navigate('projectsummary')}>
              <Text style={matchStyle.adminfont}>项目汇总</Text>
              <Image
                source={require('../../image/icon_summary.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
            <View style={matchStyle.adminContent}>
            </View>
            <TouchableOpacity style={[matchStyle.adminBox, { backgroundColor: '#ccf8f1' }]} onPress={() => this.props.navigation.navigate('projectmap')}>
              <Text style={matchStyle.adminfont}>项目地图</Text>
              <Image
                source={require('../../image/icon_xiangmu_2.png')}
                style={matchStyle.adminIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}