import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import { Provider } from 'mobx-react';
import AppState from './mobx/AppState';
// import Login from './app/page/Login';
import './app/storage/RNAsyncStorage';
import { RootStack } from './app/navigationPage/router';
import { Login_page } from './app/navigationPage/router';
// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: ''
    }
    this._readData = this._readData.bind(this);
  }
  // componentDidMount
  componentWillMount() {
    this._readData();
  }

  _readData() {
    global.MySorage._load('userList', (data) => {
      if (data.beOverdue != undefined) {
        if (data.beOverdue == "2") {
          this.setState({
            pageId: true,
          });
        }
        if (data.beOverdue == "1") {
          this.setState({
            pageId: false,
          });
        }
      }else{
        this.setState({
          pageId: false,
        });
      }     
    })
  };

  render() {
    return (
      <Provider {...AppState}>
        {this.state.pageId == false ? (<Login_page />) : (<RootStack />)}
        {/* {this.state.pageId == false ? (<RootStack />) : (< Login_page/>)} */}
      </Provider>
    );
  }
}
