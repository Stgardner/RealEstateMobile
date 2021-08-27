import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import LocationSearchScreen from '../screens/LocationSearch'
import GuestScreen from '../screens/Guests'
import HomeScreen from '../screens/Home'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator()

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"} 
                    component={HomeTabNavigator} 
                    options={{
                        headerShown: false,
                    }}
                />
            
                <Stack.Screen name={"Location Search"} 
                component={LocationSearchScreen}
                />
                <Stack.Screen name={"Guests"} 
                component={GuestScreen}
                />
                <Stack.Screen name={"Home Screen"} 
                component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
