import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TableHeader from '../../component/taberheader';
import Mask from '../../component/Mask';
import { homeStyle } from '../../layout/homeStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class DemandRJ extends Component {

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>推荐需求+3</Text>
      </View>
    )
  }
}