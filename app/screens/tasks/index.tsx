import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

export default function TaskIndex() {
  return (
    <View className="h-full justify-center gap-5 items-center">
      <Stack.Screen options={{ title: "Tasks", headerTitleAlign: "center" }} />
      <TouchableOpacity onPress={() => router.push("/screens/profileManagement")} className="">
        <Text className="bg-[#0754ba] text-[#ffd700] text-xl px-5 py-1 rounded-md border-2 border-[#ffd700]">
          Emma
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Joy</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Leon</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Reagan</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Scout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./Tiba")} className="">
        <Text className="bg-[#32cd32] text-[#ffd700] text-xl px-5 py-1 rounded-md border-2 border-[#ffd700]">
          Tiba
        </Text>
      </TouchableOpacity>
    </View>
  );
}
