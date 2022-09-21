import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput} from "@react-native-material/core";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.center1}>
        <ImageBackground  source={require('./assets/VectorInside.png')} tyle={styles.vectorimginside}>
        <Image source={require('./assets/Vector.png')} style={styles.vectorimg}></Image>
        </ImageBackground>
       
      </View>
      <View style={styles.center2}>
      <Text style={styles.txttitle1}>FORGET {'\n'} PASSWORK</Text>
      </View>
      <View style={styles.center3}>
      <Text style={styles.txttitle2}>Provide your account’s email for which you {'\n'} want to reset your password</Text>
      </View>
      <View style={styles.center4}>
      <Stack spacing={1} style={{ margin: 49 }}>
      <TextInput style={{fontWeight: '700'}}
      label="Email"
      leading={props => <Icon name="email" {...props} />}
      />
   
    
  </Stack>
      </View>
      <View style={styles.center5}>
      <TouchableOpacity style={styles.btnTouch}>
        <Text style={styles.titleinsidebtn}>NEXT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDF6C6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  center1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  center2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center3: {
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  center4: {
    
  },
  center5: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vectorimg: {
    width: 99.06,
    height: 112.37,
    opacity: 0.98,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vectorimginside: {
    flex: 1,
    width: 104.94,
    height: 116.95,
    opacity: 0.98,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTouch: {
    backgroundColor: '#E3C000',
    width: 305,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  titleinsidebtn: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700',
  },
  txttitle1: {
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 25,
    lineHeight: 29,
  },
  txttitle2: {
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
  },
});
