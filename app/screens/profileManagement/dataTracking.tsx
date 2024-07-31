import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, DotIcon, Info, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button } from "react-native-paper";

export default function Paying() {
  function handlePaying(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Paying for your trip",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <Stack.Screen options={{ title: "Device tracking", headerTitleAlign: "center" }} />

      <View className="space-y-8 mt-[12px]">
        <View className="flex-row justify-between items-center px-5 ">
          <View className="mb-12">
            <Info size={20} color="#107C10" strokeWidth={3} />
          </View>
          <View className="mx-4">
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">To ensure your journey is safe and fast, we collect and use data at every stage of your trip. This includes before you start, while you're on your way, and after you've arrived at your destination.</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Your location</Text>
            <View className=" mt-2">
              <View className="flex-row pr-4">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We use your current location to create more efficient routes for your journey.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Trip details</Text>
            <View className="mt-2">
              <View className="flex-row pr-4">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We use this data in emergency situations, including your name, phone number, and other relevant information.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Payment information</Text>
            <View className=" mt-2">
              <View className="flex-row pr-4">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We collect and securely store data about your credit cards and mobile money.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
