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
import { DatePicker, List } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import ReceSelect from '../../component/raceselect';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class matchEdit extends Component {
  
  constructor(props) {
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      date: now,
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <Header
          titleItem={() => '修改赛事信息'}
          backFunc={() => this}
          headRight={() => true}
        />
        <View style={{ backgroundColor: '#f2f2f2'}}> 
          <View style={[matchStyle.match_name, matchStyle.plr_36]}>
            <View style={[matchStyle.editf_box]}>
              <Text style={[matchStyle.edit_font]}>
                赛事名称
              </Text>
            </View>
            <TextInput style={matchStyle.inputText}
              defaultValue={this.state.maechName}
              underlineColorAndroid='transparent'
              placeholder='请填写'
              placeholderTextColor='#999'
            />
          </View>
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="开始时间"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal">
                <Text style={[matchStyle.edit_font]}>
                  开始时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="结束时间"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal">
                <Text style={[matchStyle.edit_font]}>
                  结束时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>
          <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
              title="报名开始时间"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal">
              <Text style={[matchStyle.edit_font]}>
                报名开始时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>
          <List>
            <DatePicker
              title="报名结束时间"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal" style={{ borderTopWidth: 0}}>
                <Text style={[matchStyle.edit_font]}>
                  报名结束时间
              </Text>
              </List.Item>
            </DatePicker>
          </List>
        </View>

      </View>

    )
  }
}