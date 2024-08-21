import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";

import Toggle from "@/components/core/Toggle";
import InfoIcon from "@/assets/svgs/infoIcon";
export default function LiveLocation() {
  const [isSharewithdrivers, setIsSharewithdriversOff] = useState(true);
  const handleSharewithdrivers = () => {
    setIsSharewithdriversOff((isSharewithdriversOff) => !isSharewithdriversOff);
  };

  const [isContacts, setIsContactsOff] = useState(true);
  const handleContacts = () => {
    setIsContactsOff((isContactsOff) => !isContactsOff);
  };

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Live  location",
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
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">We share your live location in specific scenarios to enhance your experience.</Text>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-2 flex-row items-center px-5">
          <View className="mx-3">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Share with drivers</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">
              Drivers can view your location 3 minutes {"\n"}
              before pickup to locate you more quickly.
            </Text>
          </View>
          <View className="">
            <Toggle onToggle={handleContacts} isOn={isContacts} />
          </View>
        </View>

        <View className="gap-[24px] mt-2 flex-row items-center px-5">
          <View className="mx-3">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Share with select contacts</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">
              Share your trip status with your friends or{"\n"}
              family for safer trips.
            </Text>
          </View>
          <View className="">
            <Toggle onToggle={handleSharewithdrivers} isOn={isSharewithdrivers} />
          </View>
        </View>
      </View>
    </View>
  );
}
