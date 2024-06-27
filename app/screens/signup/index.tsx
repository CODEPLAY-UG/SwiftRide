import { View, Text, TextInput } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpIndex() {
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Sign Up", headerTitleAlign: "center" }}
      />
      <Text className="text-[12px] mt-1 font-normal leading-[16px]">
        Enter the name you would like to go by
      </Text>
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        // style={{ height: 40 }}
        placeholder="Name"
        // onChangeText={(newText) => setText(newText)}
        // defaultValue={text}
      />
    </View>
  );
}
