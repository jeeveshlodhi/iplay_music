import React from "react";
import { Text, View, Image} from "react-native";
import styles from "./musicSliderStyle";
import { FlatList } from "react-native-gesture-handler";
import { songs } from "../../config";

data = []
for(let i=0;i<songs.length;i++){
  data.push({
    key : songs[i]["thumbnail"],
  })
}

function Slide({ data }) {
    console.log(data)

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5
        }}
      >
        <Image
          source={{uri :data}}
          style = {{width: 150, height: 150, borderRadius: 10 }}
        ></Image>
      </View>
    );
}

function MusicSlider() {
    console.log(data)
    return(
        <View style = {data}>
            <Text style = {styles.heading}>Latest Songs</Text>
            <FlatList
                data = {data}
                renderItem = {(item) => {
                    console.log(item)
                    return <Slide data={item.item["key"]} />
                }}
                horizontal
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

export default MusicSlider;