import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";

export default function TaskIndex() {
  return (
    <View className="h-full justify-center gap-5 items-center">
      <Stack.Screen options={{ title: "Tasks", headerTitleAlign: "center" }} />
      <TouchableOpacity className="">
        <Link href="./Emma" className="mt-5 mb-2" asChild>
          <Pressable>
            <Text className="px-4 py-1 bg-[#3d4dfa] text-[#fbf8f8] text-lg rounded-md border-3 border-[#ffd700]">
              Emma
            </Text>
          </Pressable>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Joy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./leon")} className="">
        <Text className="px-4 py-1 bg-[#18baf9] text-[#711818] text-lg rounded-md">
          Leon
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Reagan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/screens/tasks/team3/payment")}
        className="bg-teal-300 px-4 py-2 rounded-lg border border-teal-400">
        <Text className="">Team 3</Text>
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
