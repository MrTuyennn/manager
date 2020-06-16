import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListEmployee from '../Employee/ListEmployee'
import Profile from '../Employee/Profile'
import CreatEmployee from '../Employee/CreatEmployee'

const Stack = createStackNavigator();

export default class content extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                name="ListEmployee"
                component={ListEmployee}></Stack.Screen>
                <Stack.Screen
                name="Profile"
                component={Profile}></Stack.Screen>
                <Stack.Screen
                name="CreatEmployee"
                component={CreatEmployee}></Stack.Screen>
            </Stack.Navigator>
        )
    }
}



