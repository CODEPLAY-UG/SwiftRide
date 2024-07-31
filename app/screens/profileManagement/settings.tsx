import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import {
  ArrowLeft,
  BellIcon,
  BellRingIcon,
  ChevronRight,
  Lock,
  Phone,
  SunMoon,
} from "lucide-react-native";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";

export default function settings() {
  function handleSettings(text: string): void {}
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Settings",
          headerTitleAlign: "center",
        }}
      />
      <View className="space-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <BellRingIcon color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Notifications
              </Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                This allows us to send you promos, {"\n"} deals among things
              </Text>
            </View>
          </View>

          <View className="">
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push("./privacyCentre")} className="">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Lock color="#808080" size={24} />
              <View className="mx-4">
                <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                  Privacy
                </Text>
                <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                  Manage the data you share with us
                </Text>
              </View>
            </View>

            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <SunMoon color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Appearance
              </Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                Select how you want your app to look like
              </Text>
            </View>
          </View>

          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center  ">
          <View className="flex-row items-center">
            <Phone color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] h-[22px] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Communication
              </Text>
              <Text className=" text-[#616161] h-[18px] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                Choose your preferred contact methods
              </Text>
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
