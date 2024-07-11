import { View, Text, Image, Pressable} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";

export default function Profile() {
  const handleWelcome = () => {
    router.replace("/");
  };
  return (
    <SafeAreaView className=" bg-white h-full w-full px-6 flex-1">
      <View className="h-[136px]">
        <View className="justify-center items-center" >
          <Image source={require("../../assets/images/avatar.png")}/>
        </View>
        <View className="flex flex-row  items-center p-3 gap-[8px]">
          <View className="w-[293px]">
            <Text className="text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Name</Text>
            <Text className="text-[13px] font-normal leading-[18px] text-[#616161] font-[400]">Phone number/email</Text>
          </View>
          <Image  source={require("../../assets/images/chevronRight.png")}/>
      </View>

      </View>
     
     <View className="flex flex-col  h-[336px] mt-[20px]">
      <View className="flex flex-row  p-3">
        <View className="flex flex-row gap-x-[12px] ">
          <Image  source={require("../../assets/images/settings.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Settings</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <View className="flex flex-row  p-3">
        <View className="flex flex-row gap-x-[12px]">
          <Image source={require("../../assets/images/security.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Login & security</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <View className="flex flex-row  p-3">
      <View className="flex flex-row gap-x-[12px]">
          <Image source={require("../../assets/images/help.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Help</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <View className="flex flex-row  p-3">
      <View className="flex flex-row gap-x-[12px]">
          <Image source={require("../../assets/images/feedback.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Give us feedback</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <View className="flex flex-row  p-3">
      <View className="flex flex-row gap-x-[12px]">
          <Image source={require("../../assets/images/legal.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">Legal</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <View className="flex flex-row  p-3">
      <View className="flex flex-row gap-x-[12px]">
          <Image source={require("../../assets/images/info.png")} />
          <Text className="w-[253px]text-[17px] font-normal leading-[22px] text-[#242424] font-[400]">About</Text>
        </View>
        <Image source={require("../../assets/images/chevronRight.png")}/>
      </View>
      <Pressable className="items-center justify-center">
        <Text className="text-[#C50F1F]">Log out</Text>
      </Pressable>

     </View>
    
    
    </SafeAreaView>
  );
}
