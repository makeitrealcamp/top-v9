import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, Button, Alert, TouchableHighlight, Image } from 'react-native';
import Users from './components/Users'
import Contacts from './components/Contacts'

export default function App() {
  const [count, setCount] = useState(0)

  function handlePress() {
    // Alert.alert('hola')
    setCount(prevCount => prevCount + 1)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableHighlight>
          <Text>Hola mundo!</Text>
        </TouchableHighlight>
        <Text>Desde MiR {count}</Text>
        <Button onPress={handlePress} title="button" />
        <Text>Lorem ipsum dolor sit amet</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }}
        />
        <Contacts />
        <Users />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  }
});
