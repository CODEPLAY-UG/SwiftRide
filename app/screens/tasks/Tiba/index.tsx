import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import CustomButton from "@/components/core/Button";

export default function Index() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Hold Up",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
          headerStyle: {
            // height: 100, // Set the desired height for the header
            backgroundColor: "#fdd700", // Optional: set the background color
          },
        }}
      />

      <TouchableOpacity
        onPress={() => router.push("./test")}
        className="py-2 flex  items-center"
      >
        <Text className="bg-orange-500 text-lg py-1 px-5 w-fit rounded-3xl">
          PlayGround
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("./trinity")}
        className="py-2 flex  items-center"
      >
        <Text className="bg-[#bfcc94] text-lg py-1 px-5 w-fit rounded-3xl">
          Features
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("./geoCoding")}
        className="py-2 flex  items-center"
      >
        <Text className="bg-[#f4acb7] text-lg py-1 px-5 w-fit rounded-3xl">
          Geocoding
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
