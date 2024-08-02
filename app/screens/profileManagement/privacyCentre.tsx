import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, Lock, MapPinIcon, Phone, RadioIcon, ShapesIcon, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";

export default function Privacy() {
  function handlePrivacy(text: string): void {}
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen options={{ headerShown: true, title: "Privacy centre", headerTitleAlign: "center" }} />
      <View className="space-y-8 mt-[12px]">
        <TouchableOpacity onPress={() => router.push("./dataTracking")} className="">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <ShapesIcon color="#808080" size={24} />
              <View className="mx-4">
                <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Data tracking</Text>
                <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Discover the types of data we collect</Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./deviceLocation")} className="">
          <View className="flex-row justify-between items-center ">
            <View className="flex-row items-center">
              <MapPinIcon color="#808080" size={24} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Device location</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Check if we can access your location</Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./liveLocation")} className="">
          <View className="flex-row justify-between items-center ">
            <View className="flex-row items-center">
              <RadioIcon color="#808080" size={24} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Live location</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">How we share your location in real-time{"\n"}withothers</Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
