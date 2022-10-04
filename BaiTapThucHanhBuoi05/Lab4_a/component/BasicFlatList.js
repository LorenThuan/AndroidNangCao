import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign, Octicons, Fontisto } from '@expo/vector-icons';
import flatListData from '../flatListData';


const CustomListItems = ({linkImage, name, nameShop, nameShopTitle}) => {
    return (
        <View style={styles.contentCustomAll}>
        <TouchableOpacity style={styles.listItems}>
            <Image source={{uri: linkImage}} style={styles.img}></Image>

            <View style={styles.contentBotItems}>
                    <Text>
                        {name}
                    </Text>

                <View style={styles.contentBotNameShopItems}>
                    <Text style={{color: '#7D5B5B'}}>
                        {nameShop} 
                    </Text>
                    <Text>
                        {nameShopTitle}
                    </Text>
                </View>
                    

            </View>

            <TouchableOpacity style={{width: 88, height: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red',}}>
                <Text style={{color: '#FFFFFF',}}>Chat</Text>
            </TouchableOpacity>
           
            <StatusBar style="auto" />
        </TouchableOpacity>
        </View>
    );
};

function BacsicFlatList() {
    return (
       <View style={styles.container}>

        <View style={styles.header}>
                <TouchableOpacity>
                  <AntDesign name="arrowleft" size={24} color="white" />
                  </TouchableOpacity>
                  <Text style={{color: '#FFFFFF'}}>Chat</Text>
                <TouchableOpacity>
                  <AntDesign name="shoppingcart" size={24} color="white" />
              </TouchableOpacity>
        </View>
              

              <View style={styles.headerBot}>
              <Text style={{color: 'black'}}>
                  Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
              </Text>
              </View>

                <FlatList
                    data={flatListData}
                    renderItem={
                        ({ item, index }) => {
                            // console.log(`item ${JSON.stringify(item)} index ${index}`);

                            return (

                                <CustomListItems linkImage={item.linkImage} name={item.name} nameShop={item.nameShop} nameShopTitle={item.nameShopTitle}>
                                </CustomListItems>
                                
                            );
                        }
                    }
                >  

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
    );
}

function FlatListItems({ item, index }) {

}

export default BacsicFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 360,
        height: 42,
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
    headerBot: {
        flex: 2,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    listItems: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    contentBotItems: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    contentBotNameShopItems: {
        flexDirection: 'row',
    },
    img: {
        width: 74,
        height: 74,
    },
    contentCustomAll: {
        marginTop: 10,
    }

});