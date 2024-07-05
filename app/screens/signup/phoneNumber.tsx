import { View, Text, TextInput, Pressable} from "react-native";
import React from 'react';
import { Stack, Link} from "expo-router";

export default function PhoneNumber() {
 
  return (
    <View className="bg-white h-full w-full px-5">
       <Stack.Screen
        options={{ title: "phone number", headerTitleAlign: "center" }}
      />
       <Text className="text-[12px] mt-1 font-normal leading-[16px]  py-[12px]">
        Enter your phone number
      </Text>
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        placeholder="Phone number"
      />
      <Link  href="./Otp" className="mt-[56px]" asChild>
      <Pressable className="mt-[56px] bg-[#636363] w-[361px] h-[52px] items-center justify-center rounded-[99px]">
            <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Continue
            </Text>
          </Pressable>
      </Link>
       
    </View>
  )
}