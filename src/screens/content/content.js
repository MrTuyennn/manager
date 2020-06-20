import React, { Component } from 'react'
import {Button ,Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ListEmployee from '../Employee/ListEmployee/ListEmployee'
import Profile from '../Employee/Profile/Profile'
import CreatEmployee from '../Employee/CreatEmployee/CreatEmployee'
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();

export default class content extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                name="ListEmployee"
                options={{
                    title:'Danh sách nhân viên',
                    headerStyle:{
                        backgroundColor:'#00d2ff'
                    },
                }}
                component={ListEmployee}></Stack.Screen>
                <Stack.Screen
                name="Profile"
                options={{
                    title:'Thông Tin Nhân Viên',
                    headerStyle:{
                        backgroundColor:'#00d2ff'
                    },
                }}
                component={Profile}></Stack.Screen>
                <Stack.Screen
                name="CreatEmployee"
                options={{
                    title:'Thêm mới nhân viên',
                    headerStyle:{
                        backgroundColor:'#00d2ff'
                    },
                }}
                component={CreatEmployee}></Stack.Screen>
            </Stack.Navigator>
        )
    }
}



