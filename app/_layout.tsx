import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { Drawer } from "expo-router/drawer";

import { store } from "./store";
import { Provider } from "react-redux";

import { useColorScheme } from "@/hooks/useColorScheme";

import { NativeWindStyleSheet } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "../utils/AuthContext";

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
              animationDuration: 1000, // Slow down the animation duration to 1000ms (1 second)
            }}
          >
            <Stack.Screen name="index" options={{}} />
            {/* <Stack.Screen name="screens/home" options={{}} /> */}
            <Stack.Screen name="screens/onBoarding" options={{}} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </AuthProvider>
    </Provider>
  );
}
