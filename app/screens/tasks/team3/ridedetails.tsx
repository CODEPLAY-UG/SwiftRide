import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import BikeIcon from "@/assets/svg/BikeIcon";
import ChevronRight from "@/assets/svg/ChevronRight";
import RatingIcon from "@/assets/svg/RatingIcon";

export default function RideDetails() {
  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "Ride details",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className=" flex-col items-center justify-center px-4 pt-1 pb-3">
        <BikeIcon width={32} height={32} />
        <Text className="text-[#242424] text-[17px] font-semibold leading-[22px]tracking-[0.43px] pt-2 pb-3">
          UGX. (Fare)
        </Text>
      </View>
      <View className="px-4">
        <Text className="text-[#242424] text-[17px] font-semibold leading-[22px]tracking-[0.43px] pt-2 pb-2">
          Trip details
        </Text>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Pick-up
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Destination
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Biketype
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Payment method
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Driver name
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
          <View className="flex-row">
            <RatingIcon />
            <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
              1.0
            </Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row py-3">
          <Text className="flex-1 text-[17px] leading-[22px]tracking-[0.43px]">
            Trip route map
          </Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row py-3">
          <Text className="flex-1 text-[17px] leading-[22px]tracking-[0.43px]">
            Receipt
          </Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
