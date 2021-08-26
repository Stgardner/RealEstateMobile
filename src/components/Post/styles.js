import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    imageMain: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 10,
    },
    bedAndBedroom: {
        marginVertical: 10, 
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18, 
        lineHeight: 26
    },
    prices: {
        fontSize: 18,
        marginVertical: 10

    }, 
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: "line-through"
        
    }, 
    price: {
        fontWeight: 'bold',

    },
    total: {
        color: '#5b5b5b',
        textDecorationLine: "underline"
    }


})

export default styles