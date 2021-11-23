import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Quizzes from "../screens/Quizzes";
import Ionicons from 'react-native-vector-icons/Ionicons';

function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (route.name === "Home") {
              iconName = "home-outline";
            }
            else if (route.name === 'Quizzes') {
              iconName = "layers-outline";
            }

            return <Ionicons name={iconName} size={size} color={color}></Ionicons>;
          },
          tabBarActiveTintColor:'#7e57c2',
          tabBarInactiveTintColor:'grey',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quizzes" component={Quizzes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
