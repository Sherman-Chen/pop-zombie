// @flow
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    // const { text } = styles;

    return(
      <View>
        <Header />
      </View>
    )
  }
};

const styles= StyleSheet.create({
});

AppRegistry.registerComponent('client', () => App);
