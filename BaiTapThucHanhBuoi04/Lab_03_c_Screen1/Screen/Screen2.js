import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

function Screen2({ navigation }) {
    const title = "Điện Thoại Vsmart Joy 3 \nHàng chính hãng"
    var blue = require('../assets/vsmart_live_xanh_1.png');
    var red = require('../assets/vs_red_a_3.png');
    var bac = require('../assets/vs_bac_1.png');
    var black = require('../assets/vsmart_black_star_1.png');
    var image = { blue, red, bac, black };
    var [link, setLink] = useState(image.blue);
    var [titleColor, setTitleColor] = useState("");
    var [color, setColor] = useState("");
    var [provide, setProvide] = useState("");
    var [provider, setProvider] = useState("");
    var [cost, setCost] = useState("");

    return (
        <View style={styles.container}>

                <View style={styles.containHeader}>
                    <Image source={link} style={{width: 119, height: 126}}></Image>
                    <View style={{flexDirection: 'column', marginLeft: 15}}>
                    <Text style={{top: 10, fontFamily: 'Roboto', fontWeight: '400', fontSize: 15, lineHeight: 17.58}}>{title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 15, marginTop: 10}}>{titleColor} </Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>{color}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15}}>{provide} </Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{provider} </Text>
                    </View>
                    <Text style={{fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, lineHeight: 21.09, marginTop: 10}}>{cost}</Text>
                    </View>
                    
                </View>

                <View style={styles.containMid}>

                        <Text style={{top: 5, fontFamily: 'Roboto', fontWeight: '400', fontSize: 18, lineHeight: 21.09}}>Chọn một màu bên dưới:</Text>

                        <View style={styles.containMidSquare}>

                                <TouchableOpacity onPress={onPress1}>
                                    <View style={styles.square}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPress2}>
                                    <View style={styles.square1}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPress3}>
                                    <View style={styles.square2}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPress4}>
                                    <View style={styles.square3}>

                                    </View>
                                </TouchableOpacity>

                        </View>
                        
                       
                        <TouchableOpacity onPress={() => navigation.navigate('Home', { message: link })} style={{flex: 0.8, backgroundColor: '#1952E2', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Roboto', fontWeight: '700', fontSize: 20, lineHeight: 23.44, color: '#F9F2F2'}}>XONG</Text>
                        </TouchableOpacity>
                        
                      
                </View>
        </View>
    );

    function onPress1() {
        return (
            setLink(image.bac),
            setTitleColor("Màu:"),
            setColor("bạc"),
            setProvide("Cung cấp bởi"),
            setProvider("Tiki Tradding"),
            setCost("1.790.000 đ")
        );
       
    }
    function onPress2() {
        return (
            setLink(image.red),
            setTitleColor("Màu:"),
            setColor("đỏ"),
            setProvide("Cung cấp bởi"),
            setProvider("Tiki Tradding"),
            setCost("1.790.000 đ")
        );
    }
    function onPress3() {
        return (
            setLink(image.black),
            setTitleColor("Màu:"),
            setColor("đen"),
            setProvide("Cung cấp bởi"),
            setProvider("Tiki Tradding"),
            setCost("1.790.000 đ")
        );
    }
    function onPress4() {
        return (
            setLink(image.blue),
            setTitleColor("Màu:"),
            setColor("xanh"),
            setProvide("Cung cấp bởi"),
            setProvider("Tiki Tradding"),
            setCost("1.790.000 đ")
        );
    }
}

export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    containHeader: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 70,

    }, 
    containMid: {
        flex: 3,
        backgroundColor: '#C4C4C4',
    },
    containMidSquare: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    square: {
        width: 85,
        height: 80,
        borderStyle: 'solid', 
        borderWidth: 1,
        backgroundColor: '#C5F1FB',
        margin: 5
    },
    square1: {
        width: 85,
        height: 80,
        borderStyle: 'solid', 
        borderWidth: 1,
        backgroundColor: '#F30D0D',
        margin: 5
    },
    square2: {
        width: 85,
        height: 80,
        borderStyle: 'solid', 
        borderWidth: 1,
        backgroundColor: '#000000',
        margin: 5
    },
    square3: {
        width: 85,
        height: 80,
        borderStyle: 'solid', 
        borderWidth: 1,
        backgroundColor: '#234896',
        margin: 5
    },
});