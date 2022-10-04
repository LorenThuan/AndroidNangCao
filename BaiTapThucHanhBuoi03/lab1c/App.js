import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React from "react";
import { CodeField } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.center1}>
            <Text style={styles.txttitle1}>CODE</Text>
      </View>
      <View style={styles.center2}>
          <Text style={styles.txttitle2}>VERIFICATION</Text>
      </View>
      <View style={styles.center3}>
            <Text style={styles.txttitle3}>Enter ontime password sent on {'\n'} ++849092605798</Text>
      </View>
      <View style={styles.center4}>
          <View style={styles.contentCenter4}>

          </View>

          <View style={styles.contentCenter4}>

          </View>

          <View style={styles.contentCenter4}>
            
          </View>

          <View style={styles.contentCenter4}>
            
          </View>

          <View style={styles.contentCenter4}>
            
          </View>

          <View style={styles.contentCenter4}>
            
          </View>
      </View>
      <View style={styles.center5}>
            <TouchableOpacity style={styles.btbtouch}>
              <Text style={styles.txttitle4}>VERIFY CODE</Text>
            </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txttitle1: {
    fontFamily: 'Roboto',
    fontSize: 60,
    lineHeight: 70.31,
    textAlign: 'center',
    color: '#000000',
  },
  center1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
  },
  center2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txttitle2: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 23.44,
    color: '#000000',
  },
  txttitle3: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 18,
    color: '#000000',
  },
  txttitle4: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 21,
    color: '#000000',
  },
  center3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center5: {
    flex: 1,
    alignItems: 'center',

  },
  btbtouch: {
    backgroundColor: '#E3C000',
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCenter4: {
   width: 50, 
   height: 50, 
   borderWidth: 1
  }
});
