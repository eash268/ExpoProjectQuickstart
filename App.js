import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./src/navigation/HomeStack";
import { SearchStack } from "./src/navigation/SearchStack";
import { ProfileStack } from "./src/navigation/ProfileStack";

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        </NavigationContainer>
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
