import React, { useCallback, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { StyleSheet, Pressable, Text } from "react-native";
import GlobalColors from "../styles/colors";

WebBrowser.maybeCompleteAuthSession();

export const SignInWithOauth = ({ text, strategy }) => {
  const { startOAuthFlow } = useOAuth({ strategy: strategy });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signUp } = await startOAuthFlow();

      if (createdSessionId) {
        console.log(createdSessionId);
        setActive({ session: createdSessionId });
      } else {
        console.log("Failed to sign in or sign up.");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalColors.lightgrey,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    marginBottom: 12,
  },
});
