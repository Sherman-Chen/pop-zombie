import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

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
    let mappedAlbums = this.state.albums.map(album => {
      return (
        <AlbumDetail
          key={album.title}
          title={album.title}
          artist={album.artist}
          thumbnail={album.thumbnail_image}
          image={album.image}
          url={album.url}
        />
      );
    });

    if (this.state.fetched) {
      // console.log(this.state.albums);
      return (
        <ScrollView>
          {mappedAlbums}
        </ScrollView>
      )
    } else {
      return null;
    }
  }
}
