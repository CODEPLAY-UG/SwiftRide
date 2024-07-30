import { View, Text, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import { Info } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

export default function Otp() {
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Sign up",
          headerTitleAlign: "center",
        }}
      />
      <StatusBar style="dark" />
      <Text className="text-[12px] font-normal py-[12px] leading-[16px]">
        Enter OTP code
      </Text>
      <TextInput
        keyboardType="numeric"
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
      />

      <Text className="text-3 mt-1 leading-[16px] ">
        Code sent via SMS to number
      </Text>
      <View className="gap-3 mt-5 items-center">
        <View className="pt-6 px-4 pb-2 space-x-3 flex-row justify-center">
          <View className="py-[2px]">
            <Info size={16} color="#808080" />
          </View>
          <Text className="text-[#616161] text-[13px] leading-[18px] tracking-[-0.08px]">
            By selecting Agree and continue, I agree to SwiftRide's{" "}
            <Text className="text-[#0078D4]">
              {" "}
              Terms of service, Payment Terms of Service{" "}
            </Text>{" "}
            and the <Text className="text-[#0078D4]">Privacy Policy</Text>
          </Text>
        </View>
        <View className="flex items-center justify-center w-full">
          <Link href="./location" className="mt-[16px] " asChild>
            <Pressable className=" bg-[#636363] w-full h-[52px] items-center justify-center rounded-[99px]">
              <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                Agree and continue
              </Text>
            </Pressable>
          </Link>
        </View>
        <Link href="./signup" asChild>
          <Pressable className=" w-[361px] h-[52px] items-center justify-center">
            <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px] p">
              I did not receive a code
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
