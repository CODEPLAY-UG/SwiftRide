import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { BookUser, ChevronRight } from "lucide-react-native";

export default function safety() {
  return (
    <View className="mx-4">
      <Stack.Screen options={{ title: "Safety", headerTitleAlign: "center" }} />
      <View className="items-center">
        <Image
          className="w-[200px] h-[200px]"
          source={require("@assets/images/safety.png")}
        />
      </View>
      <View className="mx-3">
        <Text className="text-[13px] leading-[18px] tracking-[-0.08px] text-[#616161]">
          Enable your safety features for a smooth and safe journey.
        </Text>
      </View>
      <View className="">
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
        <Pressable onPress={()=>{}} className="mx-3 py-4 flex-row justify-between">
          <View className="space-x-4 flex-row">
            <BookUser color="#808080" size={20} />
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Emergency contacts
            </Text>
          </View>
          <ChevronRight color="#808080" size={20} />
        </Pressable>
      </View>
    </View>
  );
}
