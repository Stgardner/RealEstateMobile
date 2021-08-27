import React, {useState} from 'react'
import {View, TextInput, FlatList, Text, Pressable} from "react-native"
import styles from "./styles"
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import SearchResults from "../../../assets/data/search"

const LocationSearchScreen = (props) => {
    const navigation = useNavigation()

    const [inputText, setInputText] = useState(initialState= '')
    return (
        <View style={styles.container}>
            {/*input component*/}
            <TextInput 
                style={styles.textInput}
                placeholder="Where are you traveling to?"
                value={inputText}
                onChangeText={setInputText}
            />

            {/*listofdestinations*/}
            <FlatList 
                data={SearchResults}
                renderItem={({item}) => (
                    <Pressable 
                        onPress={() => navigation.navigate('Guests')}
                        style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name ={"location-pin"} size={37} />
                        
                    </View>
                            <Text style={styles.locationText}>{item.description}</Text>
                        </Pressable>
                )}
            />
               
        </View>
    )
}

export default LocationSearchScreen
