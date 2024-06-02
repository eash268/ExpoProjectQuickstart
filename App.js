import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./src/navigation/HomeStack";
import { SearchStack } from "./src/navigation/SearchStack";
import { ProfileStack } from "./src/navigation/ProfileStack";

// get EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY from .env file
const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <SafeAreaView style={styles.container}>
          <SignedIn>
            <View style={{ flex: 1 }}>
              <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />} // Here you use the custom tab bar
              >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
              </Tab.Navigator>
            </View>
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </SafeAreaView>
      </ClerkProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
