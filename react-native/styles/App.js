import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'

const StyledBox = styled(View)`
  width: 100px;
  height: 100px;
  background-color: ${props => props.light ? 'lightblue' : '#333'};
  border: 1px solid #333;
`

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo</Text>
      <View style={{ width: 100, height: 100, backgroundColor: 'goldenrod' }} />
      <StyledBox />
      <StyledBox light />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    // border: '1px solid #333',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333'
  }
});
