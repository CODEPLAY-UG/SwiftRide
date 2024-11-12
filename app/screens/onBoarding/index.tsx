import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
// import { ShieldPlus, Smile, TrafficCone } from "lucide-react-native";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/navigation/Button";
import SheildPlus from "@/assets/svgs/sheildPlus";
import Smile from "@/assets/svgs/smile";
import TrafficCone from "@/assets/svgs/trafficCone";

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
          <View className="flex-row justify-center space-x-8 ">
            <View className="items-center py-2 w-[80px]">
              <View className="py-2">
                <SheildPlus width={32} height={32} color="white" />
              </View>
              <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                {"Safer\nrides"}
              </Text>
            </View>
            <View className="items-center py-2 w-[80px]">
              <View className="py-2">
                <Smile width={32} height={32} color="white" />
              </View>
              <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                {"More bike\noptions"}
              </Text>
            </View>
            <View className="items-center py-2 w-[80px]">
              <View className="py-2">
                <TrafficCone width={32} height={32} color="white" />
              </View>
              <Text className="text-white text-[13px] text-center leading-[18px] tracking-[-0.08px]">
                {"Better\nnavigation"}
              </Text>
            </View>
          </View>
          <View className="px-3 space-y-3 mt-2">
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
