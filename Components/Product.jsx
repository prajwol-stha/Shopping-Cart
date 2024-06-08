import { View, Text,Image,Button } from 'react-native'
import React from 'react'

const Product = (props) => {
    // const item={...props}
    const item=props.item
  return (
      <View style={{alignItems:'center',borderBottomColor:'white',borderBottomWidth:2,paddingBottom:30}}>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.color}</Text>
          <Text style={{fontSize:20}}>{item.price}</Text>
          <Image style={{width:100,height:100}} source={{uri:item.image}}/>
          <Button title='Add to cart' onPress={console.log(item.name)}/>
      </View>
  )
}

export default Product