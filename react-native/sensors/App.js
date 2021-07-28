import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Gyroscope, Accelerometer } from 'expo-sensors'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

export default function App() {
  const [gyroscope, setGyroscope] = useState({})
  const [accelerometer, setAccelerometer] = useState({})
  const [locationPermissions, setLocationPermissions] = useState(false)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    Gyroscope
      .isAvailableAsync()
      .then(isAvailable => {
        if(isAvailable) {
          Gyroscope.addListener(data => setGyroscope(data))
          Gyroscope.setUpdateInterval(1000)
        }
      })

    Accelerometer
      .isAvailableAsync()
      .then(isAvailable => {
        if(isAvailable) {
          Accelerometer.addListener(data => setAccelerometer(data))
          Accelerometer.setUpdateInterval(1000)
        }
      })

    Location
      .requestForegroundPermissionsAsync()
      .then(({ status }) => setLocationPermissions(status === 'granted'))
  }, [])

  async function handleGetLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    })

    setLocation(data)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {!!gyroscope && (
        <View>
          <Text>X: {round(gyroscope.x)}</Text>
          <Text>Y: {round(gyroscope.y)}</Text>
          <Text>Z: {round(gyroscope.z)}</Text>
        </View>
      )}
      {!!accelerometer && (
        <View>
          <Text>X: {round(accelerometer.x)}</Text>
          <Text>Y: {round(accelerometer.y)}</Text>
          <Text>Z: {round(accelerometer.z)}</Text>
        </View>
      )}
      <Button
        title="Get Location"
        onPress={handleGetLocation}
      />
      {!!location && (
        <MapView
          style={{ width: 300, height: 300 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="example"
            description="example"
          />
        </MapView>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
