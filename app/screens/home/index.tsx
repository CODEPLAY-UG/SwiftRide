import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "../../store"; // Adjust the path

export default function Index() {
  // Retrieve the name from the store
  const name = useSelector((state: RootState) => state.userData.name);

  return (
    <View className="h-full justify-center items-center bg-[#32cd32]">
      <Text className="text-xl font-semibold text-[#ffd700]">{name}</Text>
    </View>
  );
}
