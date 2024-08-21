import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mic, Search, X } from "lucide-react-native";
import { Stack } from "expo-router";

interface LocationSuggestion {
  name: string;
  place_formatted: string;
  distance: number;
  // Add other properties as needed
}

import getMapSearches from "@services/mapSearches";

export default function SearchComponent({
  placeholder = "Search",
  setIsTyping,
  setLocationSuggestions,
}: {
  placeholder?: string;
  setIsTyping: Dispatch<SetStateAction<boolean>>;
  setLocationSuggestions: Dispatch<SetStateAction<LocationSuggestion[]>>;
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = async (input: string) => {
    setText(input);
    setIsTyping(input.length > 0);
    if (input.length > 0) {
      const locationSuggestions = await getMapSearches(input);
      setLocationSuggestions(locationSuggestions);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleTextClear = () => {
    setText("");
    setLocationSuggestions([]);
    setIsTyping(0 > 0);
  };
  return (
    <View className="flex-row items-center justify-between mt-2 mx-4">
      <View className="flex-row bg-[#F0F0F0] rounded-[24px] h-[36px] flex-1 items-center">
        <View className="px-3">
          <Search color="#616161" size={20} />
        </View>
        <TextInput
          className="flex-1 font-normal text-[17px] text-[#616161] leading-[22px] tracking-[0.43px]"
          placeholder={placeholder}
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity className="mx-[12px]" onPress={handleTextClear}>
          {text.length > 0 ? (
            <View className="bg-[#616161] p-[3px] rounded-full">
              <X color="white" size={16} />
            </View>
          ) : (
            <Mic color="#616161" size={20} />
          )}
        </TouchableOpacity>
      </View>

      {isFocused && (
        <TouchableOpacity onPress={handleTextClear}>
          <Text className="text-gray-700 ml-2">Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
function setIsTyping(arg0: boolean) {
  throw new Error("Function not implemented.");
}
