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

export default class Sapien extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#dddddd', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginTop: 20, width: 60, height: 40, backgroundColor: '#aaaa00' }}>
          <Text>投智人page</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
