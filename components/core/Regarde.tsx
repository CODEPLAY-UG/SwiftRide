import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Mic, Search, X } from "lucide-react-native";
import { ProgressBar } from "react-native-paper";

export default function Regarde({
  placeholder = "Search",
  setIsTyping,
}: {
  placeholder?: string;
  setIsTyping: Dispatch<SetStateAction<boolean>>;
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [typingState, setTypingState] = useState(false);

  // Handle text changes and update the typingState state
  const handleTextChange = (input: string) => {
    setText(input);
    setTypingState(input.length > 0);
    setIsTyping(input.length > 0);
  };

  // Render the component
  return (
    <View className="mt-2 mx-4">
      <View className="flex-row items-center justify-between">
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
          <TouchableOpacity className="mx-[12px]" onPress={() => setText("")}>
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
          <TouchableOpacity onPress={() => setText("")}>
            <Text className="text-gray-700 ml-2">Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      {typingState && (
        <View className="mt-2">
          <ProgressBar indeterminate color="#636363" className="h-[1px]" />
        </View>
      )}
    </View>
  );
}
