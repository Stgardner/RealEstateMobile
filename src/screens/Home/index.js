import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from "react-native-vector-icons/Fontisto"

const HomeScreen = (props) => { 
    return (
        <View>
           
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn( data= 'Search btn clicked')}
                >
            <Fontisto name="search" size={25} color={"red"} />
            <Text style={styles.searchButtonText}>Where would you like to stay?</Text>

            </Pressable>
            
            
            <ImageBackground 
                source={require('../../../assets/images/home-bg.jpg')} 
                style={styles.image}
            >
            <Text style={styles.title}>
                Journey Home
            </Text>
            <Pressable
                style={styles.button}
                onPress={() => console.warn( data= 'Explore btn clicked')}
                >
            <Text>Explore Nearby</Text>

            </Pressable>

            </ImageBackground>
        </View>
    )
}

export default HomeScreen