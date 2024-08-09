import { View, Switch, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button } from "react-native-paper";
import ArrowIcon from "@/assets/svgs/arrowIcon";
import SparkIcon from "@/assets/svgs/sparkIcon";
import WaltIcon from "@/assets/svgs/waltIcon";

export default function Helpcentre() {
  function handleHelpcentre(text: string): void {}

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Help centre",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />
      <View className="">
        <TouchableOpacity onPress={() => router.push("./gettingStarted")} className="">
          <View className="gap-[24px] mt-1 justify-between flex-row items-center px-5">
            <View className="flex-row -mx-3 items-center">
              <SparkIcon />
              <View className="mx-4">
                <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Getting started with SwiftRide</Text>
                <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">An introduction to how the app works</Text>
              </View>
            </View>
            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./payingTrip")} className="">
          <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
            <View className="flex-row -mx-3 items-center">
              <WaltIcon />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Paying for your trip</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Find out how we price our rides</Text>
              </View>
            </View>
            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
