import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Banknote, Circle, CircleCheck, Info, Plus } from "lucide-react-native";

export default function PaymentMode() {
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="">
        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <Circle color="#808080" size={24} />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Wallet
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                balance
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => router.push("../")}
            className="flex-row items-center justify-center bg-[#107C10] rounded-[99px] h-10 px-3 ">
            <Plus color="#ffffff" size={16} />
            <Text className="text-[#ffffff]">Deposit</Text>
          </Pressable>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <Circle className="" color="#808080" size={24} />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Pay with Airtel money
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <Circle className="" color="#808080" size={24} />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Pay with MTN momo
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <CircleCheck className="" color="#808080" size={24} />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Pay with cash
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
