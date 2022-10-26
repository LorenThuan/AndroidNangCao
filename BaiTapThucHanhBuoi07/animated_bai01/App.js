import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native';
import React, {useEffect, useRef} from 'react';




export default function App() {
  const animated = useRef(new Animated.Value(0)).current;
  useEffect(() =>  {
   const fadeIn = async () => {

   
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(animated, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
    fadeIn();
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{
        opacity: animated
      }}>

        <Text style={styles.text}>Welcome to Animation React Native</Text>
      </Animated.View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'aqua',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
