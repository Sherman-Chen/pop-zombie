//@ flow
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default class TrackListingDetail extends Component {
  render() {
    const { TrackContainer } = styles;

    return (
      <View style={TrackContainer}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
        <Text>11</Text>
        <Text>12</Text>
        <Text>13</Text>
        <Text>14</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TrackContainer: {
    height: '100%',
    justifyContent: 'space-around',
    padding: 5,
  }
});
