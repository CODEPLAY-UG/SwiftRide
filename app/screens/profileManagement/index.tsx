import { View, Text, Image, Pressable, Switch, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, router } from "expo-router";
import { BellIcon, ChevronRight, CogIcon, HeartHandshakeIcon, InfoIcon, MessageSquareDot, ScaleIcon, ShieldCheckIcon, SunMoon } from "lucide-react-native";
import profileIcon from "@/assets/svg/profileIcon";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
import ProfileIcon from "@/assets/svg/profileIcon";

export default function Profile() {
  function onToggleSwitch(value: boolean): void | Promise<void> {
    throw new Error("Function not implemented.");
  }

  const profileIcon = (props: { readonly preserveAspectRatio?: string | undefined } & {}) => <Svg width={81} height={80} viewBox="0 0 81 80" fill="none"></Svg>;
  return (
    <SafeAreaView className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Profile",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 28, // Adjust the font size
           fontWeight: "bold", // Adjust the font weight
          },
        }}
      />
<View className="justify-center items-center mb-[12px] ">
          <ProfileIcon width={72} height={72} />
        </View>


      
      <View className="flex gap-x-[2px]">
        

        <View className="flex-row justify-between items-center py-3 pl-3">
          <View className="">
            <TouchableOpacity onPress={() => router.push("./accountInfo")} className="">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Name</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">Phone number {"\n"}Email</Text>
            </TouchableOpacity>
          </View>
          <View className="">
            <TouchableOpacity onPress={() => router.push("./accountInfo")} className="">
              <ChevronRight color="#808080" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex flex-col gap-y-[24px]">
        <View className="flex-row justify-between items-center ">
          <View className="">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">App settings</Text>
          </View>
        </View>


        <TouchableOpacity onPress={() => router.push("./settings")} className="">
          <View className="flex-row justify-between items-center ">
            <View className="flex-row items-center">
              <Link href="./settings" className="mt-5 mb-2" asChild>
                <CogIcon color="#808080" size={28} />
              </Link>
              <View className="mx-4">
                <Link href="./settings" className="mt-5 mb-2" asChild>
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Settings</Text>
                </Link>
              </View>
            </View>
            <View className="">
              <Link href="./settings" className="mt-5 mb-2" asChild>
                <ChevronRight color="#808080" size={20} />
              </Link>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./login&Security")} className="">
          <View className="flex-row justify-between items-center ">
            <View className="flex-row items-center">
              <ShieldCheckIcon color="#808080" size={28} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Login & security</Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./helpCentre")} className="">
          <View className="flex-row justify-between items-center ">
            <View className="flex-row items-center">
              <HeartHandshakeIcon color="#808080" size={28} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Visit help centre</Text>
              </View>
            </View>
            <View className="">
              <ChevronRight color="#808080" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <MessageSquareDot color="#808080" size={28} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Give us feedback</Text>
            </View>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <ShieldCheckIcon color="#808080" size={28} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Safety & supportk</Text>
            </View>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <ScaleIcon color="#808080" size={28} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">Legal</Text>
            </View>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <InfoIcon color="#808080" size={28} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">About</Text>
            </View>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <Pressable className="items-center justify-center ">
          <Text className="  text-[#C50F1F] font-[400]  text-[17px] leading-[22px]">Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
