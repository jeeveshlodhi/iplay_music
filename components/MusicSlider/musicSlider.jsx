import React from "react";
import { Text, View, Image, ImageComponent} from "react-native";
import styles from "./musicSliderStyle";
import { FlatList } from "react-native-gesture-handler";
import { songs } from "../../config";

data = []
for(let i=0;i<songs.length;i++){
  data.push({
    key : i.toString(),
  })
}

console.log(data)

function Slide({ data }) {
    let imgName = "../../assets/thumbnail/" + songs[data]["thumbnail"];
    console.log(imgName)
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5
        }}
      >
        <Image
          source={require("../../assets/thumbnail/IsQadar.jpg")  }
          style = {{width: 150, height: 150, borderRadius: 10 }}
        ></Image>
      </View>
    );
}

function MusicSlider() {
    return(
        <View style = {data}>
            <Text style = {styles.heading}>Latest Songs</Text>
            <FlatList
                data = {data}
                renderItem = {(item) => {
                    return <Slide data={item.index} />
                }}
                horizontal
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

export default MusicSlider;