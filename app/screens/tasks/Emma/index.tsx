import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  BellIcon,
  ChevronRight,
  Hop,
  MapPin,
  Phone,
  SunMoon,
} from "lucide-react-native";
import Stack from "expo-router/build/layouts/Stack";
import SearchComponent from "@/components/core/Search";

export default function User() {
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Your route", headerTitleAlign: "center" }}
      />
      <View className="space-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="mx-6 flex-row items-center">
            <MapPin color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                Current user location
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="py-2">
        <SearchComponent placeholder="Destination" />
        {/* <SearchComponent /> */}
      </View>
      <View className="mx-8 py-4">
        <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">
          Recent destinations
        </Text>
      </View>
      <View className="px-4 py-4 justify-between items-center">
        <Hop color="#808080" size={48} />
      </View>

      <View className="mx-4 py-4 justify-between items-center">
        <Text className="text-[#242424] font-semibold text-[20px] leading-[25px] tracking-[-0.45]">
          No rides yet
        </Text>
      </View>

      <View className="mx-4 justify-between items-center">
        <Text className="text-[#242424] text-[13px]  leading-[18px] tracking-[-0.08]">
          Your recent destinations will appear here.
        </Text>
      </View>
    </View>
  );
}
