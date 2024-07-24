import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { ChevronRight, SunMoon } from "lucide-react-native";

export default function Profile() {
  return (
    <SafeAreaView className=" bg-white h-full w-full px-6 flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Profile",
        }}
      />

      <View className=" flex h-[136px] gap-x-[2px]">
        <View className="justify-center items-center">
          <Image className="h-[72px] w-[72px]" source={require(".../../../assets/images/profil.png")} />
        </View>
        <Pressable>
          <View className="flex flex-row  items-center p-4 gap-x-[21px]">
            <View>
              <Text className="text-[17px] font-normal leading-[22px] text-[#242424]">Name</Text>
              <Text className="text-[13px] font-normal leading-[18px] text-[#616161]">Phone number/email</Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View className="flex flex-col gap-y-[24px] h-[336px] mt-[20px]">
        <View className="flex flex-row gap-x-[2px]  ">
          <SunMoon color="#808080" size={20} />
          <View className="flex flex-row gap-x-[12px]  ">
            <Text className=" w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Settings</Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </View>

        <View className="flex flex-row gap-x-[2px] ">
          <SunMoon color="#808080" size={20} />
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Login & security</Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </View>

        <View className="flex flex-row gap-x-[2px]  ">
          <SunMoon color="#808080" size={20} />
          <View className="flex flex-row gap-x-[12px]  ">
            <Text className=" w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Visit help centre</Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex flex-row gap-x-[2px] ">
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px]  text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Help</Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>
        <View className="flex flex-row gap-x-[2px]">
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Give us feedback</Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex flex-row gap-x-[2px] ">
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px]">Safety & support</Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex flex-row gap-x-[2px] ">
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px] ">Legal</Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>

        <View className="flex flex-row gap-x-[2px] ">
          <View className="flex flex-row gap-x-[12px]">
            <Text className="w-[280px] text-[17px] font-normal leading-[22px] text-[#242424] p-[1px]">About</Text>
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
