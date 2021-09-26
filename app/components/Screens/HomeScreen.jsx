import React from "react";
import { StyleSheet, View, Text } from "react-native";

function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "orange",
    },
    title:{
        color:'white',
        fontSize:40,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
