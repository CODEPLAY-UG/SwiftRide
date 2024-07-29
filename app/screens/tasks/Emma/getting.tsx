import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, DotIcon, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button } from "react-native-paper";

export default function Getting() {
  function handleGetting(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen options={{ title: "Getting started with SwiftRide", headerTitleAlign: "center" }} />
      <View className="">
        <View className="">
          <View className="justify-between py-5 items-center">
            <Image className="h-[180px] w-[100%] rounded-[16px]" source={require(".../../../assets/images/rider.png")} />
          </View>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Welcome to SwiftRide!</Text>
            <View className="mt-2">
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Your journey with SwiftRide begins here. We're excited to have you join our community. Let's explore how SwiftRide makes your ride-hailing experience seamless, efficient, and enjoyable.</Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Discover the SwiftRide Community</Text>
            <View className=" mt-2">
              <View className="flex-row pr-4 pb-6">
                <View className="">
                  <DotIcon color="#808080" size={16} />
                </View>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Join the Community: SwiftRide is more than just an app; it’s a community of drivers and riders who value safety, reliability, and convenience.</Text>
              </View>

              <View className="flex-row">
                <View className="">
                  <DotIcon color="#808080" size={16} />
                </View>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Safety First: We prioritize your safety with verified drivers, real-time ride tracking, and a dedicated support team available 24/7.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">How It Works</Text>
            <View className="mt-2">
              <View className="flex-row pr-4 pb-6">
                <View className="">
                  <DotIcon color="#808080" size={16} />
                </View>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Smart Matching: Our advanced algorithm connects you with the nearest available driver to ensure quick pickups and minimal wait times.</Text>
              </View>
              <View className="flex-row">
                <View className="">
                  <DotIcon color="#808080" size={16} />
                </View>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Efficient Routing: SwiftRide uses real-time data{"\n"}to find the fastest and safest routes to your destination, avoiding traffic and delays.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
