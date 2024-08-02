import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, BellRingIcon, ChevronRight, CircleCheckIcon, DotIcon, Info, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";
import { Button, Checkbox, RadioButton, Switch, DefaultTheme } from "react-native-paper";
import { setStatusBarHidden } from "expo-status-bar";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

export default function Communication() {
  function handlePaying(text: string): void {}

  const [value, setValue] = React.useState("first");

  const [checked, setChecked] = React.useState("first");

  const checkedBox = (props: SvgProps) => <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}></Svg>;

  return (
    <View className="bg-white h-full w-full px-4">
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
            <Info size={20} color="#107C10" strokeWidth={3} />
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
              <RadioButton value="first" status={checked === "first" ? "checked" : "unchecked"} onPress={() => setChecked("first")} color="#636363" uncheckedColor="#ffffff" />
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
              <RadioButton value="second" status={checked === "second" ? "checked" : "unchecked"} onPress={() => setChecked("second")} color="#636363" uncheckedColor="#ffffff" />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Chat</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <RadioButton value="third" status={checked === "third" ? "checked" : "unchecked"} onPress={() => setChecked("third")} color="#636363" uncheckedColor="#ffffff" />
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
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <Rect width={24} height={24} rx={12} fill="#636363" />
                  <Path d="M8.85355 12.1465C8.65829 11.9512 8.34171 11.9512 8.14645 12.1465C7.95118 12.3417 7.95118 12.6583 8.14645 12.8536L10.6464 15.3536C10.8543 15.5615 11.1959 15.546 11.3841 15.3201L16.3841 9.3201C16.5609 9.10797 16.5322 8.79268 16.3201 8.6159C16.108 8.43912 15.7927 8.46778 15.6159 8.67992L10.9664 14.2593L8.85355 12.1465Z" fill="white" />
                </Svg>
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
                  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Rect width={24} height={24} rx={12} fill="#636363" />
                    <Path d="M8.85355 12.1465C8.65829 11.9512 8.34171 11.9512 8.14645 12.1465C7.95118 12.3417 7.95118 12.6583 8.14645 12.8536L10.6464 15.3536C10.8543 15.5615 11.1959 15.546 11.3841 15.3201L16.3841 9.3201C16.5609 9.10797 16.5322 8.79268 16.3201 8.6159C16.108 8.43912 15.7927 8.46778 15.6159 8.67992L10.9664 14.2593L8.85355 12.1465Z" fill="white" />
                  </Svg>
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
                  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Rect width={24} height={24} rx={12} fill="#636363" />
                    <Path d="M8.85355 12.1465C8.65829 11.9512 8.34171 11.9512 8.14645 12.1465C7.95118 12.3417 7.95118 12.6583 8.14645 12.8536L10.6464 15.3536C10.8543 15.5615 11.1959 15.546 11.3841 15.3201L16.3841 9.3201C16.5609 9.10797 16.5322 8.79268 16.3201 8.6159C16.108 8.43912 15.7927 8.46778 15.6159 8.67992L10.9664 14.2593L8.85355 12.1465Z" fill="white" />
                  </Svg>
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
