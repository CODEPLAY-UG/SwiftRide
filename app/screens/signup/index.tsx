import { View, Text, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function SignUpIndex() {
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Sign Up", headerTitleAlign: "center" }}
      />
      <Text className="text-[12px] mt-1 font-normal leading-[16px]">
        Enter the name you would like to go by
      </Text>
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        placeholder="Name"
        // onChangeText={(newText) => setText(newText)}
        // defaultValue={text}
      />
      <View className="items-center">
        <Link href="./phoneNumber" className="mt-[56px]" asChild>
          <Pressable className="bg-[#636363] w-[361px] h-[52px] items-center justify-center rounded-[99px]">
            <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
              Continue
            </Text>
          </Pressable>
        </Link>
        <Text className="text-[#242424] py-5 text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
          Or
        </Text>
        <Pressable className="space-x-3 border border-[#636363] flex-row w-[361px] h-[52px] items-center justify-center rounded-[99px]">
          <Image
            className="h-5 w-5"
            source={require("../../../assets/images/googleLogo.png")}
          />
          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Continue with Google
          </Text>
        </Pressable>
        <Pressable className="space-x-3 border border-[#636363] flex-row w-[361px] h-[52px] mt-4  items-center justify-center rounded-[99px]">
          <Image
            className="h-5 w-5"
            source={require("../../../assets/images/appleLogo.png")}
          />
          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Continue with Apple
          </Text>
        </Pressable>
        <Pressable className="space-x-3 flex-row w-[361px] h-[52px] mt-4  items-center justify-center rounded-[99px]">
          <Image
            className="h-[15px] w-[15px]"
            source={require("../../../assets/images/searchLogo.png")}
          />
          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Find my account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
