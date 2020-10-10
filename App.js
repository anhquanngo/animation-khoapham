import React, { Component } from 'react';
import { View } from 'react-native';
import SlideAnim from './components/SlideAnim';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue'
        }}
      >
        <SlideAnim />
      </View>
    );
  }
}