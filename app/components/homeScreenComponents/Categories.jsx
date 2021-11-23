import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Categories() {
  const styles = StyleSheet.create({
    container: {
      width: "95%",
      height: 150,
      marginTop:'5%',
      flexDirection: "row",
      justifyContent: "center",
    },
    containerTwo: {
      width: "95%",
      height: 100,
      marginTop: -40,
      flexDirection: "row",
      justifyContent: "center",
    },
    categoryBox: {
      width: 100,
      height: 100,
      borderRadius: 5,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 4,
      elevation: 2,
    },
    icon:{
        color:'#7e57c2',
        fontSize:40,
    },
    title:{
      textAlign:'left',
      fontSize:22,
      marginTop:'10%'
    }
  });
  return (
    <>
    <Text style={styles.title}>Categories</Text>
      <View style={styles.container}>
        <View style={styles.categoryBox}>
          <Ionicons
            name={"game-controller-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
        </View>
        <View style={styles.categoryBox}>
          <Ionicons
            name={"videocam-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
        </View> 
        <View style={styles.categoryBox}>
          <Ionicons
            name={"game-controller-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
        </View>
      </View>

      <View style={styles.containerTwo}>
        <View style={styles.categoryBox}>
          <Ionicons
            name={"pizza-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
          <Text>Food</Text>
        </View>
        <View style={styles.categoryBox}>
          <Ionicons
            name={"barbell-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
        </View>
        <View style={styles.categoryBox}>
          <Ionicons
            name={"barbell-outline"}
            size={styles.icon.fontSize}
            color={styles.icon.color}
          ></Ionicons>
        </View>
      </View>
      
     
    </>
  );
}

export default Categories;
