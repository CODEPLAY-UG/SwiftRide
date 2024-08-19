import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";

import ArrowIcon from "@/assets/svgs/arrowIcon";
import ShapesIcon from "@/assets/svgs/shapesIcon";
import MapPinIcon from "@/assets/svgs/mapPinIcon";
import RadioIcon from "@/assets/svgs/radioIcon";

export default function Privacy() {
  function handlePrivacy(text: string): void {}
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Privacy centre",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <TouchableOpacity onPress={() => router.push("./dataTracking")} className="">
          <View className="py-3">
            <View className="gap-[24px] mt-4 justify-between flex-row items-center px-5">
              <View className="flex-row -mx-3 items-center">
                <ShapesIcon />
                <View className="mx-3">
                  <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Data tracking</Text>
                  <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Discover the types of data we collect</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./deviceLocation")} className="">
          <View className="gap-[24px] mt-1 justify-between flex-row items-center px-5">
            <View className="flex-row items-center">
              <MapPinIcon />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Device location</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Check if we can access your location</Text>
              </View>
            </View>
            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./liveLocation")} className="">
          <View className="gap-[24px] mt-3 justify-between flex-row items-center px-5">
            <View className="flex-row items-center">
              <RadioIcon />
              <View className="mx-3">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Live location</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">How we share your location in real-time{"\n"}with others</Text>
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
