import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarPlus, MapPin, Mic, Search, X } from "lucide-react-native";
import { router, Stack } from "expo-router";
import SearchComponent from "@/components/core/Search";
import { ProgressBar, MD3Colors } from "react-native-paper";

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
      <SearchComponent setIsTyping={setIsTyping} placeholder="Destination" />
      {isTyping && (
        <View className="mt-2">
          <ProgressBar indeterminate color="#636363" className="h-[1px]" />
        </View>
      )}
    </SafeAreaView>
  );
}
