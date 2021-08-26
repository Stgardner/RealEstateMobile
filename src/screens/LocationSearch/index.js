import React, {useState} from 'react'
import {View, TextInput, FlatList, Text} from "react-native"
import styles from "./styles"
import Entypo from 'react-native-vector-icons/Entypo'

import SearchResults from "../../../assets/data/search"

const LocationSearchScreen = (props) => {

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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name ={"location-pin"} size={37} />
                        
                    </View>
                            <Text style={styles.locationText}>{item.description}</Text>
                        </View>
                )}
            />
               
        </View>
    )
}

export default LocationSearchScreen
