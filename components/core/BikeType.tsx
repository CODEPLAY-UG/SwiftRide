import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import PackageOpen from "@/assets/svgs/packageOpen";
import Bike from "@/assets/svgs/bike";
import Zap from "@/assets/svgs/zap";

export default function BikeType({
  setIsAddress,
}: {
  setIsAddress: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bikes = ["Standard bike", "E-Bike", "Cargo bike"];
  const [select, setSelect] = useState(bikes[0]);
  const selectedItem = [
    "bg-[#e0e0e0] rounded-[16px] mt-3 px-4 py-2 shadow-md",
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
          style={select == bikes[0] ? styles.shadow : {}}
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
          style={select == bikes[1] ? styles.shadow : {}}
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
          style={select == bikes[2] ? styles.shadow : {}}
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1, // Reduced height for a thinner shadow
    },
    shadowOpacity: 0.1, // Lower opacity for a lighter shadow
    shadowRadius: 2, // Smaller radius for a sharper shadow
    elevation: 2, // Lower elevation for a less pronounced shadow on Android
  },
});
