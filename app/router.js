import * as React from 'react'
import { createStackNavigator}from '@react-navigation/stack'
import Chatbot from './Views/chatbot'
import Home from './Views/home'

const Stack = createStackNavigator();

export function Homestack(){
    return (
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='chatbot' component={Chatbot}/>
        </Stack.Navigator>
    )
}