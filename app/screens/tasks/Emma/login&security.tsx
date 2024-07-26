import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { Button } from "react-native-paper";
import { Switch } from "react-native-paper";

export default function Acounts() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="bg-white h-full w-full px-8">
      <Stack.Screen options={{ title: "Login & security", headerTitleAlign: "center" }} />

      <View className="space-y-5 mt-[20px]">
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <View className="">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Connected accounts</Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image className="h-10 w-10" source={require(".../../../assets/images/googleLogo.png")} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Google</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">example@gmail.com</Text>
            </View>
          </View>
          <View className="">
            <Switch className={"w-[31px] h-[51px] rounded-[20px]"} value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image className="h-10 w-10" source={require(".../../../assets/images/appleLogo.png")} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Apple</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">example@gmail.com</Text>
            </View>
          </View>
          <View className="">
            <Switch className={"w-[31px] h-[51px] rounded-[20px]"} onValueChange={onToggleSwitch} />
          </View>
        </View>
      </View>
    </View>
  );
}
