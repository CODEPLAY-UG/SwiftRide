import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

import CustomSwitch from "@/CustomSwitch";
import { BellRingIcon, Info } from "lucide-react-native";

export default function DeviceLocation() {
  const [yourdivicelocation, setYourDeviceLocation] = useState(false);
  const toggleDeviceLocation = () => {
    setYourDeviceLocation((previousState) => !previousState);
  };

  return (
    <View className="bg-white h-full w-full px-5">
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

      <View className="space-y-8 mt-[20px]">
        <View className="flex-row justify-between items-center px-4">
          <View className="">
            <Info size={20} color="#107C10" strokeWidth={3} />
          </View>
          <View className="px-5">
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              Enabling device location sharing enhances your experience.
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
              Your device settings
            </Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">
              We have access to your device location.
            </Text>
          </View>
          <View>
            <CustomSwitch
              isEnabled={yourdivicelocation}
              toggleSwitch={setYourDeviceLocation}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
