import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "@/components/core/Search";
import { router, Stack } from "expo-router";
// import { Switch } from "rn-inkpad";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import Marker from "@/components/core/Marker";
import GoogleIcon from "@/assets/svgs/google";
import AppleIcon from "@/assets/svgs/apple";
import { Checkbox, RadioButton, Switch } from "react-native-paper";
import CheckBox from "@/components/core/CheckBox";
import Toggle from "@/components/core/Toggle";

export default function test() {
  const [confirmed, setConfirmed] = useState(false);
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState("first");
  const [isOn, setIsOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="h-full bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
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

      <View className="py-1">
        <RadioButton
          value="first"
          color="#32cd32"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
      </View>

      <CheckBox />

      <View className="justify-center items-center">
        <Toggle
          isOn={isOn}
          onToggle={() => setIsOn(!isOn)}
          // label="Toggle Switch"
        />
      </View>

      <View className="my-5">
        <Marker />
      </View>
    </View>
  );
}
