import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { ShieldPlus, Smile, TrafficCone } from "lucide-react-native";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/navigation/Button";

export default function onBoarding() {
  return (
    <View className="w-full h-full">
      <StatusBar style="light" />

      <Stack.Screen options={{ headerShown: false }} />

      <ImageBackground
        className="h-full w-full justify-end"
        source={require("@assets/images/onboarding.jpg")}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0)",
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.9)",
          ]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "50%",
          }}
        />
        <View className="my-10 z-10">
          <View>
            <Text className="text-white text-[34px] font-[700] text-center leading-[41px] tracking-[0.4px]">
              {"Ride in greater\ncomfort"}
            </Text>
            <View className="flex-row justify-center space-x-16 p-8">
              <View className="items-center">
                <ShieldPlus size={24} color="white" />
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"Safer\nrides"}
                </Text>
              </View>
              <View className="items-center">
                <Smile size={24} color="white" />
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"More bike\noptions"}
                </Text>
              </View>
              <View className="items-center justify-center">
                <TrafficCone size={24} color="white" />
                <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                  {"Better\nnavigation"}
                </Text>
              </View>
            </View>
          </View>

          <View className="px-3 space-y-3">
            <Button
              title="Log in"
              onPress={() =>
                router.push("/screens/onBoarding/login_phoneNumber")
              }
            />
            <Button
              title="Sign up"
              variant="outline"
              className=""
              onPress={() => router.push("/screens/onBoarding/name")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
