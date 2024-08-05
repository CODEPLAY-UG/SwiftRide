import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "@/components/core/Search";
import { router, Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import Marker from "@/components/core/Marker";
import GoogleIcon from "@/assets/svgs/google";
import AppleIcon from "@/assets/svgs/apple";
import CheckBox from "@/components/core/CheckBox";
import Toggle from "@/components/core/Toggle";

export default function test() {
  const [confirmed, setConfirmed] = useState(false);
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState("first");
  const [isOn, setIsOn] = useState(false);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handlePress = (option: number) => {
    setSelectedOption(option);
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView className="h-full bg-white pt-10">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "Here we go",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
        }}
      />
      <SearchComponent
        placeholder="Going somewhere?"
        setIsTyping={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        // }
        className="my-5  flex justify-center items-center"
      >
        <Text className="text-lg rounded-lg w-fit bg-[#32cd32] px-3 py-1 text-pink-600">
          Open Drawers
        </Text>
      </TouchableOpacity>

      <View className="flex-row pb-2 justify-center gap-x-4">
        <GoogleIcon
          className=""
          onPress={function (): void {}}
          width={50}
          height={50}
        />
        <AppleIcon className="" width={50} height={50} />
      </View>

      <CheckBox />

      <View className="justify-center items-center">
        <Toggle
          isOn={isOn}
          onToggle={() => setIsOn(!isOn)}
          // label="Toggle Switch"
        />
      </View>

      <View className="my-5 p-5 bg-[#ffc8dd]">
        <Marker />
      </View>
    </SafeAreaView>
  );
}
