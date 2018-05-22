import React, { Component } from 'react';
import { Platform, WebView, View, StyleSheet } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  render() {
    return (
      <View style={{flex: 1, height: this.props.height || 400,}}>
        <WebView
          ref="chart"
          scrollEnabled = {false}
          injectedJavaScript = {renderChart(this.props)}
          style={{
            height: this.props.height || 400,
            backgroundColor: this.props.backgroundColor || 'transparent'
          }}
          // scalesPageToFit={false}
          scalesPageToFit={ Platform.OS === 'ios' ? false : true }          
          // source={require('./tpl.html')}
          source={Platform.OS === 'ios' ? require('./tpl.html') : { uri: 'file:///android_asset/tpl.html'}}
          onMessage={event => this.props.onPress ? this.props.onPress(JSON.parse(event.nativeEvent.data)) : null}
        />
      </View>
    );
  }
}
