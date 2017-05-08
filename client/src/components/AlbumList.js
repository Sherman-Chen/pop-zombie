import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      fetched: false
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
        albums,
        fetched: true
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    let mappedAlbums = this.state.albums.map((album, i) => {
      return (
        <View key={i}>
          <Text>{album.title}</Text>
        </View>
      );
    });

    if (this.state.fetched) {
      console.log(this.state.albums);
      return (
        <View>
          {mappedAlbums[0]}
        </View>
      )
    } else {
      return null;
    }
  }
}
