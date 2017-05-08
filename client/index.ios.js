// @flow
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    // const { text } = styles;

    return(
      <View style={{flex: 1}}>
        <Header headerText='TayTay Parade'/>
        <AlbumList />
      </View>
    )
  }
}

AppRegistry.registerComponent('client', () => App);
