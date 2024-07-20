import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Bike, BriefcaseBusiness, UserCheck } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

export default function welcome() {
  return (
    <View className="px-4 h-full justify-between">
      <Stack.Screen options={{ headerTitle: "" }} />
      <StatusBar style="dark" />
      <View className="">
        <View className="mb-8">
          <Text className="text-[#242424] pt-8 text-[28px] font-[700] leading-[34px] tracking-[0.38px]">
            Welcome to SwiftRide
          </Text>
          <Text className="text-[#616161] pt-2 text-[13px] leading-[18px] tracking-[-0.08px]">
            We cant wait for you to try out some of our exciting features
          </Text>
        </View>
        <View className="flex-row space-x-4 py-4">
          <View className="h-10 w-10 bg-[#313131] rounded-full items-center justify-center">
            <BriefcaseBusiness size={24} color="#FFFFFF" />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Take a ride
            </Text>
            <Text className="text-[#616161] text-[13px] font-[600] leading-[18px] tracking-[-0.08px]">
              Your workplace will pay for it
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-4 py-4">
          <View className="h-10 w-10 bg-[#313131] rounded-full items-center justify-center">
            <Bike size={24} color="#FFFFFF" />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Order a ride for you
            </Text>
            <Text className="text-[#616161] text-[13px] font-[600] leading-[18px] tracking-[-0.08px]">
              A ride for you to anywhere anytime
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-4 py-4">
          <View className="h-10 w-10 bg-[#313131] rounded-full items-center justify-center">
            <UserCheck size={24} color="#FFFFFF" />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Order a ride for friends
            </Text>
            <Text className="text-[#616161] text-[13px] font-[600] leading-[18px] tracking-[-0.08px]">
              A ride for your dwags to anywhere
            </Text>
          </View>
        </View>
      </View>
      <View className="py-5">
        <Pressable
          // onPress={() => router.push("./phoneNumber")}
          className="bg-[#636363] h-[52px] items-center justify-center rounded-[99px]"
        >
          <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Let's go
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
