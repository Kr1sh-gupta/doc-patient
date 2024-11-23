import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { Feather, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function _layout() {
  return (
   <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />}}>
     <Tabs.Screen name='home' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="home" size={24} color={color} />
      ),
      tabBarLabel: 'Home',
      headerTitle: 'Home'
    }} />
    <Tabs.Screen name='consult' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="camera" size={24} color={color} />
      ),
      tabBarLabel: 'Consult',
      headerTitle: 'Consult'
    }} />
    <Tabs.Screen name='profile' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="user" size={24} color={color} />
      ),
      tabBarLabel: 'Profile',
      headerTitle: 'Profile'
    }} />
   </Tabs>
  )
}