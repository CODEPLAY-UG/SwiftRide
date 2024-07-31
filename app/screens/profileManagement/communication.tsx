import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, CircleCheckIcon, DotIcon, Info, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button } from "react-native-paper";

export default function Communication() {
  function handlePaying(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Communication",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="space-y-8 px-2 mt-[12px]">
        <View className="flex-row justify-between items-center px-5 ">
          <View className="">
            <Info size={20} color="#107C10" strokeWidth={3} />
          </View>
          <View className="mx-4">
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Select how drivers can contact you during trips and how you'd like to receive special offers, promotions, and more.</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Driver preferences </Text>
          </View>
        </View>

        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Push notifications</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className=" ">
                <Image className="h-[24px] w-[24] rounded-[100px]" source={require(".../../../assets/images/checked.png")} />
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Recommendations</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Custom trip recommendations</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className=" ">
                <Image className="h-[24px] w-[24] rounded-[100px]" source={require(".../../../assets/images/checked.png")} />
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Promotional offers</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Special offers, discounts, and bonuses.</Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className=" ">
                <Image className="h-[24px] w-[24] rounded-[100px]" source={require(".../../../assets/images/checked.png")} />
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Product news & updates</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Exciting product updates and news.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
