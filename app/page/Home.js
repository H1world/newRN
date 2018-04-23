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
  StatusBar
} from 'react-native';
// //导入stack导航组件
import { StackNavigator, TabNavigator} from 'react-navigation';
import { SearchBar, Button, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this._readData = this._readData.bind(this);
  }


  // componentDidMount
  componentWillMount() {
    this._readData();
    this.demo();
  }

  _readData() {
    global.MySorage._load('userList', (data) => {
      this.setState({
        data: data,
      });
    })
  };
  
  demo(){
    let t = setTimeout(()=>{
      console.log(this.state.data)
    },100)
  }

  // static navigationOptions = ({ navigation }) => ({
    // title: `Chat with ${this.state.data.data.orgname}`,
  // }); 

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#dddddd', alignItems: 'center' }}>      
         <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }}>
          <Text>首页</Text>
          <Text>{this.state.data.username}</Text>
          {/* <Text>{params.title}</Text>  */}
        </TouchableOpacity>
      </View>
    )
    
  }

}