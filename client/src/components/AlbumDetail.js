// @flow
import React from 'react';
import { Text, View, Img} from 'react-native';
import Card from './Card';

const AlbumDetail = ({ title }) => {
  return (
    <Card>
      <Text>{title}</Text>
    </Card>
  );
};

export default AlbumDetail;
