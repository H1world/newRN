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
import { Accordion, List } from 'antd-mobile';
import Header from '../../component/header';
import Mask from '../../component/Mask';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class reviewProgress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
    }
  };

  componentDidMount() {

  }

  onChange = (key) => {
    console.log(key);
  };

  render() {
    
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header
          titleItem={() => '评审进度'}
          backFunc={() => this}
        />
        
        {/* <Accordion onChange={this.onChange}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion> */}
        <View style={matchStyle.width_line}></View>
        <View style={matchStyle.width_box}>
          <View style={matchStyle.RP_list}>
            <View style={matchStyle.RP_listBox}>
              <View style={matchStyle.RP_lb_ine}>
                <Image
                  
                  style={matchStyle.RP_icon}
                />
                <Text style={matchStyle.fz_42_333}>创意类</Text>
              </View>
              <View style={matchStyle.RP_lb_ine}>
                <Image

                  style={matchStyle.RP_icon}
                />
                <Text style={matchStyle.fz_42_333}>创意类</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}