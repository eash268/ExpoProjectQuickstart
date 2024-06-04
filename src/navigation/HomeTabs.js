import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home Tab") {
            icon = focused ? "home" : "home";
          } else if (route.name === "Search Tab") {
            icon = focused ? "search1" : "search1";
          } else if (route.name === "Profile Tab") {
            icon = focused ? "user" : "user";
          }

          return <AntDesign name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home Tab" component={HomeScreen} />
      <Tab.Screen name="Search Tab" component={SearchScreen} />
      <Tab.Screen name="Profile Tab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
