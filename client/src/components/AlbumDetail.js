// @flow
import React from 'react';
import { Text, View, Img} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ title }) => {
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
