import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { Banknote, Circle, CircleCheck, Info, Plus } from "lucide-react-native";
import { RadioButton } from "react-native-paper";

export default function PaymentMode() {
  const [checked, setChecked] = useState("four");
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
            <RadioButton
              value=""
              status={checked == "one" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("one");
              }}
              color="#636363"
              uncheckedColor="#636363"
            />
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
            className="flex-row items-center justify-center bg-[#107C10] rounded-[99px] h-8 px-3 space-x-1">
            <Plus color="#ffffff" size={16} />
            <Text className="text-[#ffffff]">Deposit</Text>
          </Pressable>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <RadioButton
              value=""
              status={checked == "two" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("two");
              }}
              color="#636363"
              uncheckedColor="#636363"
            />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Pay with Airtel money
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <RadioButton
              value=""
              status={checked == "three" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("three");
              }}
              color="#636363"
              uncheckedColor="#636363"
            />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Pay with MTN momo
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-3">
          <View className="p-1 flex-row items-center space-x-2">
            <RadioButton
              value=""
              status={checked == "four" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("four");
              }}
              uncheckedColor="#636363"
              color="#636363"
            />
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
