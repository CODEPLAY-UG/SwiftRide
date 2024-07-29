import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Banknote, Info, Star } from "lucide-react-native";

export default function TripSummary(props) {
  const [status, isStatus] = useState(false);

  const changeStatus = () => {
    props.setIsPaymentDetailsOpen(isStatus((prev) => !prev));
  };

  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="">
        <View className="flex-row items-center space-x-2 mt-3">
          <View className="">
            <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
              Point A - Point B
            </Text>
            <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
              Price
            </Text>
            <Text className="flex-row items-center space-x-1">Time</Text>
          </View>
        </View>
        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <Banknote className="" color="#808080" size={24} />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Payment Method
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                cash
              </Text>
            </View>
          </View>
          <Pressable onPress={changeStatus}>
            <Text className="flex-row items-center justify-center border rounded-[99px] h-fit px-2 py-[5px]">
              change
            </Text>
          </Pressable>
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
