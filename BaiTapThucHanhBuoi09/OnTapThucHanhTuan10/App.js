import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageScreen from './screens/HomePageScreen';
import HomeScreen from './screens/HomeScreen';
import BottomTabNavigator from './screens/BottomTabScreens';
import CartScreen from './screens/CartScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.container}>
           <NavigationContainer >
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
        <Stack.Screen name="BottomTabScreens" component={BottomTabNavigator} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    </SafeAreaView>
     );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
