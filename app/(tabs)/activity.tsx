import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "../store"; // Adjust the path
import { Stack } from "expo-router";

export default function Activity() {
  // Retrieve the name from the store
  const userData = useSelector((state: RootState) => state.userData);
  return (
    <SafeAreaView className="justify-center items-center bg-[#32cd32] h-full">
      <Stack.Screen
        options={{
          
        }}
      />
      <Text className="text-xl font-semibold text-[#ffd700] uppercase">
        Activity
      </Text>
      <Text className="text-xl font-semibold text-[#ffd700]">
        Welcome {userData.name}
      </Text>
      <Text className="text-xl font-semibold text-[#ffd700] mt-2">
        Your Phone Number is: +256 {userData.phoneNumber}
      </Text>
    </SafeAreaView>
  );
}
