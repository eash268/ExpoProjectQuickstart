import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { HomeStack } from "./src/navigation/HomeStack";
import { SearchStack } from "./src/navigation/SearchStack";
import { ProfileStack } from "./src/navigation/ProfileStack";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === "Home") {
              icon = focused ? "home" : "home";
            } else if (route.name === "Search") {
              icon = focused ? "search1" : "search1";
            } else if (route.name === "Profile") {
              icon = focused ? "user" : "user";
            }

            return <AntDesign name={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
