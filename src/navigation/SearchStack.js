import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchScreen } from "../screens/SearchScreen";

const Stack = createStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search Screen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
