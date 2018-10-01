import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class Geo_LiveTrack extends Component {
  render() {
    return (
        <View style ={styles.container}>
          <MapView
              style={styles.map}
              region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
          </MapView>
        </View>
    );
  }
}

let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'left',
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
});




AppRegistry.registerComponent('App', () => Geo_LiveTrack);
