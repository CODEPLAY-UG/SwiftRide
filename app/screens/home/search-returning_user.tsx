import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchComponent from "@/components/core/Search";
import { Stack } from "expo-router";
import {
  CalendarPlus,
  ChevronRight,
  Lock,
  MapPin,
  MapPinned,
} from "lucide-react-native";
import {
  ProgressBar,
  MD3Colors,
  MD2Colors,
  ActivityIndicator,
} from "react-native-paper";

export default function Placeorder() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Your route",
          headerTitleAlign: "center",
          headerRight: () => <CalendarPlus color="#808080" size={24} />,
        }}
      />
      <View className="space-y-4">
        <View className="space-y-5 mt-[12px]">
          <View className="flex-row justify-between items-center">
            <View className="mx-6 flex-row items-center">
              <MapPin color="#808080" size={24} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                  Current user location
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="py-1">
          <SearchComponent placeholder="Destination" setIsTyping={setIsTyping} />
          {isTyping && (
            <View className="mt-2">
              <ProgressBar indeterminate color="#636363" className="h-[1px]" />
            </View>
          )}
        </View>
        <View className="mx-8 py-4">
          <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">
            Recent destinations
          </Text>
        </View>
        <View className="mx-6 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <MapPin color="#808080" size={24} />
            <View className="mx-4">
              <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                Address
              </Text>
              <Text className=" text-[#616161] text-[13px] leading-[18px] tracking-[-0.08]">
                Road, District/City
              </Text>
            </View>
          </View>
        </View>
        <View className="py-2 mx-6 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <MapPin color="#808080" size={24} />
            <View className="mx-4">
              <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                Address
              </Text>
              <Text className=" text-[#616161] text-[13px] leading-[18px] tracking-[-0.08]">
                Road, District/City
              </Text>
            </View>
          </View>
        </View>
        <View className="space-y-5 mt-[12px]">
          <View className="flex-row justify-between items-center">
            <View className="mx-6 flex-row items-center">
              <MapPinned color="#808080" size={24} />
              <View className="mx-4">
                <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                  Select location on map
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
