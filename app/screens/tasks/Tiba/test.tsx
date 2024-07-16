import { View, Text } from "react-native";
import React from "react";
import SearchComponent from "@/components/core/Search";
import { Stack } from "expo-router";

export default function test() {
  return (
    <View className="h-full bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Here we go",
          headerTitleAlign: "center",
        }}
      />
      <SearchComponent placeholder="Going somewhere?" />
    </View>
  );
}
