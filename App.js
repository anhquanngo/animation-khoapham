import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SlideAnim from './components/SlideAnim';
import TransformView from './components/TransformView';
import TranImage from './components/TranImage';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TranImage />
      </View>
    );
  }
}