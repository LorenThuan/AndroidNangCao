import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign,FontAwesome,MaterialCommunityIcons,SimpleLineIcons,Entypo, Feather } from '@expo/vector-icons'; 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import { useRoute } from '@react-navigation/native'
import CartScreen from './CartScreen';

export default function BottomTabNavigator() {
  const route = useRoute();  

        const BottomTab = createBottomTabNavigator();
         return (
           <BottomTab.Navigator
            //  initialRouteName="BottomTabScreens"
             screenOptions={{
               tabBarActiveTintColor: "#fff",
               tabBarInactiveTintColor: "orange",
               tabBarActiveBackgroundColor: "black",
               tabBarInactiveBackgroundColor: "black",
               tabBarShowLabel: false,
               tabBarStyle: [
                 {
                   display: "flex",
                   height: 110
                 },
                 null,
               ],
             }}
           >
             <BottomTab.Screen
               name="test"
               component={HomeScreen}
               options={({ route }) => ({
                headerShown: false,
                 headerTitle: () => <HomeScreen id={route.params?.id} />,
                 tabBarIcon: ({ color }) => (
                   <Entypo name="home" size={28} color="orange" />
                 ),
               })}
             />
             <BottomTab.Screen
               name="test5"
               component={HomeScreen}
               options={{
                 headerShown: false,
                 // tabBarShowLabel: false,
                 // tabBarLabel: "Test",
                 // tabBarLabelStyle: { color: "#fff" },
                 tabBarIcon: ({ color }) => (
                     <Feather name="search" size={28} color="orange" />
                 ),
               }}
             />
             <BottomTab.Screen
               name="test1"
               component={HomeScreen}
               options={{
                 headerShown: false,
                 tabBarIcon: ({ color }) => (
                  <AntDesign name="hearto" size={28} color="orange" />
                 ),
               }}
             />
     
             <BottomTab.Screen
               name="test2"
               component={HomeScreen}
               options={{
                 headerShown: false,
                 tabBarIcon: ({ color }) => (
                     <SimpleLineIcons name="handbag" size={28} color="orange" />
                 ),
               }}
             />
     
             <BottomTab.Screen
               name="test3"
               component={HomeScreen}
               options={{
                 headerShown: false,
                 tabBarIcon: ({ color }) => (
                     <MaterialCommunityIcons name="account-circle-outline" size={28} color="orange" />
                 ),
               }}
             />
           </BottomTab.Navigator>
         );
  
}

const styles = StyleSheet.create({})