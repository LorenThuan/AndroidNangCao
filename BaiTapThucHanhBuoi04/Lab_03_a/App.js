import { StyleSheet, Text, View,Image, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
    return ( 
   
    <View style = { styles.container } >


        <View style={styles.header}>
            
            <View style={styles.contenttop}>

              
                <Image source={require('./assets/book.png')} style={{width: 104, height: 127}}/>
                
                
                <View style={styles.contenttop1}>

                <View style={styles.textrightimg}>

                <Text style={styles.texttopright}>
                    Nguyên hàm tích phân và ứng dụng
                </Text>

                <Text style={styles.texttopright1}>
                    Cung cấp bởi Tiki Trading
                </Text>

               

                <Text style={styles.texttopright2}>
                        141.800 đ
                </Text>
                
                <Text style={styles.texttopright3}>
                        141.800 đ
                </Text>

              
               

                <View style={styles.contentbottom}>

                <TouchableOpacity style={{backgroundColor: '#C4C4C4', width: 25}}>
                    <Text style={{textAlign: 'center'}}>-</Text>
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', right: 15}}>1</Text>
                
                <TouchableOpacity style={{backgroundColor: '#C4C4C4', width: 25, right: 30}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>+</Text>
                </TouchableOpacity>

                <Text style={{color: '#134FEC', 
                fontFamily: 'Roboto', fontWeight: '700', fontSize: 12,lineHeight: 14.06, right: 20}}>Mua sau</Text>

                </View>
                </View>
              

                </View>
                
                
              

            </View>

            <View style={styles.contenttop2}>
                <Text style={{  fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14.06,}}>Mã giảm giá đã lưu</Text>
                <Text style={{right: 55, color: '#134FEC',fontWeight: 'bold', fontSize: 12,}}>Xem tại đây</Text>
            </View>

            <View style={styles.contenttop3}>
            <View style={styles.contenttop3item}>
                <View>
                <Text style={{backgroundColor:'#F2DD1B', paddingLeft: 45}}>
                </Text>
                </View>
            <Text style={{fontWeight: 'bold', left: 16}}>Mã giảm giá</Text>
            </View>
                    <Button title='Áp dụng'></Button>
           
        </View>

        </View>

       
       <View style={styles.mid}>

        <View style={styles.contentMid}>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{fontSize: 12, color: '#134FEC'}}>Nhập tại đây?</Text>
        </View>
        
        <View style={styles.contentMidBot}>
                <Text style={{fontWeight:'bold'}}>
                    Tạm tính
                </Text>
                <Text style={styles.texttopright2}>141.800 đ</Text>
        </View>


       </View>

        <View style={styles.contentBot}>
                <View style={styles.contentBot1}>
                    <Text style={{color: '#808080'}}>Thành tiền</Text>
                    <Text style={styles.textBot}>141.800 đ</Text>
                </View>
                <View style={styles.contentBot2}>
                    <TouchableOpacity style={styles.contentBot3}>
                        <Text style={styles.textBot1}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
        </View>

        </View>
      


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'space-between',
        left: 13,
    },
    contenttop: {

        flexDirection: 'row',

    },
    contentbottom: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    contenttop1: {
        flex: 1,
        alignContent: 'center'
    },
    texttopright: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14.06,
        textAlign: 'center',
    },
    texttopright1: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14.06,  
        left: 17,
    },
    texttopright2: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.09,
        color: '#EE0D0D',
        left: 17,
    },
    texttopright3: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 21.09,
        color: '#808080',
        textDecorationLine: 'line-through',
        left: 17,
    },
    textrightimg: {
        flex: 1,
        justifyContent: 'space-between'
    },
    contenttop2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        right: 40,
        top: 20,
    },
    contenttop3: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 15,
    },
    contenttop3item: {
        flexDirection: 'row',
        width: 110 * 2,
        height: 60,
        borderStyle: 'solid',
        borderRadius: 1,
        borderColor: '#808080',
        borderWidth: 1,
        alignItems: 'center',
        padding: 18
    },
    mid: {
        flex: 0.8,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#C4C4C4',
    },
    contentMid: {
        flex:0.2,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    contentMidBot: {
        flex: 0.2,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15,
    }, 
    contentBot: {
        flex: 0.3,

    },
    contentBot1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    textBot: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 21.09,
        color: '#EE0D0D',
    },
    contentBot2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E53935',
        justifyContent: 'center',
    },
    contentBot3: {
        justifyContent: 'center',
        backgroundColor: '#E53935',
        alignItems:'center',
    },
    textBot1: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF',
    },

});