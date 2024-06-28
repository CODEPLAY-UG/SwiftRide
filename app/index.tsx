import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootIndex() {
  return (
    <SafeAreaView className="h-full w-full flex justify-center items-center">
      <Stack.Screen
        options={{ title: "Welcome", headerTitleAlign: "center" }}
      />
      <Text className="uppercase font-bold text-lg text-[#ffd700]">
        Welcome to expo
      </Text>
      <Link href="/screens/signup" className="mt-5" asChild>
        <Pressable className="">
          <Text className="text-[#32cd32] text-lg">Go to sign up</Text>
        </Pressable>
      </Link>
      <Link href="/screens/map" className="mt-5" asChild>
        <Pressable className="">
          <Text className="text-[#3a1a6c] text-lg">Go to map</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
