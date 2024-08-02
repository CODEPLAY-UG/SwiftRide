import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Info, Star } from "lucide-react-native";

export default function RideDetails() {
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="">
        <View className="flex-row items-center space-x-2 mt-3">
          <Image
            className="w-16 h-16 rounded-full"
            source={require("@assets/images/blonde.png")}
          />
          <View className="">
            <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
              Name
            </Text>
            <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
              Rider
            </Text>
            <Text className="flex-row items-center space-x-1">
              <View className="">
                <Star color="#EAA300" size={12} />
              </View>{" "}
              <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
                1.5
              </Text>
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-5 justify-between mt-5">
          <View className="p-1">
            <Info className="" color="red" size={16} />
          </View>
          <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
            This rider is time ⌛ minutes away from you thus {"\n"} will take
            sometime to reach your current {"\n"} location.
          </Text>
        </View>
      </View>

      <View className="">
        <Pressable
          onPress={() => {}}
          className="bg-[#636363] w-full h-[52px] items-center justify-center rounded-[99px]">
          <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Order ride
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
