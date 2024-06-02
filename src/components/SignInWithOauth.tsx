import React, { useCallback, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import { StyleSheet, Button, Pressable, Text } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export const SignInWithOauth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { user } = useUser();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signUp } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        alert(user.publicMetadata); // Set the user info
      } else {
        console.log("Failed to sign in or sign up.");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>Sign in with Google</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
