import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/core/Button";

export default function RootIndex() {
  return (
    <SafeAreaView className="h-full w-full flex justify-center items-center">
      <Stack.Screen
        options={{ title: "Welcome", headerTitleAlign: "center" }}
      />
      <Text className="uppercase font-bold text-lg text-[#ffd700]">
        Welcome to expo
      </Text>
      <Link href="/screens/signup" className="mt-5 mb-2" asChild>
        <Pressable>
          <Text className="text-[#32cd32] text-lg">Go to sign up</Text>
        </Pressable>
      </Link>
      <Button>
        <Text>Click Me</Text>
      </Button>
    </SafeAreaView>
  );
}
