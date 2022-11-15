import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundPage from "../assets/bgPage.jpg";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePageScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
        colors={['black', '#111111']}
        style={styles.bgColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <Image source={BackgroundPage} style={styles.img}/>
     <View style={styles.customText}>
     <Text style={styles.textMain}>Discover</Text>
     <Text style={styles.textMain}>prenium coffee</Text>
     <Text style={styles.textMain}>around you</Text>
     </View>

    <View style={styles.customBelowTop}>
    <TouchableOpacity style={styles.customBtn} onPress={() => {navigation.navigate('BottomTabScreens')}}>
            <Image source={require("../assets/facebook.png")} style={{width: 40, height: 40, right: 10}}/>
            <Text style={styles.textBtn}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
    </View>
    
    <View style={styles.customBelow}>
    <TouchableOpacity style={styles.customBtn} onPress={() => {navigation.navigate('BottomTabScreens')}}>
        <Image source={require("../assets/google.png")} style={{width: 40, height: 40, right: 10}}/>
            <Text style={styles.textBtn}>SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>
    </View>

       
      <View style={styles.customBelow}>
      <Text style={{color: 'white'}}>Don't have an account?</Text>
       
       <TouchableOpacity>
         <Text style={styles.txtResign}>REGISTER</Text>
       </TouchableOpacity>
      </View>
         
     
     </LinearGradient>
    
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
     
    },
    // bgcolorMain: {
    //   width: "100%",
    //   height: "100%",
    // },
    bgColor: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    img: {
        width: "100%",
        height: 300,
       
    },
    customText: {
      right: 70
    },
    customBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
        width: 400,
        borderColor: '#FF6633',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    textBtn: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    textMain: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    txtResign: {
      fontSize: 20,
      color: '#FF6633',
      textDecorationLine: 'underline'
    },
    customBelow: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    customBelowTop: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
      marginBottom: 10
    }
})