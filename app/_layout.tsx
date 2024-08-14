import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState, useCallback } from "react";
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
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating some loading time

        // Artificially delay for two seconds to simulate a slow loading
        // image, to make the difference between the loading screen and the app more apparent
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady && fontsLoaded) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [isReady, fontsLoaded]);

  if (!isReady || !fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <GestureHandlerRootView
            style={{ flex: 1 }}
            onLayout={onLayoutRootView}
          >
            <Stack
              screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                animationDuration: 1000,
              }}
            >
              <Stack.Screen name="index" options={{}} />
              <Stack.Screen name="screens/onBoarding" options={{}} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </GestureHandlerRootView>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
