import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ name, setName] = useState('');
  function callFunction() {
    Alert.alert("","" + name);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder='input' style={styles.textInput} onChangeText={setName}></TextInput>
      <Button title='Show' onPress={callFunction}></Button>
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
  textInput: {
    backgroundColor: '#f0f0f0',
    width: 200,
  }
});
