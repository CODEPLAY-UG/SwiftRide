import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function mapbox() {
  return (
    <View className="flex-1 bg-[#f08080] justify-center items-center">
      <Stack.Screen
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Text>mapbox</Text>
    </View>
  );
}
