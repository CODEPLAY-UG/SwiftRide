import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import CustomSwitch from "@/CustomSwitch";
import GoogleIcon from "@/assets/svgs/google";
import Toggle from "@/components/core/Toggle";
import AppleIcon from "@/assets/svgs/apple";

export default function Acounts() {
  const [isGoogleOn, setIsGoogleOff] = useState(true);
  const handleGoogle = () => {
    setIsGoogleOff((isGoogleOff) => !isGoogleOff);
  };

  const [Apple, setIsAppleOff] = useState(false);
  const handleAppleIcon = () => {
    setIsAppleOff((isAppleOff: any) => !isAppleOff);
  };

  // function setIsAppleOff(arg0: (isAppleOff: any) => boolean) {
  //   ("");
  // }

  // const [apple, set] = useState(true);
  // const toggleApple = () => {
  //   setIsAppleOff((isAppleOff) => !isAppleOff);
  // };

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Login & security",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <View className="py-2">
          <View className="gap-[24px] mt-3 flex-row items-center py-1 px-5">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Connected accounts</Text>
          </View>
        </View>

        <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
          <View className="flex-row">
            <View className="mt-3">
              <GoogleIcon />
            </View>
            <View className="mx-3">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Google</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">example@gmail.com</Text>
            </View>
          </View>
          <View>
            <Toggle onToggle={handleGoogle} isOn={isGoogleOn} />
          </View>
        </View>

        <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
          <View className="flex-row">
            <View className="mt-3">
              <AppleIcon />
            </View>
            <View className="mx-3">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Apple</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">example@gmail.com</Text>
            </View>
          </View>
          <View>
            <Toggle onToggle={handleAppleIcon} isOn={setIsAppleOff} />
          </View>
        </View>
      </View>
    </View>
  );
}
