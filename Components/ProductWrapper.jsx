import { View, Text ,StyleSheet,Image,Button, ScrollView} from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'



const ProductWrapper = ({navigation}) => {
  const products=[
    {
      id:1,
      name:'Samsung',
      color:'white',
      price:30000,
      image:'https://cdn-icons-png.flaticon.com/512/0/191.png'
    },
    {
      id:2,
      name:'Iphone',
      color:'black',
      price:60000,
      image:'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      id:3,
      name:'Nokia',
      color:'green',
      price:20000,
      image:'https://cdn-icons-png.freepik.com/512/65/65680.png'
    }
  ]

  return (
    <View styles={styles.container}>
      <Header/>
          <Button title='Go to user screen' onPress={()=>navigation.navigate("User")}/>
      <ScrollView>
      {
          products.map((item)=><Product key={item.id} item={item}/>)
          }
      </ScrollView>
    </View>
  )
}

export default ProductWrapper;

const styles=StyleSheet.create({
  container:{
      flex:1,

  }
})