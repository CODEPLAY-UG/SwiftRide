import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SearchComponent from "@/components/core/Search";
import { router, Stack } from "expo-router";
import { Switch } from "rn-inkpad";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import Marker from "@/components/core/Marker";

export default function test() {
  const [confirmed, setConfirmed] = useState(false);
  const navigation = useNavigation();
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
          Open Drawer
        </Text>
      </TouchableOpacity>

      <View className="">
        <Switch
          backgrounColor="#DB504A"
          border
          borderColor="#DB504A"
          // fullWidth={true}
          isOn={confirmed}
          justifyContent="center"
          onChange={setConfirmed}
          fullWidth
          // text="Turn on notifications"
        />
      </View>
      <View className="my-5">
        <Marker />
      </View>
    </View>
  );
}
