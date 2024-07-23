import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

export default function TaskIndex() {
  return (
    <View className="h-full justify-center gap-5 items-center">
      <Stack.Screen options={{ title: "Tasks", headerTitleAlign: "center" }} />
      <TouchableOpacity className="">
        <Text>Emma</Text>
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
      <TouchableOpacity
        onPress={() => router.push("./Ray/safety")}
        className=""
      >
        <Text>Ray</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Scott</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./Tiba")} className="">
        <Text className="bg-[#32cd32] text-[#ffd700] text-xl px-5 py-1 rounded-md border-2 border-[#ffd700]">
          Tiba
        </Text>
      </TouchableOpacity>
    </View>
  );
}
