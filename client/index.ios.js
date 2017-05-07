// @flow
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    // const { text } = styles;

    return(
      <View>
        <Header headerText='Albums!'/>
        <AlbumList />
      </View>
    )
  }
};

const styles= StyleSheet.create({
});

AppRegistry.registerComponent('client', () => App);
