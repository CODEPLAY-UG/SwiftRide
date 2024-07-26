import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, StatusBar } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, BriefcaseBusiness, ChevronRight, CircleXIcon, Lock, Phone, SparklesIcon, SunMoon, UserRoundXIcon, WalletIcon, XIcon } from "lucide-react-native";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import phoneNumber from "../../signup/phoneNumber";

export default function Accountinfo() {
  function handleAccountinfo(text: string): void {}
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  function handleNameChange(text: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen options={{ title: "Account info", headerTitleAlign: "center" }} />

      <View className="space-y-8 mt-[16px]">
        <View className="flex-row justify-between items-center">
          <View className="mx-4">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Name</Text>
            <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userName" />
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Phone number</Text>
            <TextInput className="text-[#242424] text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userNumber " keyboardType="numeric" />
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Email</Text>
            <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userEmail" />
          </View>
          <View className="h-6 w-6 bg-[#808080] rounded-full items-center justify-center">
            <XIcon color="#ffffff" size={20} />
          </View>
        </View>

        <View className="py-[5px] flex-row justify-between items-center ">
          <View className="mx-4 flex-row items-center">
            <UserRoundXIcon color="#808080" size={20} />
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
