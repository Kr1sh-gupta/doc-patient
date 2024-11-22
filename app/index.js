import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Welcome to our app</Text>
        <Text style={{fontSize:18}}>Image</Text>
        <Text style={{fontSize:18}}>Go to Login Page</Text>
            <Link href={'/login'} asChild>
        <Button title='Login' />
      </Link>
      
      {/* Directly Profile */}
      {/* <Link href={'(drawer)/(tabs)/profile'} asChild>
        <Button title='Go to Tabs' />
      </Link> */}
   
    </View>
  )
}