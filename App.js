import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Provider } from 'mobx-react';
import Login from './app/page/Login';
import MyScreen from './app/page/Home';
import './app/storage/RNAsyncStorage';
// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: ''
    }
    this._readData = this._readData.bind(this);
  }

  componentDidMount() {
    this._readData();
  }

  _readData() {
    global.MySorage._load('token', (data) => {
      if(data.routId == "2"){
        this.setState({
          pageId: true,
        });
      }
      if (data.routId == "1"){
        this.setState({
          pageId: false,
        });
      }
      console.log(data.routId)
    })
  };

  render() {
    return (
      <View>
        {this.state.pageId == false ? (<Login />) : (<MyScreen />)}
      </View>
      // <View style={{ flex: 1, backgroundColor: '#dddddd', alignItems: 'center' }}>      
      //   <Text style={{ marginTop: 100, color: 'red' }}>
      //     普通存储: {this.state.data}
      //   </Text>

      //   <Text style={{ marginTop: 20, color: 'red' }}>
      //     同步刷新存储 {this.state.age}
      //   </Text>

      //   <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }}
      //     onPress={this._saveData}>
      //     <Text>存储数据</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aa00aa' }}
      //     onPress={this._readData}>
      //     <Text>读取数据</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aa00aa' }}
      //     onPress={this._delete}>
      //     <Text>删除数据</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aa00aa' }}
      //     onPress={this._xiugai}>
      //     <Text>修改数据</Text>
      //   </TouchableOpacity>
      // </View>

    );
  } 

  _saveData = () => {
    // storage.save({  
    //   key: 'loginState',
    //   data: {
    //     userid: '111 userid',
    //   },
    // })  
    var user = new Object();
    user.routId = '1';
    MySorage._sava('token', user);
  };



  _xiugai = () => {
    var user = new Object();
    user.routId = '2';
    MySorage._sava('token', user);
  }

  _delete = () => {
    MySorage._removeAll('token', function (data) {
    }); 
  }
}
