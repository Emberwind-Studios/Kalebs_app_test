import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

function SliderCard({ imageUrl }) {
  const styles = StyleSheet.create({
    container: {
      width: 370,
      height: 200,
      marginTop: 20,
      marginLeft: 10,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 15,
    },
    image: {
      height: "100%",
      width: "100%",
      borderRadius: 5,
    },
    touchStyle: {
      borderRadius: 5,
    },
    title:{
      textAlign:'left',
      fontSize:22,
      marginTop:'10%'
    }
  });
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchStyle}
        onPress={() => {
          alert("hello");
        }}
      >
        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
      </TouchableHighlight>
    </View>
  );
}

export default SliderCard;
