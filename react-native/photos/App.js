import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  const [cameraPermission, setCameraPermission] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ImagePicker
      .requestMediaLibraryPermissionsAsync()
      .then(({ status }) => setCameraRollPermission(status))

    ImagePicker
      .requestCameraPermissionsAsync()
      .then(({ status }) => setCameraPermission(status === 'granted'))
  }, [])

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  async function handleTakePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  return (
    <View style={styles.container}>
      {cameraPermission ? (
        <Button
          title="Take a Picture"
          onPress={handleTakePicture}
        />
      ) : (
        <Text>Please allow the app to access camera in your settings</Text>
      )}
      {cameraRollPermission === 'granted' ? (
        <Button
          title="Pick an Image"
          onPress={handlePickImage}
        />
      ) : (
        <Text>Please allow the app to access photos in your settings</Text>
      )}
      {!!image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
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
  image: {
    width: 400,
    height: 300,
  }
});
