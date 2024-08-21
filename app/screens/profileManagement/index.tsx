import { View, Text, Image, Pressable, Switch, TouchableOpacity, Settings } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, router } from "expo-router";
import { AlignCenter, BellIcon, ChevronRight, CogIcon, HeartHandshakeIcon, InfoIcon, MessageSquareDot, ScaleIcon, ShieldCheckIcon, SunMoon } from "lucide-react-native";
import profileIcon from "@/assets/svg/profileIcon";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
import ProfileIcon from "@/assets/svg/profileIcon";
import SettingsIcon from "@/assets/svgs/settingsIcon";
import ArrowIcon from "@/assets/svgs/arrowIcon";
import ShieldIcon from "@/assets/svgs/shieldIcin";
import HearthandIcon from "@/assets/svgs/hearthandIcon";
import MessageIcon from "@/assets/svgs/messageIcon";
import LegalIcon from "@/assets/svgs/legalIcon";
import AboutIcon from "@/assets/svgs/aboutIcon";

export default function Profile() {
  function onToggleSwitch(value: boolean): void | Promise<void> {
    throw new Error("Function not implemented.");
  }

  const profileIcon = (props: { readonly preserveAspectRatio?: string | undefined } & {}) => <Svg width={81} height={80} viewBox="0 0 81 80" fill="none"></Svg>;
  return (
    <SafeAreaView className="bg-white h-full w-full">
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
      <View className="-mt-9 ">
        <View className="justify-center items-center">
          <TouchableOpacity onPress={() => router.push("./accountInfo")} className="">
            <ProfileIcon width={72} height={72} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("./accountInfo")} className="">
          <View className="gap-[24px] mt-3 justify-between flex-row items-center px-4">
            <View className="">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">Name</Text>
              <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-[-0.08]">Phone number {"\n"}Email</Text>
            </View>
            <View className="">
              <ArrowIcon />
            </View>
          </View>
        </TouchableOpacity>

        <View className="-mb-2">
          <View className=" gap-[24px] mt-2 flex-row items-center px-4">
            <View className="">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">App settings</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("./settings")} className="">
          <View className="">
            <View className=" gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <SettingsIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Settings</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./login&Security")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <ShieldIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Login & security</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./helpCentre")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <HearthandIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Visit help centre</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <MessageIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Give us feedback</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <ShieldIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]"> Safety & support</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <LegalIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]"> Legal</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("")} className="">
          <View className="">
            <View className="gap-[24px] mt-2 justify-between flex-row items-center px-4">
              <View className="flex-row -mx-3 items-center">
                <AboutIcon />
                <View className="mx-3">
                  <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">About</Text>
                </View>
              </View>
              <View className="">
                <ArrowIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Pressable className="gap-[24px] mt-2 items-center justify-center ">
          <Text className="  text-[#C50F1F] font-[400]  text-[17px] leading-[22px]">Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
