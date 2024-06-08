import { View, Text,Image,Button } from 'react-native'
import React from 'react'
import { addToCart } from './Redux/action'
import { useDispatch } from 'react-redux'

const Product = (props) => {
    // const item={...props}
    const item=props.item
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        console.warn('Buying',item.name)
        // addToCart() does not work we need to use dispatch
        dispatch(addToCart(item))
    }

    const handleRemoveCart=()=>{

    }

  return (
      <View style={{alignItems:'center',borderBottomColor:'white',borderBottomWidth:2,paddingBottom:30}}>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.color}</Text>
          <Text style={{fontSize:20}}>{item.price}</Text>
          <Image style={{width:100,height:100}} source={{uri:item.image}}/>
          <Button title='Add to cart' onPress={()=>handleAddToCart(item)}/>
      </View>
  )
}

export default Product