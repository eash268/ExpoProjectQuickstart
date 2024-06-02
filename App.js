import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Main } from "./main";

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Main />
      </SignedIn>
      <SignedOut>
        <SafeAreaView style={styles.container}>
          <LoginScreen />
        </SafeAreaView>
      </SignedOut>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
