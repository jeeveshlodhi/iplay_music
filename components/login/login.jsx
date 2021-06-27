import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, } from "react-native";
import { user , hack} from '../../config.js';
import { HelperText } from 'react-native-paper';
  
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [isLogged, setIsLogged] = useState(false)

    const loginFunction = (username, password) => {
        console.log(username,password);
        if(username == ""){
            setErrorUsername(true)
        }
        else{
            setErrorUsername(false)
        }
        if(password == ""){
            setErrorPassword(true)
        }
        else{
            setErrorPassword(false)
        }
        for(let i=0;i<user.id.length;i++){
            if(user.id[i]['email'] == username && user.id[i]['password']==password){
                setIsLogged(true);
                console.log(isLogged);
            }
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.headerText}>Log In</Text>
        <View style={{ marginTop: 150 }}></View>
        <Text style={styles.title}>E-mail</Text>
        <View>
            <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your E-mail"
            placeholderTextColor="white"
            />
            <HelperText type="error" visible={errorUsername} style={{color: "white", fontSize: 15}}>
                Email address is invalid!
            </HelperText>
        </View>
        <View style={{ marginTop: 30 }}></View>
        <Text style={styles.title}>Password</Text>
        <View>
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor="white"
            />
            <HelperText type="error" visible={errorPassword} style={{color: "white", fontSize: 15}}>
                Password is invalid!
            </HelperText>
        </View>
        <View style={{ marginTop: 50 }}></View>
        <Pressable
            style={styles.logButton}
            onPress={() => loginFunction(username, password)}
        >
            <Text style={styles.logText}>LOG IN</Text>
        </Pressable>
        </View>
    );
}

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
