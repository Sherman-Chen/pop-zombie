//@ flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TrackListingDetail = ({ tracks }) => {
  const { TrackContainer } = styles;
  const mappedTracks = tracks.map((track, i) => {
    return <Text key={i}>{i + 1}. "{track.title}" - {track.duration}</Text>
  });

  return (
    <View style={TrackContainer}>
      {mappedTracks}
    </View>
  )
};

const styles = StyleSheet.create({
  TrackContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
    borderColor: '#dddddd',
    borderBottomWidth: 1
  }
});

export default TrackListingDetail;
