import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CalendarPlus,
  MapPin,
  MapPinned,
  Mic,
  Search,
  X,
} from "lucide-react-native";
import { router, Stack } from "expo-router";
import SearchComponent from "@/components/core/Search";
import { ProgressBar, MD3Colors } from "react-native-paper";
import Button from "@/components/core/Button";

export default function Index() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Your route",
          headerTitleAlign: "center",
          headerRight: () => <CalendarPlus color="#808080" size={24} />,
        }}
      />
      <View className="flex-row space-x-2 px-4 mb-3">
        <MapPin className="text-[#808080] w-6 h-6" />
        <Text className="text-[#616161] font-[17px]">
          Current user location
        </Text>
      </View>
      <View>
        <SearchComponent setIsTyping={setIsTyping} placeholder="Destination" />
      </View>
      {isTyping && (
        <View className="mt-2">
          <ProgressBar indeterminate color="#636363" className="h-[1px]" />
        </View>
      )}

      <View>
        <View className="mx-6 flex-row justify-between items-center mt-3">
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

        <View className="py-2 mx-6 flex-row justify-between items-center mt-3">
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

        <Pressable
          onPress={() => router.push("./unknown")}
          // className="bg-[#636363] flex-row justify-center p-5 mx-3 rounded-[99px] mt-10">
          className="mt-[56px] bg-[#636363] h-[52px] items-center justify-center rounded-[99px]">
          <Text className="text-white font-[400] text-[17px]">
            Confirm destination
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
