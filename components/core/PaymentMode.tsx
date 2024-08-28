import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
// import { RadioButton } from "react-native-paper";
import Plus from "@/assets/svgs/plus";
import CheckMark from "@/assets/svgs/checkmark";

export default function PaymentMode() {
  const [checked, setChecked] = useState("cash");
  const [balance, setBalance] = useState("Ugx 46,000");
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="my-2">
        <Text className="text-[17px] text-[#242424] text-center py-2 font-[600] leading-[22px] tracking-[-0.43px]">
          Select payment method
        </Text>
      </View>
      <View className="">
        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <Pressable onPress={() => setChecked("wallet")}>
              <View className="w-6 h-6">
                {checked == "wallet" ? <CheckMark /> : ""}
              </View>
            </Pressable>
            <Pressable onPress={() => setChecked("wallet")}>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Wallet
                </Text>
                <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  {balance}
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {}}
            className="flex-row items-center justify-center bg-[#107C10] rounded-[99px] h-8 px-3 space-x-1">
            <Plus />
            <Text className="text-[#ffffff]">Deposit</Text>
          </Pressable>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <Pressable onPress={() => setChecked("airtel")}>
              <View className="w-6 h-6">
                {checked == "airtel" ? <CheckMark /> : ""}
              </View>
            </Pressable>
            <Pressable onPress={() => setChecked("airtel")}>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Pay with Airtel money
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <Pressable onPress={() => setChecked("mtn")}>
              <View className="w-6 h-6">
                {checked == "mtn" ? <CheckMark /> : ""}
              </View>
            </Pressable>
            <Pressable onPress={() => setChecked("mtn")}>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Pay with MTN momo
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <Pressable onPress={() => setChecked("cash")}>
              <View className="w-6 h-6">
                {checked == "cash" ? <CheckMark /> : ""}
              </View>
            </Pressable>
            <Pressable onPress={() => setChecked("cash")}>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Pay with cash
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
