import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import {
  Banknote,
  Bike,
  Circle,
  CircleCheck,
  Info,
  PackageOpen,
  Plus,
  Zap,
} from "lucide-react-native";

export default function BikeType({
  setIsAddress,
}: {
  setIsAddress: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bikes = ["Standard bike", "E-Bike", "Cargo bike"];
  const [select, setSelect] = useState(bikes[0]);
  const selectedItem = [
    "border-[#b3b3b3] bg-[#e0e0e0] rounded-[16px] mt-3 px-4 py-2 shadow-md",
    "rounded-[16px] mt-3 px-4 py-2",
  ];

  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="my-2">
        <Text className="text-[17px] text-[#242424] text-center py-2 font-[600] leading-[22px] tracking-[-0.43px]">
          Choose bike type
        </Text>
      </View>
      <View className="">
        <Pressable
          className={select == bikes[0] ? selectedItem[0] : selectedItem[1]}
          onPress={() => setSelect(bikes[0])}>
          <View className="flex-row space-x-5 justify-between item-center ">
            <View className="p-1 flex-row items-center space-x-3">
              <Pressable
                disabled
                className="rounded-[99px] bg-[#AF52DE] px-3 border-[2px] border-[#ffffff] py-1 flex-row justify-center items-center">
                <Bike color="#ffffff" />
              </Pressable>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Standard bike
                </Text>
                <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  time away
                </Text>
              </View>
            </View>
            <Text className="text-[#000000] leading-10 px-3">fare</Text>
          </View>
        </Pressable>

        <Pressable
          className={select == bikes[1] ? selectedItem[0] : selectedItem[1]}
          onPress={() => setSelect(bikes[1])}>
          <View className="flex-row space-x-5 justify-between item-center">
            <View className="p-1 flex-row items-center space-x-3">
              <Pressable
                disabled
                className="rounded-[99px] bg-[#34c759] px-3 border-[2px] border-[#ffffff] py-1 flex-row justify-center items-center">
                <Zap color="#ffffff" />
              </Pressable>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  E-Bike
                </Text>
                <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  time away
                </Text>
              </View>
            </View>

            <Text className="text-[#000000] leading-10 px-3">fare</Text>
          </View>
        </Pressable>

        <Pressable
          className={select == bikes[2] ? selectedItem[0] : selectedItem[1]}
          onPress={() => setSelect(bikes[2])}>
          <View className="flex-row space-x-5 justify-between item-center">
            <View className="p-1 flex-row items-center space-x-3">
              <Pressable
                disabled
                className="rounded-[99px] bg-[#FF9500] px-3 border-[2px] border-[#ffffff] py-1 flex-row justify-center items-center">
                <PackageOpen color="#ffffff" />
              </Pressable>
              <View className="">
                <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                  Cargo bike
                </Text>
                <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  time away
                </Text>
              </View>
            </View>

            <Text className="text-[#000000] leading-10 px-3">fare</Text>
          </View>
        </Pressable>
      </View>

      <Pressable
        onPress={() => {
          router.push("./confirm_order");
          setIsAddress(false);
        }}
        // className="bg-[#636363] flex-row justify-center p-5 mx-3 rounded-[99px] mt-10">
        className="mt-3 bg-[#636363] h-[45px] items-center justify-center rounded-[99px]">
        <Text className="text-white font-[400] text-[17px]">
          Confirm {select}
        </Text>
      </Pressable>
    </View>
  );
}
