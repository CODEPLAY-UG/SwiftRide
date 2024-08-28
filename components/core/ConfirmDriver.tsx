import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import ProfileIcon from "@/assets/svgs/profileIcon";
import MessageCircleMore from "@/assets/svgs/messageCircleMore";
import Phone from "@/assets/svgs/phone";
import CircleSmall from "@/assets/svgs/circleSmall";
import BankNote from "@/assets/svgs/bankNote";
import { router } from "expo-router";

export default function ConfirmDriver() {
  const [time, setTime] = useState("2m");
  const [pickUp, setPickup] = useState({
    driver: "Ssekikubo",
    pickup: "Kireka",
    motor: "D0001",
  });
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="px-4 mt-1">
        <View className="flex-row space-x-5 justify-between item-center">
          <View className="flex-row items-center space-x-2 mt-3">
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Arriving in {time}
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                Meet {pickUp.driver} at {pickUp.pickup}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-column space-x-5 justify-center mt-4">
          <View className="flex-row justify-center">
            <View className=" ">
              <View className=" flex-row justify-center w-[98px]">
                <Image source={require("@/assets/images/driver-image.png")} />
              </View>
              <View>
                <Text className="text-[15px] text-[#616161] text-center leading-[20px] tracking-[-0.23px]">
                  {pickUp.driver}
                </Text>
                <Text className="text-center">{pickUp.motor}</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-center py-4">
            <View className=" ">
              <View className="w-[88px] flex-row justify-center">
                <MessageCircleMore />
              </View>
              <View>
                <Text className="text-[15px] text-center text-[#616161] mt-2 tracking-[-0.23px]">
                  Chat
                </Text>
              </View>
            </View>
            {/* <CircleSmall /> */}
            <View className="">
              <View className="w-[88px] flex-row justify-center">
                <Phone />
              </View>
              <View>
                <Text className="text-[15px] text-center text-[#616161] mt-2 tracking-[-0.23px]">
                  Call
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="px-4">
        <View className="flex-row space-x-5 justify-between item-center">
          <View className="flex-row items-center space-x-2 mt-2">
            <View className="">
              <Text className="text-[13px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                Trip Summary
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row py-2 ">
          <View className="flex-column h-100 justify-between items-center px-2">
            <CircleSmall />
            <View className="h-[77%] bg-black w-[3px] absolute top-3" />
            <CircleSmall />
          </View>

          <View className=" h-100 ">
            <View className="flex-column  space-y-2 ">
              <View className="flex-column ">
                <Text className="text-[15px] text-[#000000] tracking-[-0.23px]">
                  Drop Off
                </Text>
                <Text className="text-[13px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  location
                </Text>
              </View>
              <View className="flex-column">
                <Text className="text-[15px] text-[#000000] tracking-[-0.23px]">
                  PickUp
                </Text>
                <Text className="text-[13px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                  location
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="px-4 flex-row space-x-5 justify-between item-center mt-2">
        <View className="p-1 flex-row items-center space-x-2">
          <BankNote />
          <View className="">
            <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
              Payment Method
            </Text>
            <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
              cash
            </Text>
          </View>
        </View>

        <Text className=" h-fit px-2 py-[5px]">fare</Text>
      </View>
      <View className="mt-2">
        <Pressable
          onPress={() => {
            router.push("./");
          }}
          className=" w-full h-[45px] items-center justify-center rounded-[99px]">
          <Text className="text-[#C50F1F] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Cancel trip
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
