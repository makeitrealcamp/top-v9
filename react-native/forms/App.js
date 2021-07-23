import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [language, setLanguage] = useState()

  function handleSubmit() {
    console.log({ name, age, password, terms, language })
  }

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        placeholder="name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <TextInput
        placeholder="age"
        onChangeText={age => setAge(age)}
        value={age}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
      <Switch
        onValueChange={value => setTerms(value)}
        value={terms}
      />
      <Picker
        onValueChange={value => setLanguage(value)}
        selectedValue={language}
      >
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button
        title="Create User"
        onPress={handleSubmit}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
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
