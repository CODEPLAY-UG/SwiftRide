import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Search } from "lucide-react-native";
import Checkbox from "expo-checkbox";

export default function EmergencyContacts() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  
  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{ title: "Emergency contacts", headerTitleAlign: "center" }}
      />

      <Text className="py-[12px] px-[16px]">Choose Contact</Text>
      <View className="bg-[#F0F0F0] rounded-[24px] h-[36px] w-[343px] flex-row items-center mx-6">
        <Search color="#616161" size={20} className="px-4" />
        <TextInput
          className="flex-1"
          placeholder="Search"
          placeholderTextColor="#616161"
          selectionColor="#808080"
        />
      </View>
      <Text className="text-center p-[16px]">Select Contact</Text>
      <View className="flex-row items-center mx-10 py-5 space-x-4">
        <Checkbox
          
          className="rounded-full"
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? "#808080" : undefined}
        />
        <Image
          className="w-10 h-10 rounded-full"
          source={require("@assets/images/pink.png")}
        />
        <View className="">
          <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43]">
            Niklaus Wirth
          </Text>
          <Text className="text-[13px] text-[#808080] leading-[18px] tracking-[-0.08]">
            +256 792348567
          </Text>
        </View>
      </View>
      
     <View className="flex-row items-center mx-10 py-5 space-x-4">
        <Checkbox
         
          className="rounded-full"
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked2 ? "#808080" : undefined}
        />
        <Image
          className="w-10 h-10 rounded-full"
          source={require("@assets/images/pink.png")}
        />
        <View className="">
          <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43]">
            Luyinda Reagan
          </Text>
          <Text className="text-[13px] text-[#808080] leading-[18px] tracking-[-0.08]">
            +256 755565084
          </Text>
        </View>
      </View>


      <View className="items-center">
        <TouchableOpacity className="bg-[#636363] h-[52px] w-[361px] rounded-full justify-center items-center">
          <Text className="text-[#FFFFFF]">Add Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
