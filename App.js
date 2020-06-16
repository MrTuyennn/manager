import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Screen
import Splash from './src/screens/splash/splash';
import Content from './src/screens/content/content';

// khỏi tạo Stack giữa các màn hình
const Stack = createStackNavigator();
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">

        {/* Màn hình chào */}
          <Stack.Screen
          name="Splash"
          options={{
            headerShown:false
          }}
          component={Splash}></Stack.Screen>

        {/* Màn hình Content */}
          <Stack.Screen
          name="Content"
          options={{
            headerShown:false
          }}
          component={Content}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
