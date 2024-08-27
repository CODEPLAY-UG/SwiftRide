import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";

import getMapSearches from "@services/mapSearchesGeo";
import Search from "@/assets/svgs/search";
import X from "@/assets/svgs/x";
import Mic from "@/assets/svgs/mic";

interface LocationSuggestion {
  text_en: string;
  place_name_en: string;
  geometry: {
    coordinates: string[];
  };
  // distance: number;
  // Add other properties as needed
}

export default function SearchComponent({
  placeholder = "Search",
  setIsTyping,
  setLocationSuggestions,
  setResult,
}: {
  placeholder?: string;
  setIsTyping: Dispatch<SetStateAction<boolean>>;
  setLocationSuggestions: Dispatch<SetStateAction<LocationSuggestion[]>>;
  setResult: Dispatch<SetStateAction<string>>;
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = async (input: string) => {
    setText(input);
    setIsTyping(input.length > 0);
    setResult(input);
    if (input.length > 0) {
      const locationSuggestions = await getMapSearches(input);
      setLocationSuggestions(locationSuggestions);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleTextClear = () => {
    setText("");
    setResult("");
    setLocationSuggestions([]);
    setIsTyping(0 > 0);
  };
  return (
    <View className="flex-row items-center justify-between mt-2 mx-4">
      <View className="flex-row bg-[#F0F0F0] rounded-[24px] h-[36px] flex-1 items-center">
        <View className="px-3 pt-2 ">
          <Search color="#616161" height={24} width={24} />
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
            <View className="mt-[2px]">
              <X color="white" height={24} width={24} />
            </View>
          ) : (
            <Mic color="#616161" height={20} width={20} />
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
