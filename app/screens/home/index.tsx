import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "../../store"; // Adjust the path
import { Stack } from "expo-router";

export default function Index() {
  // Retrieve the name from the store
  const name = useSelector((state: RootState) => state.userData.name);

  return (
    <View className="flex-1 justify-center items-center bg-[#32cd32]">
      {/* <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          // headerTitleAlign: "center",
        }}
      /> */}
      <Text className="text-xl font-semibold text-[#ffd700]">Here we go</Text>
    </View>
  );
}
