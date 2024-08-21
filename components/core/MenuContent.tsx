import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Banknote,
  ChevronRight,
  Cog,
  HeartHandshake,
  Info,
  MessageSquareDot,
  Scale,
  ShieldPlus,
} from "lucide-react-native";
import { router } from "expo-router";

export default function MenuContent() {
  return (
    <SafeAreaView className="px-5">
      <TouchableOpacity
        onPress={() => router.push("/screens/profileManagement")}
        className="flex-row items-center mt-10 space-x-3"
      >
        <View className="rounded-full h-14 w-14 justify-center items-center bg-[#636363]">
          <Image
            className="w-8 h-8"
            source={require("@assets/images/person.png")}
          />
        </View>
        <View className="">
          <View className="flex-row items-center space-x-1">
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] font-[600] ">
              Username
            </Text>
            <ChevronRight color="#242424" size={20} />
          </View>
          <Text className="text-[15px] leading-[20px] text-[#616161] tracking-[-0.23px]">
            Account centre
          </Text>
        </View>
      </TouchableOpacity>

      <View className="my-5 space-y-6 ">
        <TouchableOpacity
          onPress={() => router.push("/screens/payments/payment")}
          className="flex-row space-x-5 items-center"
        >
          <Banknote color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Payments
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/screens/profileManagement/settings")} className="">
        <View className="flex-row space-x-5 items-center">
          <Cog color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Settings
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/screens/profileManagement/login&Security")} className="">
        <View className="flex-row space-x-5 items-center">
          <ShieldPlus color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Log in and security
          </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/screens/profileManagement/helpCentre")} className="">
        <View className="flex-row space-x-5 items-center">
          <HeartHandshake color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Help
          </Text>
          </View>
          </TouchableOpacity>
        <View className="flex-row space-x-5 items-center">
          <MessageSquareDot color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Give us feedback
          </Text>
        </View>
        <View className="flex-row space-x-5 items-center">
          <Scale color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Legal
          </Text>
        </View>
        <View className="flex-row space-x-5 items-center">
          <Info color="#242424" size={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            About
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
