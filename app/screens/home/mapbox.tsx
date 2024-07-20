import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbHluOGxjeXAwM3J1Mm1wbG9wcTJnZzYzIn0.RgeMcoyjxD8bGql5tsKyrA"
);

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
      <Text>mapboxes</Text>
      <View className="h-[300px] w-[300px]">
        <Mapbox.MapView className="flex-1" />
      </View>
    </View>
  );
}
