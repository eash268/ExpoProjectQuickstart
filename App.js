import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SignInWithOauth } from "./src/components/SignInWithOauth";
import { SignOut } from "./src/components/SignOut";

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = ""

export default function App() {
  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <SignOut />
        </SignedIn>
        <SignedOut>
          <SignInWithOauth />
        </SignedOut>
      </SafeAreaView>
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