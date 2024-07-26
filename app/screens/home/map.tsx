import { View, Text } from "react-native";
import React from "react";
import Map from "@/components/core/Map";
import { Stack } from "expo-router";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbHluOGxjeXAwM3J1Mm1wbG9wcTJnZzYzIn0.RgeMcoyjxD8bGql5tsKyrA"
);

export default function map() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Map />
    </View>
  );
}
