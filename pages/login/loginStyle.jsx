import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FF1168",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
    },
    logText: {
        fontSize: 20,
        fontFamily: "poppins-bold",
        color: "white",
    },
    logButton: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "white",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginTop: 15,
        padding: 10,
        color: "white",
        fontFamily: "poppins-regular",
        borderBottomWidth: 3,
        borderBottomColor: "white",
        fontSize: 20,
    },
    headerText: {
        marginTop: 30,
        fontFamily: "poppins-bold",
        color: "white",
        fontSize: 35,
        fontWeight: "500",
    },
    title: {
        fontFamily: "poppins-bold",
        fontSize: 18,
        color: "white",
    },
    });
    
export default styles;