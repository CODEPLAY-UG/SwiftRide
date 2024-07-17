import { View, Text, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";

export default function Otp() {
  return (
    <View className="bg-white h-full w-full px-6">
      <Stack.Screen options={{ title: "otp", headerTitleAlign: "center" }} />
      <Text className="text-[12px] mt-1 font-normal py-[12px] leading-[16px]">
        Enter OTP code
      </Text>
      <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" />

      <Text className="text-[12px] mt-1 font-normal  leading-[16px] ">
        Code sent via SMS to number
      </Text>
      <View className="flex gap-[12px]  mt-[60px] justify-center">
        <View className="pt-[24px] pr-[19px] justify-center pb-[8px] gap-x-[17px] w-[] flex-row i ">
          <View className=" p-[2px]">
            <Image
              
              source={require("../../../assets/images/icon2.png")}
            />
          </View>
          <Text className="text-[#616161] mb -[16px]">
            By selecting Agree and Continue, I agree to SwiftRide's{" "}
            <Text className="text-[#0078D4]">
              {" "}
              Terms of service, Payment Terms of Service{" "}
            </Text>{" "}
            and the <Text className="text-[#0078D4]">Privacy Policy</Text>
          </Text>
        </View>
        <Link  href="./location" asChild className="items-center flex">
        
          <Pressable className=" flex bg-[#636363] h-[52px] items-center justify-center rounded-[99px]">
            <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Agree and continue
            </Text>
          </Pressable>
        </Link>
        <Link href="./signup" asChild>
          <Pressable className=" h-[52px] items-center justify-center">
            <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px] p">
              I did not receive a code
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
