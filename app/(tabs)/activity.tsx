import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "../store"; // Adjust the path

export default function Activity() {
  // Retrieve the name from the store
  const name = useSelector((state: RootState) => state.userData.name);
  return (
    <SafeAreaView className="justify-center items-center bg-[#32cd32] h-full">
      <Text className="text-xl font-semibold text-[#ffd700] uppercase">
        Activity
      </Text>
      <Text className="text-xl font-semibold text-[#ffd700]">{name}</Text>
    </SafeAreaView>
  );
}
