import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 75,
        fontWeight: 'bold', 
        color: 'white',
        width: '70%',
        marginLeft: 25, 

    },
    button: {
        backgroundColor: '#fff', 
        width: 200,
        height: 40,
        borderRadius: 10, 
        marginLeft: 25,
        marginTop: 25,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: 20, 
        zIndex: 100,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,

    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default styles