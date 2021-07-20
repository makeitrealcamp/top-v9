import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, Button, Alert, TouchableHighlight, Image } from 'react-native';

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
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare erat tortor. Nulla ac fermentum ipsum. Mauris dolor lorem, pellentesque vel neque non, facilisis viverra dui. Morbi placerat nisi tortor, et bibendum massa viverra nec. Phasellus vel lacinia magna, eget lobortis urna. Praesent varius euismod faucibus. Proin ac sem sollicitudin nisi cursus egestas ac vestibulum est. Donec finibus eros at purus vehicula dapibus. Phasellus eros arcu, malesuada elementum sem accumsan, iaculis varius metus. Ut ac tempus risus. Curabitur cursus enim lorem, non feugiat dui fringilla sit amet. Aenean tincidunt semper leo at gravida. Vestibulum faucibus pellentesque risus. In libero dolor, luctus porta venenatis eget, lacinia a mauris. Aliquam quis tempus sem.</Text>
        <Text>Morbi libero urna, convallis non egestas interdum, suscipit eget diam. Morbi convallis sed elit in consequat. Duis ac iaculis nisl. Praesent accumsan, ligula sit amet ullamcorper euismod, arcu massa consectetur arcu, sit amet volutpat libero erat vitae libero. Morbi enim est, imperdiet a risus sit amet, tristique egestas nunc. Vestibulum eleifend varius lectus, a sollicitudin erat. Praesent egestas metus eu mi eleifend aliquet. Sed auctor faucibus ante aliquet ullamcorper. Nam congue gravida diam, non interdum libero dignissim scelerisque. Nullam dui mi, placerat vel imperdiet at, imperdiet a nunc. Pellentesque molestie, lorem eget varius pharetra, justo leo sollicitudin est, non pulvinar massa purus sit amet tellus. Donec leo nisl, fermentum a euismod at, gravida id magna. Etiam ac magna mollis, dapibus sapien sed, dignissim mauris. Vestibulum posuere purus at justo sagittis, at fringilla quam porttitor.</Text>
        <Text>Sed eu est feugiat, interdum sapien at, cursus nisl. Cras sit amet nunc diam. Integer condimentum laoreet suscipit. Vivamus auctor, metus iaculis egestas vulputate, sem sem interdum mauris, et viverra metus est eu magna. Donec arcu nunc, pulvinar consequat eros efficitur, accumsan mollis dolor. Fusce sit amet hendrerit ex, vel posuere urna. Mauris volutpat blandit nunc, a iaculis lorem sagittis pharetra. Duis ac ipsum a mauris blandit vehicula ut sed augue. Vivamus eget placerat lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sapien nibh, eleifend a mauris consectetur, commodo auctor lorem. Pellentesque nibh ipsum, congue eu felis in, pulvinar venenatis mauris. Cras vitae est dui.</Text>
        <Text>Maecenas sit amet nibh nec augue varius lacinia. Donec eros dui, pulvinar eget libero non, eleifend elementum ex. Quisque consectetur ligula nec scelerisque eleifend. Vestibulum fringilla ut nisi sit amet sollicitudin. Cras sit amet odio at nulla maximus hendrerit. Aliquam erat volutpat. Nam gravida cursus lobortis. Pellentesque eleifend, purus at sollicitudin facilisis, nibh risus porttitor leo, at hendrerit nulla nulla vitae ipsum. Etiam auctor id enim id ultricies.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare erat tortor. Nulla ac fermentum ipsum. Mauris dolor lorem, pellentesque vel neque non, facilisis viverra dui. Morbi placerat nisi tortor, et bibendum massa viverra nec. Phasellus vel lacinia magna, eget lobortis urna. Praesent varius euismod faucibus. Proin ac sem sollicitudin nisi cursus egestas ac vestibulum est. Donec finibus eros at purus vehicula dapibus. Phasellus eros arcu, malesuada elementum sem accumsan, iaculis varius metus. Ut ac tempus risus. Curabitur cursus enim lorem, non feugiat dui fringilla sit amet. Aenean tincidunt semper leo at gravida. Vestibulum faucibus pellentesque risus. In libero dolor, luctus porta venenatis eget, lacinia a mauris. Aliquam quis tempus sem.</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }}
        />
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
