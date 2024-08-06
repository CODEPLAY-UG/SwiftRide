import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Regarde from "@/components/core/Regarde";
import { router, Stack } from "expo-router";
import ChevronLeft from "@/assets/svgs/chevronLeft";

export default function GeoCoding() {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Geocoding",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.9}
              className="ml-4"
            >
              <ChevronLeft stroke={"#616161"} width={24} height={24} />
            </TouchableOpacity>
          ),
          headerStyle: {
            // height: 100, // Set the desired height for the header
            backgroundColor: "#fdd700", // Optional: set the background color
          },
        }}
      />
      <Regarde placeholder="Search here..." setIsTyping={setIsTyping} />
    </View>
  );
}
