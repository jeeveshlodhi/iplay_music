import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, } from "react-native";
import { user , hack} from '../../config.js';
import { HelperText } from 'react-native-paper';
import styles from "./loginStyle.jsx";
import globalStore from "../../functions/globalStore.jsx";
import context from "../../functions/context.jsx";

function Login({navigation}) {
    const store = globalStore();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    // const [isLogged, setIsLogged] = useState(false)

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
                store.actions({type: 'setIsLogged', payload: true})
                console.log(store.isLogged);
                navigation.push("Home")
            }
        }
    };

    return (
        <context.Provider value={store}>
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
                onPress = {()=>loginFunction(username, password)}
            >
                <Text style={styles.logText}>LOG IN</Text>
            </Pressable>
            
            </View>
        </context.Provider>
    );
}



export default Login;