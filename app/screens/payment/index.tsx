import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const handleNavigation = () => {
    router.push("./addcard");
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-row px-2 mt-1 w-full">
        <Image
          className="h-[15px] width-[15px] mx-0"
          source={require("../../../assets/images/times.png")}
        />
        <Text className="leading-[22px] text-[20px] font-[600]">
          Deposit Money to your Wallet
        </Text>
      </View>
      <Text className="leading-[22px] text-[20px] font-[600] text-center m-5">
        Select Method to deposit Money
      </Text>

      <Pressable className="my-3" onPress={handleNavigation}>
        <View className=" mx-5 flex-row h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Image
              className="h-[54.47px] w-[70px]"
              source={require("../../../assets/images/visa.png")}
            />
            <Text className="leading-[22px] text-[18px] font-[400] text-center">
              Credit/Debit
            </Text>
          </View>
          <Image
            className="h-[20px] w-[20px]"
            source={require("../../../assets/images/row_right.png")}
          />
        </View>
      </Pressable>

      <Pressable className="my-3">
        <View className="flex-row mx-5 p-2 h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Image
              className="h-[38.17px] w-[100px]"
              source={require("../../../assets/images/airtel.png")}
            />
            <Text className="leading-[22px] text-[18px] font-[400] text-center">
              Airtel Money
            </Text>
          </View>
          <Image
            className="h-[20px] w-[20px]"
            source={require("../../../assets/images/row_right.png")}
          />
        </View>
      </Pressable>

      <Pressable className="my-3">
        <View className="flex-row mx-5 p-2 h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Image
              className="h-[40px] w-[80px]"
              source={require("../../../assets/images/mtn.png")}
            />
            <Text className="leading-[22px] text-[18px] font-[400] text-center">
              MTN Moblie Money
            </Text>
          </View>
          <Image
            className="h-[20px] w-[20px]"
            source={require("../../../assets/images/row_right.png")}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
