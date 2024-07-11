import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Profile() {
  const handleWelcome = () => {
    router.replace("/");
  };
  return (
    <SafeAreaView className="justify-center items-center bg-[#32cd32] flex-1">
      <Text className="text-xl font-semibold text-[#ffd700] uppercase">
        Profile
      </Text>
      <TouchableOpacity
        onPress={handleWelcome}
        className="mt-3 bg-[#00ffff] py-2 px-4 rounded"
      >
        <Text className="text-[#3a1a6c] text-lg">Go to Welcome</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
