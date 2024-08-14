import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import SheildPlus from "@/assets/svgs/sheildPlus";
import Smile from "@/assets/svgs/smile";
import TrafficCone from "@/assets/svgs/trafficCone";

export default function onboarding() {
  return (
    <View className="w-full h-full ">
      <StatusBar style="light" />

      <Stack.Screen options={{ headerShown: false }} />

      <ImageBackground
        className="h-full w-full justify-end"
        source={require("@assets/images/onboarding.jpg")}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0)",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.9)",
            "rgba(0,0,0,1)",
          ]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "30%",
          }}
        />
        <View className="flex-col py-9 items-start self-stretch px-4 ">
          <View className="items-center self-stretch px-4">
            <View className="w-full mt-8">
              <Text className="text-white text-[34px] font-[700] text-center leading-[41px] tracking-[0.4px]">
                {"Ride in greater\ncomfort"}
              </Text>
            </View>
            <View className="flex-row justify-center space-x-8">
              <View className="items-center py-2 w-[80px]">
                <View className="py-2">
                  <SheildPlus width={32} height={32} color="white" />
                </View>
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"Safer\nrides"}
                </Text>
              </View>
              <View className="items-center py-2 w-[80px]">
                <View className="py-2">
                  <Smile width={32} height={32} color="white" />
                </View>
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"More bike\noptions"}
                </Text>
              </View>
              <View className="items-center py-2 w-[80px]">
                <View className="py-2">
                  <TrafficCone width={32} height={32} color="white" />
                </View>
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"Better\nnavigation"}
                </Text>
              </View>
            </View>
          </View>
          <View className=" w-full pt-2 space-y-1">
            <Pressable
              onPress={() => router.push("./login_phoneNumber")}
              className="bg-[#636363] w-full h-[52px] items-center justify-center rounded-[99px]"
            >
              <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                Log in
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("./name")}
              className="space-x-3 flex-row w-full h-[52px] items-center justify-center rounded-[99px]"
            >
              <Text className="text-[#ffffff] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
