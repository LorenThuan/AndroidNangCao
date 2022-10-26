import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Animated, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { useRef, useEffect, useNativeDriver } from 'react';


export default function App() {
  const value = useRef(new Animated.Value(0)).current;


  const onPress = () => {
    Animated.timing(value, {
      toValue: 400,
      duration: 5000,
      // useNativeDriver: true,
    }).start();
    }
 


 

  return (
    <View style={styles.container}>
      <Animated.View style={{
          marginLeft: value
      }}>
           <Entypo name="paper-plane" size={24} color="black" />
      </Animated.View>
        <Button onPress={onPress} title="click me!">
        </Button>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
