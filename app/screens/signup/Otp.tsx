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
      <View className="flex gap-[12px] mt-[20px] w-[361px] justify-center">
        <View className="pt-[24px] px-[16px] pb-[8px] gap-[16px] flex-row ">
          <Image
            className="h-4 w-4 p-[4px]"
            source={require("../../../assets/images/warning.png")}
          />
          <Text className="text-[#616161]">
            By selecting Agree and Continue, I agree to SwiftRide's{" "}
            <Text className="text-[#0078D4]">
              {" "}
              Terms of service, Payment Terms of Service{" "}
            </Text>{" "}
            and the <Text className="text-[#0078D4]">Privacy Policy</Text>
          </Text>
        </View>
        <Link  href="./location" asChild className="items-center ">
        
          <Pressable className="bg-[#636363] w-[361px] h-[52px] items-center justify-center rounded-[99px]">
            <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Agree and Continue
            </Text>
          </Pressable>
        </Link>
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
