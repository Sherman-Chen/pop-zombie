import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      let albums = response.data;

      this.setState({
        albums
      }, () => {console.log(this.state.albums)});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <View>
        <Text>MAMA MIA!</Text>
      </View>
    )
  }
}
