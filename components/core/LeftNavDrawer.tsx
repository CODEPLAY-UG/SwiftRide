import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerNavigation } from "rn-inkpad";

export default function LeftNavDrawer() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigation />
      {/* <DrawerNavigation></DrawerNavigation> */}
    </View>
  );
}
