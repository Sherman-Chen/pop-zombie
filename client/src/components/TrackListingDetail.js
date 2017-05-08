//@ flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TrackListingDetail = ({ tracks }) => {
  const { trackContainer, trackText } = styles;
  const mappedTracks = tracks.map((track, i) => {
    return <Text key={i} style={trackText}>{i + 1}. "{track.title}" - {track.duration}</Text>
  });

  return (
    <View style={trackContainer}>
      {mappedTracks}
    </View>
  )
};

const styles = StyleSheet.create({
  trackContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  trackText: {
    fontSize: 13
  }
});

export default TrackListingDetail;
