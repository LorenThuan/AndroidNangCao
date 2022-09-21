import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('./assets/circle.png')} style={styles.imgcircle}></Image>
      </View>
      <View style={styles.center1}>
        <Text style={styles.title1}> GROW {'\n'} YOUR BUSINESS </Text>
      </View>
      <View style={styles.center2}>
        <Text style={styles.title2}> We will help you to grow your business using {'\n'} online server</Text>
      </View>
      <View style={styles.center3}>
        <TouchableOpacity style={styles.subcenter3}>
            <Text style={styles.textBtn}>LOGIN</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.subcenter3}>
            <Text style={styles.textBtn}>SIGN UP</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.center4}>
        <Text style={styles.title3}>
          HOW WE WORK?
        </Text>
      </View><StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#28F7AC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    flex: 1,
    alignItems: 'center',
  },
  imgcircle: {  
    width: 142,
    height: 142,
    top: 69,
 
  },
  center1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  center2: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
  },
  center3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  subcenter3: {
    backgroundColor: '#E3C000',
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 29,
  },
  center4: {
    flex: 1,
    alignItems: 'center',
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    lineHeight: 29.3,
    marginTop: 90,
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    lineHeight: 17.58,
    marginTop: 90,
  },
  title3: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Roboto',
    textAlign: 'center',
    lineHeight: 21.09,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
  }
});

