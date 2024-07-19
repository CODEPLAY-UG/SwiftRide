import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchComponent from "@/components/core/Search";
import { Stack } from "expo-router";
import { ProgressBar } from "react-native-paper";

export default function test() {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <View className="h-full bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Here we go",
          headerTitleAlign: "center",
        }}
      />
      <SearchComponent setIsTyping={setIsTyping} placeholder="Destination" />
      {isTyping && (
        <View className="mt-2">
          <ProgressBar
            progress={1}
            // animatedValue={8}
            indeterminate
            color="#636363"
            className="h-[1px]"
          />
        </View>
      )}
    </View>
  );
}
