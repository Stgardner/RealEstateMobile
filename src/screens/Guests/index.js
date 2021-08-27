import React, {useState} from 'react'
import {View, Text, Pressable } from "react-native"
import styles from "./styles"


const GuestScreen = props => {

    const [adults, setAdults] = useState(initialState= 0)
    const [children, setChildren] = useState(initialState=0)
    const [infants, setInfants] = useState(initialState=0)
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: "bold"}}>Adults</Text>
                    <Text style={{color: "#8d8d8d"}}>Ages 13 or above</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>

                <Pressable
                    onPress={() => setAdults(Math.max(value=0, adults - 1))}
                    style={styles.button}
                >
                    <Text style={{fontSize: 22, color: "#5d5d5d"}}>-</Text>
                </Pressable>
                    <Text style={{marginHorizontal: 22, fontSize: 18}}>{adults}</Text>
                    <Pressable
                        onPress={() => setAdults(value=adults+1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: "#5d5d5d"}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: "bold"}}>Children</Text>
                    <Text style={{color: "#8d8d8d"}}>Ages 2 - 12</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>

                <Pressable
                    onPress={() => setChildren(Math.max(value=0, children - 1))}
                    style={styles.button}
                >
                    <Text style={{fontSize: 22, color: "#5d5d5d"}}>-</Text>
                </Pressable>
                    <Text style={{marginHorizontal: 22, fontSize: 18}}>{children}</Text>
                    <Pressable
                        onPress={() => setChildren(value=children+1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: "#5d5d5d"}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: "bold"}}>Infants</Text>
                    <Text style={{color: "#8d8d8d"}}>0 - 2 years</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>

                <Pressable
                    onPress={() => setInfants(Math.max(value=0, infants - 1))}
                    style={styles.button}
                >
                    <Text style={{fontSize: 22, color: "#5d5d5d"}}>-</Text>
                </Pressable>
                    <Text style={{marginHorizontal: 22, fontSize: 18}}>{infants}</Text>
                    <Pressable
                        onPress={() => setInfants(value=infants+1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: "#5d5d5d"}}>+</Text>
                    </Pressable>
                </View>
            </View>

        </View>
        </View>
    )
}


export default GuestScreen
