import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [ a, setA ] = useState('');
  const [ b, setB ] = useState(''); 
  const [ kq, setKq ] = useState('');
  function tinhTong() {
    setKq(Number(a) + Number(b));
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>a</Text>
        <TextInput placeholder='Nhap a'  style={styles.input}  onChangeText={setA}></TextInput>
      </View>
      <View style={styles.row}>
        <Text>b</Text>
        <TextInput placeholder='Nhap b' style={styles.input} onChangeText={setB}></TextInput>
      </View>
      <Button title='Tong' onPress={tinhTong}></Button>
      <View style={styles.row}>
          <Text>Ket qua: </Text>
            <Text style={styles.result}>{kq}</Text>
      </View>
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
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    width: 100,
    textAlign: 'center',
  },
  result: {
    borderWidth: 1,
    width: 100,
    textAlign: 'center',
  }
});