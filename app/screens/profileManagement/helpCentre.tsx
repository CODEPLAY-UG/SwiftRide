import {
  View,
  Switch,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import {
  ArrowLeft,
  BellIcon,
  ChevronRight,
  Lock,
  Phone,
  SparklesIcon,
  SunMoon,
  WalletIcon,
} from "lucide-react-native";
import { Button } from "react-native-paper";
import CustomSwitch from "@/CustomSwitch";

export default function Helpcentre() {
  function handleHelpcentre(text: string): void {}

  const [contacts, setContacts] = useState(false);
  const toggleContacts = () => {
    setContacts((previousState) => !previousState);
  };

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Help centre",
          headerTitleAlign: "center",
        }}
      />
      <View className="space-y-5 mt-[12px]">
        <TouchableOpacity onPress={() => router.push("./getting")} className="">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <SparklesIcon color="#808080" size={24} />
              <View className="mx-4">
                <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                  Getting started with SwiftRide
                </Text>
                <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                  An introduction to how the app works
                </Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <WalletIcon color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
                Paying for your trip
              </Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                Find out how we price our rides
              </Text>
            </View>
          </View>

          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View>
          <CustomSwitch isEnabled={contacts} toggleSwitch={setContacts} />
        </View>
      </View>
    </View>
  );
}
