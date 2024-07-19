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
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView>
          <Stack>
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="screens/home"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="screens/signup"
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="screens/tasks" options={{ headerShown: false }} /> */}
            <Stack.Screen name="+not-found" />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}
