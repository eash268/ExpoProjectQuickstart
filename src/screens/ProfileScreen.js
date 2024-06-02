import React from "react";
import { View, Text } from "react-native";
import { SignOut } from "../components/SignOut";

export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SignOut />
    </View>
  );
};