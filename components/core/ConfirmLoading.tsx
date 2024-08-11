import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { Banknote, Info, Star } from "lucide-react-native";
import {
  ActivityIndicator,
  Badge,
  Chip,
  ProgressBar,
} from "react-native-paper";

export default function ConfirmLoading() {
  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="px-4 mt-2">
        <View className="flex-row space-x-5 justify-between item-center">
          <View className="flex-row items-center space-x-2 mt-3">
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Connecting to your driver
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                We're getting your driver ready. You'll be on your way in no
                time.
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-5 justify-center item-center mt-8">
          <ActivityIndicator animating={true} color="#636363" size="large" />
        </View>
      </View>
    </View>
  );
}
