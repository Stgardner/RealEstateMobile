import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        padding: 22, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        borderBottomWidth: 2, 
        borderColor: "#fff"
    },
    button: {
        width: 32, 
        height: 32,
        borderWidth: 1, 
        borderRadius: 16,
        justifyContent: "center", 
        alignItems: "center", 
        borderColor: "#686868"
    }
})

export default styles