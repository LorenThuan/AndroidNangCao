import React, { useState, useEffect } from 'react';

import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CustomListItem = ({title, number}) => {
    return (
            <View style={{flex: 1, flexDirection: 'row', margin: 20, justifyContent: 'center', alignItems: 'center'}}>

                <View style={styles.cusTomInDex}>
                
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{number + 1}</Text>

                </View>
                <View style={styles.cusTomInput}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                                {title}
                      </Text>
                </View>
             
            <TouchableOpacity>
                <View style={{backgroundColor: 'red',width: 100, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 24}}>
                                Xoa
                        </Text>
                </View>
                
            </TouchableOpacity>
               
            </View>
          
    );
}


function FlatListDemo(props) {

    return ( 
    //     <FlatList
    //     data={props.taskLists}
    //     renderItem={ ({item, index}) => {
    //         return (
    //             <TouchableOpacity onPress={props.onDeleteTask}>
    //                     <CustomListItem number={index} title={item}></CustomListItem>
    //             </TouchableOpacity>
                    
    //         );
    //     }}
    //     style={{flex: 1, marginTop: 100}}>
    // </FlatList>

    <View style={{flexDirection: 'row', margin: 20, }}>

                <View style={styles.cusTomInDex}>
                
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{props.number + 1}</Text>

                </View>
                <View style={styles.cusTomInput}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                                {props.title}
                      </Text>
                </View>
             
            <TouchableOpacity onPress={props.onDeleteTask}>
                <View style={{backgroundColor: 'red',width: 100, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 24}}>
                                Xoa
                        </Text>
                </View>
                
            </TouchableOpacity>
               
            </View>

     );

}
export default FlatListDemo;

const styles = StyleSheet.create({
    cusTomInput: {
        borderWidth: 1,
        // paddingVertical: 10,
        // paddingHorizontal: 50,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cusTomInDex: {
        borderWidth: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        width: 50,
        height: 50,
    }
});

