import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

export default function Work() {
  return (
    <View className="bg-white h-full justify-center items-center">
      <Stack.Screen
        options={{
          title: "Team-3",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className="space-y-5">
        <TouchableOpacity
          onPress={() => router.push("/screens/tasks/team3/payment")}
          className="bg-teal-300 px-4 py-2 rounded-lg border border-teal-400 items-center"
        >
          <Text className=" items-center">Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/screens/tasks/team3/ride")}
          className="bg-teal-300 px-4 py-2 rounded-lg border border-teal-400"
        >
          <Text className="">Activity-active</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
