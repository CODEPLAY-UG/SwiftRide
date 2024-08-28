import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { CircleUserRound, MessageCircleMore, Phone } from "lucide-react-native";
import ProfileIcon from "@/assets/svgs/profileIcon";

export default function ConfirmDriver() {
  const [time, setTime] = useState("2m");
  const [driver, setDriver] = useState("Ssekikubo");
  const [pickup, setPointup] = useState("Kireka");
  const [motorNo, setMotorNo] = useState("Kireka");
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="px-4 mt-2">
        <View className="flex-row space-x-5 justify-between item-center">
          <View className="flex-row items-center space-x-2 mt-3">
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Arriving in {time}
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                Meet {driver} at {pickup}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-column space-x-5 justify-center mt-4">
          <View className="flex-row justify-center">
            <View className=" ">
              <View className=" flex-row justify-center w-[98px]">
                <ProfileIcon />
              </View>
              <View>
                <Text className="text-[15px] text-[#616161] text-center leading-[20px] tracking-[-0.23px]">
                  {driver}
                </Text>
                <Text className="text-center">{motorNo}</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-center py-6">
            <View className=" ">
              <View className="w-[88px] flex-row justify-center">
                <MessageCircleMore
                  color="#000000"
                  size="40"
                  strokeWidth="0.75"
                />
              </View>
              <View>
                <Text className="text-[15px] text-center text-[#616161] mt-2 tracking-[-0.23px]">
                  Chat
                </Text>
              </View>
            </View>

            <View className="">
              <View className="w-[88px] flex-row justify-center">
                <Phone color="#000000" size="40" strokeWidth="0.75" />
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
    </View>
  );
}
