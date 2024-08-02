import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import CustomSwitch from "@/CustomSwitch";
import { BellRingIcon, Info } from "lucide-react-native";

export default function LiveLocation() {
  const [sharewithdrivers, setSharewithdrivers] = useState(false);
  const toggleSharewithdrivers = () => {
    setSharewithdrivers((previousState) => !previousState);
  };

  const [contacts, setContacts] = useState(false);
  const toggleContacts = () => {
    setContacts((previousState) => !previousState);
  };

  return (
    <View className="bg-white h-full w-full px-4">
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

      <View className="space-y-8 mt-[20px]">
        <View className="flex-row justify-between items-center px-2">
          <View className="">
            <Info size={20} color="#107C10" strokeWidth={3} />
          </View>
          <View className="px-4">
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">We share your live location in specific scenarios to enhance your experience.</Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Share with drivers</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">
              Drivers can view your location 3 minutes {"\n"}
              before pickup to locate you more quickly.
            </Text>
          </View>
          <View className="px-5">
            <CustomSwitch isEnabled={sharewithdrivers} toggleSwitch={setSharewithdrivers} />
          </View>
        </View>

        <View className="flex-row items-center">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Share with select contacts</Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">
              Share your trip status with your friends or{"\n"}
              family for safer trips.
            </Text>
          </View>
          <View className="px-5">
            <CustomSwitch isEnabled={contacts} toggleSwitch={setContacts} />
          </View>
        </View>
      </View>
    </View>
  );
}
