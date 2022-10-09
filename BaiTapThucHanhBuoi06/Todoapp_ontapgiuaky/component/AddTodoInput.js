import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, View, ScrollView, Keyboard } from 'react-native';


// const CustomListItem = ({item, index}) => {
//     return (
//             <View style={{flexDirection: 'row', margin: 20}}>

//                 <View style={styles.cusTomInDex}>
                
//                     <Text>{index + 1}</Text>

//                 </View>
//                 <View style={styles.cusTomInput}>
//                     <Text>
//                                 {item}
//                       </Text>
//                 </View>
                     
//             <TouchableOpacity style={{backgroundColor: 'red', width: 100, height: 50, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>
//                         Xoa
//                 </Text>
//             </TouchableOpacity>
               
//             </View>
          
//     );
// }

function AddTodoInPut(props) {
    const [task, setTask] = useState('');
    // const [lists, setLists] = useState([]);

        const handlePress = () => {
            // setLists([...lists,text]);

            if (task.length === 0) {
                alert('vui long nhap cong viec');
                return false;
            }
        //    alert(task);
            props.onAddTask(task);
            setTask('');
            Keyboard.dismiss();
        }

       
    return (  
        <View style={styles.container}>
            <TextInput placeholder='Nhap cong viec' style={styles.txtNhap} onChangeText={(text)=>{setTask(text)}} value={task}></TextInput>
          
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.btnAdd}>
                    <Text>Add</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
            
            {/* <FlatList
        data={lists}
        renderItem={ ({item, index}) => {
            return (
                <CustomListItem index={index} item={item}></CustomListItem>
            );
        }}
    >
    </FlatList> */}

        </View>

        
    );

   
}

export default AddTodoInPut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        top: 50,

        // paddingTop: 50
    },
    btnAdd: {
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    txtNhap: {
        borderWidth: 2,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 100,
       
    },
    // cusTomInput: {
    //     borderWidth: 1,
    //     width: 100,
    //     height: 50,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // cusTomInDex: {
    //     borderWidth: 1,
    //     width: 50,
    //     height: 50,
    //     justifyContent: 'center', 
    //     alignItems: 'center'
    // }
});