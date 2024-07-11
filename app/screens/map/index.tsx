import { View, Image, Text, TextInput } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";

export default function MapIndex() {
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full w-full">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-[#F0F0F0] mx-[5%] flex-row items-center justify-between py-2 px-4 rounded-[24px]">
        <View className="flex-row items-center space-x-2">
          <Image
            className="w-[20px] h-[20px]"
            source={require("../../../assets/images/search.png")}
          />
          <TextInput
            className="font-normal text-[17px] leading-[22px] tracking-[0.43px] px-2"
            placeholder="Going somewhere?.."
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View className="">
          <Image
            className="w-[20px] h-[20px]"
            source={require("../../../assets/images/mic.png")}
          />
        </View>
      </View>
      <View>
        <MapView />
      </View>
    </SafeAreaView>
  );
}
