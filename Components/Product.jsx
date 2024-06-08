import {View, Text, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart,removeFromCart} from './Redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  // const item={...props}
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);

  const [isAdded, setIsAdded] = useState(0);
  const handleAddToCart = () => {
    // console.log('Buying',item.name)
    // addToCart() does not work we need to use dispatch
    dispatch(addToCart(item));
  };

  const handleRemove=()=>{
    // console.log(item.name, 'is being removed')
    dispatch(removeFromCart(item.name));
  }
  useEffect(() => {
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(element => {
    //     // console.log(`${element.name} is in the cart.`);
    //     if (element.name === item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }
    let result=cartItems.filter((elements)=>{
        return elements.name===item.name
    });
    if(result.length){
        setIsAdded(true)
    }
    else setIsAdded(false)
  },[cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 30,
        backgroundColor:'#202020'
      }}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
      <Text style={{fontSize: 20}}>{item.color}</Text>
      <Text style={{fontSize: 20}}>{item.price}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: item.image}} />

      {isAdded ? (
        <Button title="Remove" onPress={() => handleRemove(item)} />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;
