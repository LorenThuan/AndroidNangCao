import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import React from 'react'
import { AntDesign, Octicons, Fontisto, FontAwesome  } from '@expo/vector-icons';
import baCham from '../assets/Group2.png'
import DATA from '../flatListData';
import { StatusBar } from 'expo-status-bar';

const CustomListItems = ({ name, danhGia, soNguoiDanhGia, giaTien, giamGia, linkImage}) => {
    return (
        <View style={styles.contentCustomAll}>
        <TouchableOpacity style={styles.listItems}>
            <Image source={{uri: linkImage}} style={styles.img}></Image>
    
            <View style={styles.contentBotItems}>
                    <Text>
                        {name}
                    </Text>
    
                <View style={styles.contentBotNameShopItems}>
                    <View style={styles.customDanhGia}>
                    <Image source={{uri: danhGia}} style={styles.imgDanhGia}/>
                    <Text style={styles.soNguoiDanhGia}>
                        {soNguoiDanhGia}
                    </Text>
                    </View>
                   
                </View>      
            </View>
    
            <View style={styles.containLast}>
                    <Text style={styles.txtGiaTien}>{giaTien}</Text>
                    <Text style={styles.txtGiamGia}>{giamGia}</Text>
            </View>
    
           
            <StatusBar style="auto" />
        </TouchableOpacity>
        </View>
    );
   
};


export default function FlatListGridView() {
  return (
    <View>
       <View style={styles.container}>

<View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        <View style={styles.customSearch}>
        <TouchableOpacity style={{paddingLeft: 10}}>
            <FontAwesome name="search" size={24} color="black"/>
        </TouchableOpacity>
        
        <TextInput style={styles.txtInputSearch} placeholder='Dây cáp usb'> 
        </TextInput>
        </View>
      
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
            <Image source={baCham}/>
      </TouchableOpacity>
      
</View>
        <FlatList
            data={DATA}
            renderItem={
                ({item, index}) => {
                    return (
                        <CustomListItems 
                        linkImage={item.linkImage} 
                        name={item.name} 
                        danhGia={item.danhGia} 
                        soNguoiDanhGia={item.soNguoiDanhGia} 
                        giaTien={item.giaTien}
                        giamGia={item.giamGia}
                        >

                        </CustomListItems>
                    );
                }
            }
            numColumns={2}
        style={styles.bgFlatList}>

        </FlatList>
        <View  style={styles.tail}>
                <TouchableOpacity>
                    <AntDesign name="bars" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                     <Octicons name="home" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                <Fontisto name="arrow-return-left" size={24} color="black" />
                </TouchableOpacity>
        </View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 360,
        height: 50,
        backgroundColor: '#1BA9FF',
        alignItems: 'center'
    },
    tail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 360,
        height: 49 ,
        backgroundColor: '#1BA9FF',
        alignItems: 'center',
    },
    listItems: {
        flexDirection: 'column',
        marginTop: 20
    },
    contentBotItems: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    contentBotNameShopItems: {
        flexDirection: 'row',
    },
    img: {
        width: 155,
        height: 90,
    },
    contentCustomAll: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    txtInputSearch: {
        backgroundColor: '#FFFFFF',
        width: 192,
        height: 40,
        fontWeight: 'bold'
    },
    customSearch: {
        backgroundColor: '#FFFFFF',
        width: 240,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containLast: {
        flexDirection: 'row',
    },
    imgDanhGia: {
        width: 106,
        height: 13,
    },
    txtGiaTien: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        
    },
    txtGiamGia: {
        fontFamily: 'Roboto',
        color: '#969DAA',
        left: 20,
    },
    bgFlatList: {
        backgroundColor: '#F5F5F5',
    },
    customDanhGia: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    soNguoiDanhGia: {
        left: 5
    }
    // infoAcc: {
    //     color: '#FFFFFF',
    //     textAlign: 'center',
    // }

});