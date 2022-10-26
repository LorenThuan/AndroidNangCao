import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  const value = useRef(new Animated.Value(0)).current;

  const startO = () => {
    Animated.timing(value, {
      toValue: 400,
      duration: 3000,
    }).start();
  }
   const stopO = () => {
    Animated.timing(value, {
    }).stop();
   }
   const resetO = () => {
    Animated.timing(value, {
      toValue: 0,
    }).start();
   }
  return (
    <View style={styles.container}>
      <Animated.View style={{marginLeft: value}}>
      <Entypo name="paper-plane" size={24} color="black" />
      </Animated.View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Button onPress={startO} title='Start'>
              </Button>
              <Button onPress={stopO} title='Stop'>

              </Button>
          <Button onPress={resetO} title='Reset'>

          </Button>
        </View>
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
