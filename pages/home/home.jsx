import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "../../components/Header/header";
import styles from "../../pages/home/homeStyle"
import context from "../../functions/context"
import MusicSlider from "../../components/MusicSlider/musicSlider";



function Home() {
    return (
        <context.Provider>
            <Header/>
            <ScrollView style={{padding:10}}>
              <MusicSlider/>
              <MusicSlider/>
              <MusicSlider/>
              <MusicSlider/>
            </ScrollView>
        </context.Provider>
    );
}
  
export default Home;