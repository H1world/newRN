import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import PropTypes from 'prop-types';
import homeStyle from '../layout/homeStyle'
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');
const maskStyle = StyleSheet.create({
  mask:{
    width: width,
    height: height,
    backgroundColor: 'rgba(255, 255, 255, .6)',
    position: 'absolute',
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:10,
  }
})

export default class Mask extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const
      spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    return (
      <View style={maskStyle.mask}>
        <Animated.Image
          style={{
            width: 50,
            height: 50,
            transform: [{ rotate: spin }]
          }}
          source={require('../image/loading.png')}
        />
    </View>
    );
  }
}