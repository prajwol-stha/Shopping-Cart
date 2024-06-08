import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartData=useSelector((state)=>state.reducer)
  // console.log(cartData)
  const[cartItems,setCartItems]=useState(0)
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return (
    <View styles={styles.container}>
      <Text style={{fontSize:30,textAlign:'right',padding:5,backgroundColor:'#55aa33'}}>Total:{cartItems}</Text>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})