import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellRingIcon, ChevronRight, Lock, Phone, SunMoon } from "lucide-react-native";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import ArrowIcon from "@/assets/svgs/arrowIcon";
import BellIcon from "@/assets/svgs/bellIcon";
import RockIcon from "@/assets/svgs/rockIcon";
import SunIcon from "@/assets/svgs/sunIcon";
import CallIcon from "@/assets/svgs/callIcon";
import Toggle from "@/components/core/Toggle";
export default function settings() {
  const [isNotificationOn, setIsNotificationOff] = useState(true);
  const handleNotification = () => {
    setIsNotificationOff((isNotificationOff) => !isNotificationOff);
  };

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "settings",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />
      <View className="-mt-9">
        <View className="py-3">
          <View className=" gap-[24px] mt-2 justify-between flex-row items-center px-5">
            <View className="flex-row -mx-3 items-center">
              <BellIcon />
              <View className="mx-3">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Notifications</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">This allows us to send you promos, {"\n"} deals among things</Text>
              </View>
            </View>
            <View className="">
            <Toggle onToggle={handleNotification} isOn={isNotificationOn} />
              
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("./privacyCentre")} className="">
          <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
            <View className="flex-row -mx-3 items-center">
              <RockIcon />
              <View className="mx-3">
                <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Privacy</Text>
                <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Manage the data you share with us</Text>
              </View>
            </View>

            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./appearance")} className="">
          <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5 ">
            <View className="flex-row -mx-3 items-center">
              <SunIcon />
              <View className="mx-3">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Appearance</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Select how you want your app to look like</Text>
              </View>
            </View>

            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./communication")} className="">
          <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5 ">
            <View className="flex-row -mx-3 items-center">
              <CallIcon />
              <View className="mx-3">
                <Text className="text-[#242424] h-[22px] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Communication</Text>
                <Text className=" text-[#616161] h-[18px] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Choose your preferred contact methods</Text>
              </View>
            </View>

            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
