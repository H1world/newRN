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
import './app/storage/RNAsyncStorage';
import { RootStack } from './app/navigationPage/router';
// type Props = {};
export default class App extends Component {
  render() {
    return (
      <Provider {...AppState}>
        <RootStack />
        {/* {this.state.pageId == false ? (<Login_page />) : (<RootStack />)} */}
      </Provider>
    );
  }
}
