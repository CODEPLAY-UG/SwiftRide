import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import CustomSwitch from "@/CustomSwitch";
import { BellRingIcon } from "lucide-react-native";

export default function Appearance() {
  const [lightmode, setLightmode] = useState(false);
  const toggleLightmode = () => {
    setLightmode((previousState) => !previousState);
  };

  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => {
    setDarkmode((previousState) => !previousState);
  };

  const [usedevicesettings, setUsedevicesettings] = useState(false);
  const toggleApple = () => {
    setUsedevicesettings((previousState) => !previousState);
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

      <View className="space-y-5 mt-[20px]">
        <View className="flex-row  justify-between items-center">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Light mode</Text>
          </View>

          <View>
            <CustomSwitch isEnabled={lightmode} toggleSwitch={setLightmode} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4 ">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Dark mode</Text>
          </View>

          <View className="">
            <CustomSwitch isEnabled={darkmode} toggleSwitch={setDarkmode} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Use device settings</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">The app will adapt to your device's display {"\n"}theme.</Text>
          </View>
          <View className="">
            <CustomSwitch isEnabled={usedevicesettings} toggleSwitch={setUsedevicesettings} />
          </View>
        </View>
      </View>
    </View>
  );
}
