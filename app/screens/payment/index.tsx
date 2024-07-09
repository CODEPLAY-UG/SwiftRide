import { View, Text, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-row px-2 w-full">
        <Image
          className="h-[20px] width-[20px] p-1"
          source={require("../../../assets/images/times.png")}
        />
        <Text className="leading-[22px] text-[20px] font-[600]">
          Deposit Money to your Wallet
        </Text>
      </View>
      <Text className="leading-[22px] text-[20px] font-[600] text-center m-5">
        Select Method to deposit Money
      </Text>

      <View className="flex-row m-5 p-2 h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
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

      <View className="flex-row m-5 p-2 h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
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

      <View className="flex-row m-5 p-2 h-[108px] rounded-[15px] bg-[#D9D9D9] items-center justify-between">
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
    </View>
  );
};

export default index;
