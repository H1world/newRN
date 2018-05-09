import React, { Component } from 'react';
import {
  Text,
  View,
  Switch
} from 'react-native';
import { Toast } from 'antd-mobile';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa, copy } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class supList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date: '',
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
        <Select
          backFunc={() => this}
        // selectGo={() => }
        />
      </View>
    )
  }
}