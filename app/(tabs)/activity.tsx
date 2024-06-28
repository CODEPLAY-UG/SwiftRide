import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Activity() {
  return (
    <SafeAreaView className="justify-center items-center bg-[#ffd700] flex-1">
      <Text className="text-xl font-semibold text-[#32cd32] uppercase">
        Activity
      </Text>
    </SafeAreaView>
  );
}
