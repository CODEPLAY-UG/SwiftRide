import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  BellIcon,
  ChevronRight,
  MapPin,
  Phone,
  SunMoon,
} from "lucide-react-native";
import Stack from "expo-router/build/layouts/Stack";

export default function User() {
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Your route", headerTitleAlign: "center" }}
      />
      <View className="space-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <MapPin color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Current user location
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-[#F0F0F0] mx-[5%] flex-row mb-2 items-center justify-between py-2 px-4 rounded-[24px]">
          <View className="flex-row items-center space-x-2">
            <TextInput
              className=" font-normal text-[17px] leading-[22px] tracking-[0.43px]"
              placeholder="Destination"
            />
          </View>
          <View className=""></View>
        </View>
      </View>
    </View>
  );
}
