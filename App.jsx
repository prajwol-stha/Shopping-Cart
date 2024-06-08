import { View, Text ,StyleSheet,Image,Button, ScrollView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';


const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer styles={styles.container}>
     <Stack.Navigator>
      <Stack.Screen name='Homescreen' component={ProductWrapper} options={{ headerShown: false }}/>
      <Stack.Screen name='User' component={UserList} options={{ headerShown: true }}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
      flex:1,
  }
})