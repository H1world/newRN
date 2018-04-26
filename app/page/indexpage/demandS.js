import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TableHeader from '../../component/taberheader';
import Mask from '../../component/Mask';
import { homeStyle } from '../../layout/homeStyle';
import { apiBa } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer
export default class DemandSchool extends Component {

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={homeStyle.overViewStyle}>
          <View style={[homeStyle.leftRight36D, homeStyle.demandList]}>
            <View style={[homeStyle.demandInline]}>
              <Image 
                source={require('../../image/logo.png')}
                style={homeStyle.demandImg}
              />
              <View style={homeStyle.demandNameT}>
                  <Text style={[homeStyle.font_36_333, homeStyle.marginB_15]}>李大明</Text>
                  <Text style={[homeStyle.font_30_999]}>2018-09-99</Text>
              </View>
            </View>
            <View style={[homeStyle.demandInline]}>
              <Text style={homeStyle.demandInline_2F}>水立方啊啊啊</Text>
            </View>
            <View style={[homeStyle.demandInline]}>                                
              <View style={homeStyle.demandInline_3F_1}>
                <Text style={[homeStyle.border_yellow, homeStyle.marginR_15, homeStyle.demandInline_3_font]}>区域</Text>
                <Text style={[homeStyle.font_30_333]}>北京-北京</Text>
              </View>
              <View style={homeStyle.demandInline_3F}>
                <Text style={[homeStyle.border_yellow, homeStyle.marginR_15, homeStyle.demandInline_3_font]}>行业</Text>
                <Text style={[homeStyle.font_30_333]}>农业-林业</Text>
              </View>
            </View>
            <View style={[homeStyle.demandInline]}> 
              <View style={homeStyle.demandLine}></View>
            </View>
            <View style={[homeStyle.demandInline, homeStyle.demandBot]}>
              <View style={homeStyle.demandInline_3F_1}>
                <Text style={[homeStyle.font_30_999]}>浏览333次</Text>
              </View>
              <View style={homeStyle.demandInline_3F}>
                <Text style={[homeStyle.font_30_999]}>浏览333次</Text>
              </View>
            </View>
            <View style={[homeStyle.demandDem]}>
              <Text>×</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}