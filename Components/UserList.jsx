import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './Redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);
  
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <View style={styles.container}>
      {
        // userList.length ?
        //   userList.map((item, index) => (
        //     <Text key={index}>{item.id}</Text> // Use the index as the key
        //   )) : null
        // console.log(userList[0].users[0].firstName)
      }

      {/* <Text>Hello {userList[0].users[0].firstName }</Text> */}
      {
         userList.length > 0 && userList[0].users.length > 0 ?
         userList[0].users.map((user, index) => (
           <View key={index}>
             <Text style={{color:'black'}}>{user.firstName}</Text>             
           </View>
         )) : null
      }
    </View>
  );
}

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
