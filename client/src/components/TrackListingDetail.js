//@ flow
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default class TrackListingDetail extends Component {
  render() {
    const { TrackContainer } = styles;

    return (
      <View style={TrackContainer}>
        <Text>1. "Tim McGraw" - 3:54</Text>
        <Text>2. "Picture to Burn" - 2:55</Text>
        <Text>3. "Teardrops on My Guitar" - 3:35</Text>
        <Text>4. "A Place in This World" - 3:22</Text>
        <Text>5. "Cold as You" - 4:01</Text>
        <Text>6. "The Outside" - 3:29</Text>
        <Text>7. "TiedTogether with a Smile" - 4:11</Text>
        <Text>8. "Stay Beautiful" - 3:58</Text>
        <Text>9. "Should've Said No" - 4:04</Text>
        <Text>10. "Mary's Song (Oh My My My)" - 3:35</Text>
        <Text>11. "Our Song" - 3:24</Text>
      </View>
    )
  }
}

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
