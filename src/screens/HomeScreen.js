import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

export const HomeScreen = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // when user is loaded, print get token
  if (isLoaded) {
    getToken().then((token) => {
      console.log("userId", userId);
      console.log("sessionId", sessionId);
      console.log("token", token);
    });
  }

  const exampleFetch = async () => {
    const token = await getToken();
    const response = await fetch("https://<your-backend-url>/example_post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    exampleFetch();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};
