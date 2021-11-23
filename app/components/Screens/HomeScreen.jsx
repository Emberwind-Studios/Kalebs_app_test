import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Categories from "../homeScreenComponents/Categories";
import SliderCard from "../homeScreenComponents/SliderCard";

function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      height: "100%",
    },
    title:{
      fontSize:22,
      textAlign:'center',
      marginTop:'10%'
    },
    containerScrollView:{
      backgroundColor:'white', 
      height:'100%',
    },
    horizontalScrollView: {
      width: "100%",
    },
  });

  return (
    <ScrollView style={styles.containerScrollView}>
      <Text style={styles.title}>Featured Quizzes</Text>
      <View style={styles.container}>
        <ScrollView
          style={styles.horizontalScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <SliderCard
            imageUrl={"https://cdn.wallpapersafari.com/77/12/4iOEP6.jpg"}
          ></SliderCard>
          <SliderCard
            imageUrl={
              "https://static.wikia.nocookie.net/wowwiki/images/1/10/Earthwarder.png/revision/latest/top-crop/width/360/height/450?cb=20140503155011"
            }
          ></SliderCard>
          <SliderCard
            imageUrl={
              "https://s.yimg.com/uu/api/res/1.2/BocMVdWbohlQQlVkcP451Q--~B/aD0zNTA7dz01ODA7YXBwaWQ9eXRhY2h5b24-/https://www.blogcdn.com/wow.joystiq.com/media/2011/02/illidan.jpg"
            }
          ></SliderCard>
        </ScrollView>
        <Categories></Categories>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
