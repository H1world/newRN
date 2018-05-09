import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image
} from 'react-native';
import { Toast } from 'antd-mobile';
import Select from '../../component/select';
import ReceSelect from '../../component/raceselect';
import Mask from '../../component/Mask';
import { matchStyle } from '../../layout/matchStyle';
import { apiBa, copy } from '../../../api/api';
import { inject, observer } from "mobx-react";
@inject('homeStore')
@observer

export default class selectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforData: this.props.homeStore.basicData,
      data: '',
      loading:true,
      nodata:false,
    };
  }

  componentDidMount() {
    // if (event.keyCode == 13) {
    //   Toast.fail('点回车了？', 30);
    //   setTimeout(() => {
    //     Toast.hide();
    //   }, 500);
    // }
  }

  async selectPlay(projectname){
    this.setState({
      loading: false,
    })
    let getprojectgameid = this.props.homeStore.projectgameid;
    let url = this.props.homeStore.api + 'mobile/system/getSignUpCompetitionProjectList';
    let data = {
      projectgameid: getprojectgameid,
      year: 0,
      page: 0,
      classid: 0,
      projectname: projectname,
    };
    const res = await apiBa(url, data, "POST", this.state.beforData.token, this.props);
    if (res.result == "success") {
        this.setState({
          data: res.data.projectlist,
          loading: true,
        });
        if (res.data.projectlist.length == 0){
          this.setState({
            nodata:true,
          });
        }
    }
  }

  render() {
    let selectList = [];
    if (this.state.data != ''){
      selectList = this.state.data.map((item,index)=>{
        return(
        <View style={[matchStyle.matchSubject, matchStyle.mb_10, { borderBottomWidth: 0, }]} key={index}>
              <View style={[matchStyle.matchinside_2]}>
                <View style={matchStyle.matchinsidein}>
                  <Image
                    source={{ uri: item.projectlogo }}
                    style={matchStyle.matchLogo}
                  />
                  <View style={matchStyle.matchTextBox_2}>
                    <View style={matchStyle.matchNull}>
                      <Text style={matchStyle.font_1} numberOfLines={1}>
                        {item.projectname}
                      </Text>
                    </View>
                    <View style={matchStyle.matchNull}>
                      <Text style={matchStyle.fz_36_666} numberOfLines={1}>
                        {item.projectintro}
                      </Text>
                    </View>
                    <View style={[matchStyle.matchNull, matchStyle.mg_42]}>
                      <View style={[matchStyle.mr_36, matchStyle.signUpP]}>
                        <Text style={[matchStyle.yellBox]}>分类</Text>
                        <Text style={[matchStyle.fz_30_999, matchStyle.whiteBox]}> {item.classname} </Text>
                      </View>
                      <View style={[matchStyle.mr_36, matchStyle.signUpP]}>
                        <Text style={[matchStyle.yellBox]}>行业</Text>
                        <Text style={[matchStyle.fz_30_999, matchStyle.whiteBox]}> {item.tradeinfo} </Text>
                      </View>
                    </View>
                    <View style={[matchStyle.matchNull]}>
                      <Text style={[matchStyle.mr_36, matchStyle.fz_30_999]}>
                        {item.orgname}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
        </View>
      )
      })
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {this.state.loading == false ? <Mask /> : null}
          <Select
            backFunc={() => this}
            selectGo={(projectname) => this.selectPlay(projectname)}
          />
        {this.state.nodata == true ? 
          <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
              暂无数据
          </Text>
          </View>
          : <ScrollView>
            {selectList}
          </ScrollView>}
        
      </View>
    )
  }
}