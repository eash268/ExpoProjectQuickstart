import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { SignInWithOauth } from "../components/SignInWithOauth";

const LogoImage = require("../../assets/images/icon.png");

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.appName}>Expo Project Quickstart</Text>
        <Text style={styles.appDescription}>
          A template for your next great React Native app
        </Text>
      </View>
      <View>
        <SignInWithOauth text="Sign in with Google" strategy="oauth_google" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 50,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  appName: {
    fontSize: 44,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  appDescription: {
    fontSize: 24,
    marginTop: 18,
    textAlign: "center",
  },
});
