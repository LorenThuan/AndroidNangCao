import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createContext, useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign,FontAwesome,MaterialCommunityIcons,SimpleLineIcons,Entypo, Feather } from '@expo/vector-icons'; 
import ImgCafeDiscount from "../assets/CafeDisCount.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

export var ListOrderContext = createContext();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function HomeScreen(id) {
    const [data, setData] = useState([]);
    const [idProduct, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [rate, setRate] = useState("");
    const [previews, setPreviews] = useState("");
    const navigation = useNavigation(); 

    const [listOrder, setListOrder] = useState([]);

    const [arrTemp, setarrTemp] = useState([]);

    ListOrderContext = createContext({ listOrder: listOrder });

    function addList(item) {
          var obj = item;
          obj["amount"] = "1";
          setListOrder([...listOrder, obj]);
        }
      

    useEffect(() => {
        getListProducts();
    }, [])
    

   const getListProducts = () => {
        const apiURL = "https://636c7f0bad62451f9fcbae43.mockapi.io/product";
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        }).catch((error) => {
            console.log("Error: ", error);
        })
    }

    // const [products, setProducts] = useState({});


    const handlePress = () => {
        // navigation.navigate('CartScreen', { arrItem:arrTemp })
        navigation.navigate("CartScreen");
    }

const renderItem = ({item, index}) => {
        var listProduct = {
            image: item.image,
            name: item.name,
            price: item.price,
            rate: item.rate,
            previews: item.previews,
            id: item.id,
          
        }
       

        // var listProduct = {
        //     image: image,
        //     name: name,
        //     price: price,
        //     rate: rate,
        //     previews: previews,
        //     id: idProduct,
        // }
    // setProducts(listProduct);

    return (
        <View style={styles.containList}>
            <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity style={styles.btnHeart}>
                        <AntDesign name="hearto" size={28} color="orange" />
                    </TouchableOpacity>
            </View>
           
            <View style={{justifyContent: "center", alignItems: "center"}}>
            <Image 
            source={{uri: item.image}} 
            style={styles.cusTomImageList}
            resizeMode= "contain"
            />
            </View>
          
            <View style={styles.customNameAndPrice}>
                <Text style={styles.txtNameList}>{item.name}</Text>
                <View style={styles.customPrice}>
                    <Text style={styles.priceList}>${item.price}</Text>
                </View>
               
            </View>

            <View style={styles.cusTomRateAndBtnAdd}>
                <AntDesign name="star" size={15} color="orange" />
                <Text style={styles.rate}>{item.rate} </Text>
                <Text style={styles.previews}>({item.previews})</Text>

                <View style={styles.customAdd}>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => {
                                // setId(item.id)
                                // setName(item.name)
                                // setImage(item.image)
                                // setPrice(item.price)
                                // setRate(item.rate)
                                // setPreviews(item.previews)
                            //     console.log("idProduct",idProduct);
                            //     // navigation.navigate('CartScreen', { message: listProduct })
                            //    setarrTemp([...arrTemp, data[index]])
                            //    navigation.navigate('CartScreen', { arrItem:arrTemp })
                            addList(item)
                        }}>
                            <SimpleLineIcons name="handbag" size={28} color="black" />
                    </TouchableOpacity>
                </View>

              
            </View>
        </View>
    )
}

  return (
    <View style={styles.container}>
         <ListOrderContext.Provider
                value={{ listOrder: listOrder }}
              ></ListOrderContext.Provider>
        <View style={styles.containTop}>
            <FontAwesome name="bars" size={35} color="black" />
            <View style={styles.containTopMid}>
            <MaterialCommunityIcons name="map-marker-outline" size={25} color="orange"/>
            <Text style={styles.txtMap}>Sukrabad, Dhaka {"\n"} Bangladesh  <AntDesign name="caretdown" size={15} color="orange" /></Text>
            </View>
            <View style={styles.containTopRight}>
                <MaterialCommunityIcons name="message-badge-outline" size={35} color="black" />
            
            <View style={styles.cusTomBell}>
                <MaterialCommunityIcons name="bell-badge-outline" size={35} color="orange" />
            </View>
             
            </View>
        </View>

        <ScrollView style={styles.containMidMain}>

            <View style={styles.containCover}>
            <View style={styles.containBestSeller}>
                <Image source={require("../assets/coffeecherry.png")} style={styles.imgCherry}/>
                <View style={styles.containDetailSell}>
                <LinearGradient
                    colors={['red', 'green']}
                    style={styles.bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.txtName}>Starbucks</Text>
                        
                </LinearGradient>
                <LinearGradient
                    colors={['red', 'green']}
                    style={styles.bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.txtName}>Cherry Coffee</Text>
                </LinearGradient>
                    
                    <Text style={styles.containDescribe}>It is a long established fact that a {"\n"} reader will be distracted by the.</Text>
                    <View style={styles.customCart}>
                        <Text style={styles.price}>$65</Text>
                        <TouchableOpacity style={styles.btnCart} onPress={handlePress}>
                            <Text style={styles.txtCart}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View style={styles.containCoverMenu}>
                <View style={styles.customMenu}>
                        <TouchableOpacity style={styles.btnMenu}>
                            <Text>All Coffees</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <Text>Hot Coffees</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <Text>Hot Teas</Text>
                        </TouchableOpacity>
                </View>
            </View>

            <FlatList
            style={styles.flatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index) => index}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            />


            
        </ScrollView>
     
    </View>
  )
}


  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFAF0"
    },
    containTop: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: "center",
       paddingTop: 40,
       paddingBottom: 20,
       backgroundColor: "#FFFAF0"
    },
    containTopMid: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containTopRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    txtMap: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    cusTomBell: {
        left: 20
    },
    containMidMain: {
       flex: 1,
       backgroundColor: "#DDDDDD",
       width: "100%" 
    },
    containBestSeller: {
        
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#996633",
        borderRadius: 20,
        height: 200,
        width: 400
    },
    txtName: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    txtNameList: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",

    },
    price: {
        fontSize: 25,
        color: 'white',
        fontWeight: "bold",
     
    },
    priceList: {
        fontSize: 20,
        color: '#FFEC8B',
        fontWeight: "bold",
     
    },
    txtCart: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    containDescribe: {
        color: 'white',
        fontSize: 13
    },
    customCart: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnCart: {
        width: 150,
        height: 50,
        backgroundColor: "#FFEC8B",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    imgCherry: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    containCover: {
        paddingTop: 25,
        left: 20,
        right: 20,
    },
    containDetailSell: {
        marginLeft: 10
    },
    bgColor: {
        width: 160
    },
    containCoverMenu: {
        paddingTop: 25,
    },
    customMenu: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btnMenu: {
        justifyContent: "center",
        alignItems: "center",
        left: 15,
        width: 120,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#FFEC8B",
    },
    flatList: {
        flex: 1,
        padding: 6,
        flexDirection: "row"
    },
    containList: {
        margin: 15,
        backgroundColor: "black",
        borderRadius: 20
    },
    btnHeart: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    customNameAndPrice: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cusTomRateAndBtnAdd: {
        flexDirection: "row",
        alignItems: "center"
    },
    btnAdd: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 50,
        borderTopLeftRadius: 20,
        backgroundColor: "#FFEC8B"
    },
    cusTomImageList: {
        width: 120,
        height: 120,
    },
    rate: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold",
    },
    previews: {
        fontSize: 10,
        color: 'white',
        fontWeight: "bold",
    },
    customPrice: {
        flexDirection: "row",
      
    },
    customAdd: {
        marginLeft: 20
    }
})