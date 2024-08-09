import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import Toggle from "@/components/core/Toggle";
import CustomSwitch from "@/CustomSwitch";

export default function Appearance() {
  const [isLightmode, setIsLightmodeOff] = useState(true);
  const handleLightmode = () => {
    setIsLightmodeOff((isLightmodeOff) => !isLightmodeOff);
  };

  const [isDarkmodeOff, setIsDarkmodeOff] = useState(false);
  const handleDarkmode = () => {
    setIsDarkmodeOff(isDarkmodeOff);
  };

  const [isUsedevicesettingsOff, setIsUsedevicesettingsOff] = useState(false);
  const handleUsedevicesettings = () => {
    setIsUsedevicesettingsOff(isUsedevicesettingsOff);
  };

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Appearance",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <View className="">
          <View className="gap-[24px] mt-12 justify-between flex-row items-center px-1">
            <View className="">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Light mode</Text>
            </View>
            <View className="">
              <Toggle onToggle={handleLightmode} isOn={isLightmode} />
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-3 justify-between flex-row items-center px-1">
          <View className=" ">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Dark mode</Text>
          </View>

          <View className="">
            <Toggle onToggle={handleDarkmode} isOn={isDarkmodeOff} />
          </View>
        </View>

        <View className="gap-[24px] mt-3 justify-between flex-row items-center px-1">
          <View className="">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Use device settings</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">The app will adapt to your device's display{"\n"}theme.</Text>
          </View>
          <View className="">
            <Toggle onToggle={handleUsedevicesettings} isOn={isUsedevicesettingsOff} />
          </View>
        </View>
      </View>
    </View>
  );
}
