import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MenuContent from "@/components/core/MenuContent";
import React from "react";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => (
          <MenuContent
            {...props.state}
            {...props.navigation}
            {...props.descriptors}
          />
        )}
      />
    </GestureHandlerRootView>
  );
}
