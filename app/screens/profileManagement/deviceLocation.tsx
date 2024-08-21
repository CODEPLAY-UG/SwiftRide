import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Toggle from "@/components/core/Toggle";
import InfoIcon from "@/assets/svgs/infoIcon";

export default function DeviceLocation() {
  const [isDivicelocation, setIsDivicelocationOff] = useState(true);
  const handleDivicelocation = () => {
    setIsDivicelocationOff((isDivicelocationOff) => !isDivicelocationOff);
  };

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Device location",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <View className="pt-12">
          <View className="flex-row justify-between items-center px-4">
            <View className="">
              <InfoIcon />
            </View>
            <View className="px-4">
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Enabling device location sharing enhances your experience.</Text>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-2 flex-row items-center px-5">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Your device settings</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">We have access to your device location.</Text>
          </View>
          <View>
            <Toggle onToggle={handleDivicelocation} isOn={isDivicelocation} />
          </View>
        </View>
      </View>
    </View>
  );
}
