import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, BriefcaseBusiness, ChevronRight, CircleXIcon, Lock, Phone, SparklesIcon, SunMoon, UserRoundXIcon, WalletIcon, XIcon } from "lucide-react-native";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";

export default function Accountinfo() {
  function handleAccountinfo(text: string): void {}
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen options={{ title: "Account info", headerTitleAlign: "center" }} />

      <View className="   space-y-11 mt-[16px]">
        <View className="flex-row justify-between items-center">
          <View className="mx-4 space-y-5">
            <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Name</Text>
            <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">userName</Text>
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4 space-y-5">
            <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Phone number</Text>
            <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">userNumber</Text>
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4 space-y-5">
            <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Email</Text>
            <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">userEmail</Text>
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <UserRoundXIcon color="#808080" size={28} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Account deletion</Text>
            </View>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}
