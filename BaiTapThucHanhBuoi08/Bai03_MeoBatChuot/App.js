import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useState,useRef, useEffect } from 'react';
import { Button, Image } from 'react-native';
import ConChuot1 from "./assets/conchuot1.jpg";
import ConChuot2 from "./assets/conchuot2.jpg";
import ConChuot3 from "./assets/conchuot3.jpg";
import ConMeo from "./assets/conmeo.jpg";

export default function App() {


  
    
    const randomX = Math.floor(Math.random() * 300) + 1;
    const randomY = Math.floor(Math.random() * 200) + 1;
    
    const [location, setLocation] 
    = useState({
      x: randomX,
      y: randomY,
      marginLeft: new Animated.Value(10),
      marginTop: new Animated.Value(10)

    });

    const [locations, setLocations] 
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(10),
      marginTop: new Animated.Value(10)

    });


    // useEffect(() => {
      
    // }, [])
    

  function onPress(evt){
       
    setLocations(location)
    console.log('====================================');
    var x = randomX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = randomY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y

    })
    
   
  }

  function onPress1(evt){
    setLocations(location)
  }

 

  function onMove(evt){
    
    
    
    console.log('alo ====================================');
    console.log(location);
    console.log(locations);
    console.log('====================r================');
    //setLocation({marginLeft: x, marginTop: y })
  }

function onRelease(){
    console.log("Realse!");
  }

  const {marginTop, marginLeft} = location;
  const {marginTops, marginLefts} = locations;
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>

    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
     >
     
      <Animated.Image
       source = {ConChuot1}
       style={{marginLeft: marginLeft, marginTop: marginTop, width: 80, height: 80}}
       >

      </Animated.Image>
    </View>

    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
     >
     
      <Animated.Image
       source = {ConChuot2}
       style={{marginLeft: marginLeft, marginTop: marginTop, width: 80, height: 80}}
       >

      </Animated.Image>
      </View>

      <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
     >
     
      <Animated.Image
       source = {ConChuot3}
       style={{marginLeft: marginLeft, marginTop: marginTop, width: 80, height: 80}}
       >

      </Animated.Image>

    </View>

    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
     >
     
      <Animated.Image
       source = {ConMeo}
       style={{marginLeft: marginLefts, marginTop: marginTops, width: 80, height: 80}}
       >

      </Animated.Image>

    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});