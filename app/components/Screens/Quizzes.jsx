import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Quizzes () {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "yellow",
        },
        title:{
            color:'white',
            fontSize:40,
        }
      });
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Quizzes</Text>
        </View>
      );
}

export default Quizzes