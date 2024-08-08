import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import InfoIcon from "@/assets/svgs/infoIcon";

export default function tracking() {
  function handlePaying(text: string): void {}

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Device tracking",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <View className="pt-12">
          <View className="flex-row justify-between items-center px-5 ">
            <View className="mb-12">
              <InfoIcon />
            </View>
            <View className="mx-3">
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">To ensure your journey is safe and fast, we collect and use data at every stage of your trip. This includes before you start, while you're on your way, and after you've arrived at your destination.</Text>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-2 flex-row items-center px-5">
          <View className="mx-3">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Your location</Text>
            <View className=" mt-2">
              <View className="">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We use your current location to create more efficient routes for your journey.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-2 flex-row items-center px-5">
          <View className="mx-3">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Trip details</Text>
            <View className="mt-2">
              <View className="">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We use this data in emergency situations, including your name, phone number, and other relevant information.</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
          <View className="mx-3">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Payment information</Text>
            <View className=" mt-2">
              <View className="">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">We collect and securely store data about your credit cards and mobile money.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
