import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,  } from 'react-native';
import React from 'react';
import { AntDesign, Octicons, Fontisto } from '@expo/vector-icons';
import BacsicFlatList from './component/BasicFlatList';

export default function App() {
  return (
              <SafeAreaView style={styles.container}>
              <BacsicFlatList></BacsicFlatList>

          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
