import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Redirect, Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootIndex() {
  const handleLocation = () => {
    router.push("/screens/tasks");
  };

  return (
    <SafeAreaView className="h-full w-full flex justify-center items-center">
      <Stack.Screen
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
        }}
      />
      <Text className="uppercase font-bold text-lg text-[#ffd700]">
        Welcome to expo
      </Text>
      <Link href="/screens/signup" className="mt-5 mb-2" asChild>
        <Pressable>
          <Text className="text-[#32cd32] text-lg">Go to sign up</Text>
        </Pressable>
      </Link>
      <TouchableOpacity
        onPress={handleLocation}
        className="mt-3 bg-[#00ffff] py-2 px-4 rounded"
      >
        <Text className="text-[#3a1a6c] text-lg">Go to tasks</Text>
      </TouchableOpacity>
      {/* <Redirect href="/screens/signup" /> */}
    </SafeAreaView>
  );
}
