import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View styles={styles.container}>
      <Text style={{fontSize:30,textAlign:'right',padding:5,backgroundColor:'#55aa33'}}>0</Text>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})