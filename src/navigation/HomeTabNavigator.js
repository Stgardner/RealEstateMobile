import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: "#f15454",
            }}
        >
            <Tab.Screen
                name={"Explore"} 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => {
                        <Fontisto name="search" size={25} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name={"Saved"} 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => {
                        <Fontisto name="heart-o" size={25} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}


export default HomeTabNavigator
