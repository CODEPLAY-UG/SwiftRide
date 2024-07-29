import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import CustomButton from "@/components/core/Button";

export default function Index() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Hold Up",
          headerTitleAlign: "center",
        }}
      />

      <TouchableOpacity
        onPress={() => router.push("./test")}
        className="py-2 flex justify-center items-center">
        <Text className="bg-orange-500 text-lg py-1 px-5 w-fit rounded-3xl">
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("../../home")}
        className="py-2 flex justify-center items-center">
        <Text className="bg-orange-500 text-lg py-1 px-5 w-fit rounded-3xl">
          Home
        </Text>
      </TouchableOpacity>
      <View className="w-full px-2">
        <CustomButton
          textColor="text-[#ffd700]"
          title="Our blades are sharp "
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
