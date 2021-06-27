import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import Login from "./components/login/login";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-black": require("./fonts/Poppins-Black.ttf"),
    "poppins-bold": require("./fonts/Poppins-Bold.ttf"),
    "poppins-extrabold": require("./fonts/Poppins-ExtraBold.ttf"),
    "poppins-extralight": require("./fonts/Poppins-ExtraLight.ttf"),
    "poppins-light": require("./fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("./fonts/Poppins-SemiBold.ttf"),
    "poppins-thin": require("./fonts/Poppins-Thin.ttf"),
  });
};

export default function App() {
  const [dataLoader, setDataLoader] = useState(false);
  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoader(true)}
        onError={console.warn}
      />
    );
  }
  return <Login />;
}
