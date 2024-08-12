import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { Banknote, ChevronRight, Info, Key, X } from "lucide-react-native";

export default function Payment() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "Payment",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      {isVisible && (
        <View className="flex-row justify-center space-x-4 py-3">
          <View className="justify-center">
            <Info color="#107C10" />
          </View>
          <Text className="text-[15px] leading-5 tracking-[0.23px] w-[248px] ">
            Add and manage your payment methods using our secure payment system.
          </Text>
          <View className="justify-center">
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <X color="#616161" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View className="h-12  justify-center px-4">
        <Text className="text-[17px] font-semibold  tracking-[0.4px] text-[#242424]">
          Wallet balance
        </Text>
      </View>
      <View className="h-[78px]  justify-center items-center flex-row">
        <Text className="text-[17px]">UGX</Text>
        <Text className="text-[60px]"> 0 </Text>
      </View>
      <View className="">
        <View className="h-12 justify-center px-4">
          <Text className="text-[17px] font-semibold tracking-[0.4px] text-[#242424]">
            Payment Methods
          </Text>
        </View>
        <View>
          <View className="py-3 px-4">
            <TouchableOpacity className="flex-row">
              <Banknote color="#808080" size={40} />
              <View className="px-4">
                <Text className="text-[17px]">Cash</Text>
                <Text className="text-[13px] leading-[18px] tracking-[0.08px] text-[#616161] w-[256px]">
                  You will be shown how much to pay at the end of the trip.
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="py-3 px-4">
            <TouchableOpacity
              onPress={() => router.push("/screens/tasks/team3/mtn")}
              className="flex-row "
            >
              <Image source={require("@assets/images/mtnlogo.png")} />
              <View className="px-4 grow">
                <Text className="text-[17px]">MTN mobile number</Text>
                <Text className="text-[#616161]">(number)</Text>
              </View>
              <View className="justify-center">
                <ChevronRight color="#808080" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="py-3 px-4">
            <TouchableOpacity
              onPress={() => router.push("/screens/tasks/team3/airtel")}
              className="flex-row"
            >
              <Image source={require("@assets/images/Airtellogo.png")} />
              <View className="px-4 grow">
                <Text className="text-[17px]">Airtel mobile number</Text>
                <Text className="text-[#616161]">(number)</Text>
              </View>
              <View className="justify-center">
                <ChevronRight color="#808080" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="h-12 justify-center px-4">
        <Text className="text-[17px] font-semibold tracking-[0.4px] text-[#242424]">
          Payment Security
        </Text>
      </View>

      <View className="py-3 px-4">
        <TouchableOpacity
          onPress={() => router.push("/screens/tasks/team3/passkey")}
          className="flex-row"
        >
          <Key color="#808080" size={40} />
          <View className="px-4 grow">
            <Text className="text-[17px]">Passkeys</Text>
            <Text className="text-[13px] w-[213px]">
              Secure your payments by adding a pass key
            </Text>
          </View>
          <View className="justify-center">
            <ChevronRight color="#808080" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
