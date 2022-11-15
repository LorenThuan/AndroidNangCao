import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import ConMeo from "./assets/conmeo.jpg"


export default function App() {

  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)

      });

  function onPress(evt){
       
    
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y

    })
    
    
  }
  function onMove(evt){
    
    
    
    console.log('alo ====================================');
    console.log(location);
    console.log('====================r================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease(){
    console.log("Realse!");
  }
  const {marginTop, marginLeft} = location;
  return (
    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>
     
      <Animated.Image
       source = {ConMeo}
       style={{marginLeft: marginLeft, marginTop: marginTop, width: 80, height: 80}}
       >

      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageConMeo: {
    width: 80,
    height: 80,
  }
});