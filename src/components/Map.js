import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: -6.28542872003845 + i * 0.001,
        longitude: 107.04080237435055 + i * 0.001,
      });
    } else {
      points.push({
        latitude: -6.28542872003845 - i * 0.002,
        longitude: 107.04080237435055 + i * 0.001,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -6.28542872003845,
        longitude: 107.04080237435055,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
