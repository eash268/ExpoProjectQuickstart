import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

export const HomeScreen = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // when user is loaded, print get token
  if (isLoaded) {
    getToken().then((token) => console.log(token));
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};
