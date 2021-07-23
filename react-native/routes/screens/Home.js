import React from 'react'
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Go to Posts"
        onPress={() => navigation.navigate('Posts')}
      />
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
