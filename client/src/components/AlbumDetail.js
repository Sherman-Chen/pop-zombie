// @flow
import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  let { title, artist, thumbnail, image, url } = props;
  let { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail}}/>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <FlipCard
        style={{borderWidth: 0}}
        friction={10}
        perspective={0}
        alignHeight={true}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View>
          <CardSection>
            <Image style={imageStyle} source={{uri: image}}/>
          </CardSection>
        </View>
        <View>
          <CardSection>
            <Text style={{height: 333}}>

            </Text>
          </CardSection>
        </View>
      </FlipCard>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} title={title}/>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 333,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
