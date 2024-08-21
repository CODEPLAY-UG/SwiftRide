import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, BellRingIcon, ChevronRight, CircleCheckIcon, DotIcon, Info, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button, Checkbox, Switch, DefaultTheme } from "react-native-paper";
import { setStatusBarHidden } from "expo-status-bar";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";
import Marker from "@/components/core/Marker";
import CheckBox from "@/components/core/CheckBox";
import CheckMark from "@/assets/svgs/checkmark";
import RadioButton from "@components/core/RadioButton";
import Toggle from "@/components/core/Toggle";
import InfoIcon from "@/assets/svgs/infoIcon";

export default function Communication() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handlePress = (option: number) => {
    setSelectedOption(option);
  };

  const [checked, setChecked] = React.useState("first");

  const [value, setValue] = React.useState("first");

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Communication",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="space-y-8 px-2 mt-[12px]">
        <View className="flex-row justify-between items-center px-5 ">
          <View className="mb-5">
            <InfoIcon />
          </View>
          <View className="mx-4">
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">Select how drivers can contact you during trips and how you'd like to receive special offers, promotions, and more.</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-5">
          <View className="px-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Driver preferences </Text>
          </View>
        </View>

        <View className="space-y-4 px-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <RadioButton checked={selectedOption === 1} onPress={() => handlePress(1)} />

              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Calls</Text>
              </View>
            </View>
            <View className="bg-[#F1FAF1] py-[2] px-[8] rounded-[4px]">
              <Text className="text-[#0E700E] text-[15px] font-normal leading-[20px] tracking-[-0.23]">Recommended</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <RadioButton checked={selectedOption === 2} onPress={() => handlePress(2)} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Chat</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <RadioButton checked={selectedOption === 3} onPress={() => handlePress(3)} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Call or chat</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="space-y-6">
          <View className="flex-row justify-between items-center">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Push notifications</Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className="">
                <CheckBox />
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Recommendations</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Custom trip recommendations</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className=" ">
                <View className="">
                  <CheckBox />
                </View>
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Promotional offers</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Special offers, discounts, and bonuses.</Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center ">
              <View className=" ">
                <View className="">
                  <CheckBox />
                </View>
              </View>
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Product news & updates</Text>
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Exciting product updates and news.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
