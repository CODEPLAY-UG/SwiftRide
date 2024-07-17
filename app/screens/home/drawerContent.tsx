import { View, Text, ScrollView, ScrollViewProps } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export default function DrawerContent(
  props: React.JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>
) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="">
        <Text>drawerContent</Text>
      </View>
    </DrawerContentScrollView>
  );
}
