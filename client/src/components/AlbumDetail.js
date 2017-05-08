// @flow
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  let { title, artist, thumbnail } = props;
  let { headerContentStyle, thumbnailStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{uri: thumbnail}}/>
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 5
  }
};

export default AlbumDetail;
