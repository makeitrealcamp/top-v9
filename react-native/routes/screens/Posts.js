import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function Posts() {
  const [posts, setPosts] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.title}</Text>
            <Button
              title="View More"
              onPress={() => navigation.navigate('Post', {
                hola: 'mundo',
                id: item.id,
                name: 'María'
              })}
            />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
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
  post: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333'
  }
});
