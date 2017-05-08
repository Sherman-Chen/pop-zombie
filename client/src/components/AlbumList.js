import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
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
    this.onPurchasePress = this.onPurchasePress.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let response = await axios.get('http://localhost:8000/api');
      let albums = response.data;

      this.setState({
        albums,
        fetched: true
      });
    } catch (err) {
      console.error(err);
    }
  }

  onPurchasePress(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log(`Can't handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => {
      console.error('an error occured: ', err);
    });
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
          onPurchasePress = {this.onPurchasePress}
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
