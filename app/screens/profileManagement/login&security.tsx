import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import CustomSwitch from "@/CustomSwitch";
import GoogleIcon from "@/assets/svgs/google";
import AppleIcon from "@/assets/svgs/apple";

export default function Acounts() {
  const [google, setGoogle] = useState(false);
  const toggleGoogle = () => {
    setGoogle((previousState) => !previousState);
  };

  const [apple, setApple] = useState(false);
  const toggleApple = () => {
    setApple((previousState) => !previousState);
  };

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Login & security",
          headerTitleAlign: "center",
        }}
      />

      <View className="space-y-5 mt-[20px]">
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <View className="">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">
                Connected accounts
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <GoogleIcon />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Google
              </Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                example@gmail.com
              </Text>
            </View>
          </View>

          <View>
            <CustomSwitch isEnabled={google} toggleSwitch={setGoogle} />
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <AppleIcon />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Apple
              </Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                example@gmail.com
              </Text>
            </View>
          </View>
          <View>
            <CustomSwitch isEnabled={apple} toggleSwitch={setApple} />
          </View>
        </View>
      </View>
    </View>
  );
}
