import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import { Fingerprint, ScanFace, SquareAsterisk } from "lucide-react-native";

export default function PassKey() {
  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "Pass Key",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className="justify-center items-center">
        <Image source={require("@assets/images/passkey.png")} />
      </View>
      <View className="h-12 px-4 pb-2 justify-center">
        <Text className="text-[#242424] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
          Create a Passkey
        </Text>
      </View>
      <View className="px-4 pt-2 pb-6">
        <Text className="text-[#616161]">
          Passkeys are easier to use and more secure than passwords for
          protecting your funds.
        </Text>
      </View>
      <View className="px-4 pr-6 pt-2 pb-6">
        <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
          With passkeys, you can always check your account balance by verifying
          with;
        </Text>
      </View>
      <View className="flex-row py-3 px-4 space-x-4">
        <View className="justify-center">
          <ScanFace color="#808080" size={40} />
        </View>
        <View className="">
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px] ">
            Face unlock
          </Text>
          <View className="pr-12">
            <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
              See your trip coins balance with a quick face scan
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row py-3 px-4 space-x-4">
        <View className="justify-center">
          <Fingerprint color="#808080" size={40} />
        </View>
        <View className="">
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Fingerprint unlock
          </Text>
          <View className="pr-20">
            <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
              Access your trip coins with a quick fingerprint scan
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row py-3 px-4 space-x-4">
        <View className="justify-center">
          <SquareAsterisk color="#808080" size={40} />
        </View>
        <View>
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">
            Device pin or pattern
          </Text>
          <View className="pr-20">
            <Text className="text-[13px] text-[#616161] leading-[18px] tracking-[-0.08px]">
              See your trip coins with a quick PIN or pattern unlock
            </Text>
          </View>
        </View>
      </View>
      <View className="pt-12 px-4 pb-2">
        <Pressable
          onPress={() => router.push("/screens/tasks/team3/keys")}
          className="bg-[#636363] w-full h-[52px] items-center justify-center rounded-[99px]"
        >
          <Text className="text-[#FFFFFF] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Create passkey
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
