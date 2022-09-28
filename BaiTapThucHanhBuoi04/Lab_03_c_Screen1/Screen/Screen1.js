import React, {  useEffect,useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import imgDienThoaiMau from '../assets/vsmart_live_xanh_1.png';
import ngoiSao from '../assets/Star_2.png';
import hinhTron from '../assets/Vector.png';
import dauChamHoi from '../assets/Vector1.png';
import dauBeHon from '../assets/Vector_(1).png'
import {useRoute } from '@react-navigation/native';


function Screen1({ navigation }) {
  const route = useRoute();
  var blue = require('../assets/vsmart_live_xanh_1.png');
  var [link, setLink] = useState(blue);

  useEffect(() => {
    if (route.params != null)
      setLink(route.params.message)
  });

    return (  
        <View style={styles.container}>
      
        <View style={styles.header}>
            <Image source={link} style={{width: 258, height: 319 }}/>
        </View>

        <View style={styles.gomNhom}>

        <View style={styles.headerBot}>
              <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>

        <View style={styles.mid}>
              <Image source={ngoiSao} style={styles.ngoiSao}/>
              <Image source={ngoiSao} style={styles.ngoiSao}/>
              <Image source={ngoiSao} style={styles.ngoiSao}/>
              <Image source={ngoiSao} style={styles.ngoiSao}/>
              <Image source={ngoiSao} style={styles.ngoiSao}/>
              <Text style={styles.text1}>(Xem 828 đánh giá)</Text>
        </View> 

        <View style={styles.midBot}>
                <View>
                <Text style={styles.text2}>1.790.000 đ</Text>
                </View>
                
                <View style={styles.midBotItem2}>
                <Text style={styles.text3}>1.790.000 đ</Text>
                </View>
                
        </View>

        <View style={styles.midBotBot}>
              <Text style={styles.text4}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
              <View style={styles.imgChamHoi}>
              <ImageBackground source={dauChamHoi} style={{width: 6.67, height: 11.67, alignItems: 'center', justifyContent: 'center',}}>
                  <Image source={hinhTron}/>
              </ImageBackground>
              </View>
           
        </View>
      
        </View>

        <View style={styles.botHead}>
          <TouchableOpacity onPress={() => navigation.navigate('PickColors')}>
          <View style={styles.rectangle}>
          <Text style={styles.text5}>4 MÀU-CHỌN MÀU</Text>
          <Image source={dauBeHon} style={{left: 70}}></Image>
          </View>
          </TouchableOpacity>
         
         
        </View>

       <View style={styles.bot}>
              <TouchableOpacity style={styles.touchAble}>
                  <Text style={styles.text6}>
                      CHỌN MUA
                  </Text>
              </TouchableOpacity>
        </View> 
    </View>
    );
}

export default Screen1;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    headerBot: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
  
    },
    header: {
      // flex: 1,
      alignItems: 'center',
      marginTop: 70,
    },
    mid: {
      // flex: 0.7,
      flexDirection: 'row',
    },
    midBot: {
      // flex: 1,
      flexDirection: 'row',
  
      
    },
    midBotBot: {
      // flex: 1,
      flexDirection: 'row',
  
    },
    botHead: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center', 
      alignItems: 'center'
    },
    bot: {
      flex: 0.3,
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 10,
      justifyContent: 'center',
      height: 44,
    }, 
    rectangle: {
      width: 175 * 2,
      borderRadius: 10,
      borderStyle: 'solid', 
      borderWidth: 1,
      flexDirection:'row',
      flex: 0.3,
      justifyContent:'center', 
      alignItems: 'center'
  
    }, 
    gomNhom: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 15,
      lineHeight: 17.58,
      fontWeight: '400',
    },
    text1: {
      fontFamily: 'Roboto',
      fontSize: 15,
      fontWeight: '400',
      left: 30,
    },
    ngoiSao: {
      width: 24,
      height: 25,
    },
    text2: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '700',
    },
    text3: {
      fontFamily: 'Roboto',
      fontSize: 15,
      left: 40,
      textDecorationLine: 'line-through',
      lineHeight: 18,
      color: 'rgba(0, 0, 0, 0.58)',
  
    },
    text4: {
      fontFamily: 'Roboto',
      fontSize: 12,
      lineHeight: 14.06,
      color: '#FA0000',
      fontWeight: '700',
      
  
    },
    text5: {
      fontFamily: 'Roboto',
      fontSize: 15,
      lineHeight: 18,
      color: '#000000'
    },
    text6: {
      fontFamily: 'Roboto',
      fontSize: 20,
      lineHeight: 23,
      color: '#F9F2F2',
    },
    imgChamHoi: {
      left: 20,
      justifyContent: 'center',
    },
    midBotItem2: {
        justifyContent: 'center',
        
    },
  
  
  });
  