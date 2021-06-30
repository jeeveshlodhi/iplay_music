import React from "react";
import { Text, View, Image, Pressable, } from "react-native";
import styles from "./headerStyle";

function Header() {
    return(
        <View style = {styles.container}>
            <View style={{ marginTop: 30 }}></View>
            <View style={styles.header}>
                <Pressable><Text style={styles.backArrow}>{"<"}</Text></Pressable>
                <Text style = {styles.heading}>     Hi  Jeevesh</Text>
                <Image source={require("../../assets/logo.png")} style={styles.userImg} />
            </View>
        </View>
    );
}

export default Header;