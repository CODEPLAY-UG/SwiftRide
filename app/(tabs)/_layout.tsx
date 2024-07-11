import { router, Tabs } from "expo-router";
import React from "react";

import { ArrowLeft } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Image, Text, processColor } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerTitleStyle: {
          fontWeight: "semibold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View className="mt-4 justify-center items-center space-y-1">
              <Image
                className="w-[22.5px] h-[21px]"
                source={require("@assets/images/home.png")}
                style={{ tintColor: focused ? "#4442D2" : "#808080" }}
              />
              <Text
                style={{
                  color: focused ? "#4442D2" : "#808080",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          headerShown: true,
          headerLeft: () => (
            <ArrowLeft className="ml-4" onPress={router.back} color="black" />
          ),
          headerTitle: "Rider History",
          tabBarIcon: ({ color, focused }) => (
            <View className="mt-4 justify-center items-center space-y-1">
              <Image
                className="w-[22.5px] h-[21px]"
                source={require("@assets/images/activity.png")}
                style={{ tintColor: focused ? "#4442D2" : "#808080" }}
              />
              <Text
                style={{
                  color: focused ? "#4442D2" : "#808080",
                  fontSize: 12,
                }}
              >
                Activity
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View className="mt-4 justify-center items-center space-y-1">
              <Image
                className="w-[22.5px] h-[21px]"
                source={require("@assets/images/profile.png")}
                style={{ tintColor: focused ? "#4442D2" : "#808080" }}
              />
              <Text
                style={{
                  color: focused ? "#4442D2" : "#808080",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
