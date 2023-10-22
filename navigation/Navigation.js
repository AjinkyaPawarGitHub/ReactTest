import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maintenance from '../screens/Maintenance';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../screens/Profile';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [isMaintenance, setIsMaintenance] = useState(false)
    return (

        <Stack.Navigator>
            {isMaintenance ? (
                <Stack.Screen
                    name='Maintenance'
                    component={Maintenance}
                    options={{ headerShown: false }} />
            )
                :

                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }} />
            }
            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }} />

        </Stack.Navigator>

    )
}

export default Navigation

const styles = StyleSheet.create({})