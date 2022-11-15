import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert, ScrollView} from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign,MaterialCommunityIcons  } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { ListOrderContext } from "./HomeScreen";
import { TextInput } from 'react-native-paper';
import { useIsFocused } from "@react-navigation/native";

export default function CartScreen({navigation}, props) {
    const [soluong, setSoluong] = useState("1");
    const soluongs = 0;
    const route = useRoute();
    const  [linka, setlinka]= useState([]);
    const {message}= route.params ? route.params: {};
    const { arrItem } = route.params ? route.params: [];
    const [data, setData] = useState({});
    const [idProducts, setIdProducts] = useState(0)
    const [listRender, setListRender] = useState([]);
    const [rerender, setRerender] = useState(false);
    const isFocused = useIsFocused();

    var { listOrder } = useContext(ListOrderContext);
    useEffect(() => {
        setListRender(listOrder);
        var priceNow = 0;
        listOrder.forEach((e) => {
          priceNow += e.amount * e.price;
        });
        setItemTotal(priceNow.toFixed(2));
        var delivaryCharge = 10.00;
        var VAT = 2.6;
        var totalPriceNow = (priceNow + delivaryCharge + VAT).toFixed(2);
        setTotalPrice(totalPriceNow + "");
       
      }, [isFocused, rerender]);



      

      function add(index) {
        var amount = Number.parseInt(listRender[index].amount) + 1;
        listOrder[index].amount = amount + "";
        setRerender(!rerender);
      }
      function sub(index) {
        var amountNow = Number.parseInt(listRender[index].amount);
        if (amountNow == 1) {
          Alert.alert("Warning", "Do you want to delete it?", [
            {
              text: "No",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "Yes",
              onPress: () => {
                listOrder.splice(index, 1);
                setRerender(!rerender);
              },
            },
          ]);
        } else {
          var amount = Number.parseInt(listRender[index].amount) - 1;
          listOrder[index].amount = amount + "";
        //   listOrder[index].price = price + "";
          setRerender(!rerender);
        }
      }
  

//   const [prices, setPrice] = useState(0);
  const [delivaryCharge, setDelivaryCharge] = useState("10.00");
  const [VAT, setVAT] = useState("2.6");
  const [totalPrice, setTotalPrice] = useState("121.60");
  const [itemTotal, setItemTotal] = useState("109.00");

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.customListProducts}>

                    <View style={styles.customProducts}>

                        <View style={styles.containImg}>
                            <Image 
                                source={{uri: item.image}} 
                                style={styles.customImageList}
                                resizeMode= "contain"
                                />
                        </View>

                        <View style={styles.customMidList}>
                            <Text style={styles.textName}>{item.name}</Text>

                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <View style={{flexDirection: "row", marginRight: 10}}>
                                    <Text style={styles.textRate}>{item.rate}</Text>
                                    <AntDesign name="star" size={15} color="orange" style={{marginTop: 2}}/>
                                </View> 
                                    <Text style={styles.textPreviews}>({item.previews})</Text>
                            </View>
                            
                            <Text style={styles.textPrice}>${item.price}.00</Text>
                            
                        </View>

                        <View style={styles.customBtnCongtru}>
                                <TouchableOpacity style={styles.btnCongTru} onPress={() => {    
                                    add(index)
                                }}>
                                    <Text style={styles.textCongTru}>+</Text>
                                </TouchableOpacity>

                                {/* <Text style={{fontSize:30, fontWeight: "bold", color: "black"}}>{index}</Text> */}
                                <TextInput
                                    value={item.amount}
                                    style={styles.amount}
                                    editable={false}
                                    underlineColor="white"
                                />

                                <TouchableOpacity style={styles.btnCongTru} onPress={() => {
                                    sub(index);   
                                }}>
                                    <Text style={styles.textCongTru}>-</Text>
                                </TouchableOpacity>

                        </View>
                           
                    </View>

            </View>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containHeader}>

            <View style={styles.customHeader}>
                <TouchableOpacity onPress={() => { 
                    navigation.goBack();
            }}>
                    <AntDesign name="arrowleft" size={35} color="black" style={{left: 20}}/>
                </TouchableOpacity>
                    <Text style={styles.textHeader}>Checkout</Text>
                    <MaterialCommunityIcons name="message-badge-outline" size={35} color="black" style={{right: 20}}/>
            </View>
                
        </View>

        <ScrollView style={styles.containMain}>
                <FlatList
                style={styles.flatList}
                data={listRender}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                // renderItem={( {item, index} ) => {
                //     return (
                //         <View style={{flexDirection: "row"}}>
                //                 <CustomFlatList image={item.image} name={item.name} price={item.price} rate={item.rate} previews={item.previews}/>
                //                    <View style={styles.customBtnCongtru}>
                //                 <TouchableOpacity style={styles.btnCongTru} onPress={() => {
                //                             if (item.id == ( index + 1))
                //                             setSoluong(Number.parseInt(soluong)+1+"")                               
                //                 }}>
                //                     <Text style={styles.textCongTru}>+</Text>
                //                 </TouchableOpacity>

                //                 <Text style={{fontSize:30, fontWeight: "bold", color: "black"}}>{soluong}</Text>

                //                 <TouchableOpacity style={styles.btnCongTru} onPress={() => {
                                     
                //                         setSoluong(Number.parseInt(soluong)-1+"")    
                                        
                //                 }}>
                //                     <Text style={styles.textCongTru}>-</Text>
                //                 </TouchableOpacity>

                //         </View>
                //         </View>
                        
                //     )
                
                // }}
                >
                
                </FlatList>

               <View style={styles.customMidContent}>
                <Text style={styles.textOnArea}>Special Request To Us</Text>
                <View style={styles.containTextArea}>

                <View style={{flexDirection: "row",justifyContent: "center", alignItems: "center", marginLeft: 20}}>
                <MaterialCommunityIcons name="message-plus-outline" size={30} color="orange"/>
                </View>
                <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.txtArea}
                placeholder="Add your note here ....."
                >
                    
                </TextInput>

                </View>
                </View>

                <View style={styles.customPromoCode}>
                        <View style={styles.containPromoCode}>
                            <View>
                                    <Text style={styles.txtAppPromoCode}>Apply Promo Code</Text>
                                    <Text style={{ marginLeft: 20,}}>Use promo code for discounts</Text>
                            </View>
                            <View style={styles.containTextPromo}>

                            <View style={{flexDirection: "row",justifyContent: "center", alignItems: "center"}}>
                            <MaterialCommunityIcons name="message-plus-outline" size={30} color="orange"/>
                            </View>
                            <TextInput
                            multiline={true}
                            numberOfLines={10}
                            style={styles.txtPromo}
                            placeholder="Enter promo code here .."
                            >
                                
                            </TextInput>

                            </View>         
                        </View>


                </View>

                <View>
                    <View style={styles.summary}>
                        <Text>Item total</Text>
                        <Text style={styles.textPrice}>${itemTotal}</Text>
                    </View>

                    <View style={styles.summary}>
                        <Text>Delivary charge</Text>
                        <Text style={styles.textPrice}>${delivaryCharge}</Text>
                    </View>

                    <View style={styles.summary}>
                        <Text>VAT</Text>
                        <Text style={styles.textPrice}>${VAT}</Text>
                    </View>

                    <View style={styles.summary}>
                        <Text style={styles.textGrandTotal}>Grand total</Text>
                        <Text style={styles.textPrice}>${totalPrice}</Text>
                    </View>


                </View>

                <View style={{justifyContent: "center", alignItems: "center", marginTop: 70, marginBottom: 30}}>
                        <TouchableOpacity style={styles.btnPayment}>
                            <Text style={styles.textPayment}>PROCEED TO PAYMENT</Text>
                        </TouchableOpacity>
           
                </View>

        </ScrollView>
       

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFAF0"
    },
    containHeader: {
        backgroundColor: "#FFFAF0",
        marginTop: 50,
        marginBottom: 20
    },
    customHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textHeader: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    },
    containMain: {
        flex: 1,
        backgroundColor: "#DDDDDD"
    },
    flatList: {
        // flex: 1,
        padding: 6,
        flexDirection: "column",
    },
    customListProducts: {
        marginTop: 20,
        marginBottom: 15,
        justifyContent: "center",
        // flex: 1,
    },
    customProducts: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
        backgroundColor: "peachpuff",
    },
    customImageList: {
        width: 80,
        height: 80,
    },
    containImg: {
        backgroundColor: "black",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center"
    },
    textName: {
       fontSize: 20,
       fontWeight: "bold",
       color: "black"
    },
    customMidList: {    
        justifyContent: "center",
        marginRight: 60
      
    },
    textPrice: {
        fontSize: 20,
        color: "orange",
        fontWeight: "bold"
    },
    textRate: {
        fontSize: 15,
        color: "black"
    },
    textPreviews: {
        fontSize: 13,
        color: "black",
        textAlign: "center"
    },
    btnCongTru: {
        alignItems: "center",
        justifyContent: "center",
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: "white"
    },
    textCongTru: {
        fontSize: 15,
        color: "orange",
        fontWeight: "bold"
    },
    customBtnCongtru: {
        width: 50,
        backgroundColor: "#FFEC8B",
        height: 120,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10
    },
    amount: {
        width: 50,
        height: 30,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 10
    },
    textOnArea: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
        marginBottom: 20
    },
    containTextArea: {
        flexDirection: "row",
        borderColor: "orange",
        borderRadius: 20,
        borderStyle: 'solid', 
        borderWidth: 1,
        marginLeft: 20,
        width: "95%"
        // alignItems: "center"

    },
    containTextPromo: {
        flexDirection: "row",
        borderColor: "orange",
        borderRadius: 20,
        borderStyle: 'solid', 
        borderWidth: 1,
        marginLeft: 20,
        width: "100%"
        // alignItems: "center"

    },
    txtArea: {
        height: 100, 
        textAlignVertical: 'top',
        backgroundColor: "#DDDDDD",
        fontSize: 20,
        width: "65%",
        marginLeft: 15
    },
    txtPromo: {
        height: 50, 
        textAlignVertical: 'top',
        backgroundColor: "#DDDDDD",
        fontSize: 14,
        width: "100%",
        // marginLeft: 15
    },
    customMidContent: {
        // marginBottom: 30
        // justifyContent: "center",
    },
    customPromoCode: {
        marginTop: 20
    },
    containPromoCode: {
        flexDirection: "row",
    },
    txtAppPromoCode: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
    },
    textGrandTotal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    btnPayment:{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 80,
        backgroundColor: "orange",
        borderRadius: 20
    },
    textPayment: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    summary: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5,
        marginTop: 30
    }
})