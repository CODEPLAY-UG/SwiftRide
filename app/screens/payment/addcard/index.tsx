import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const addCard = () => {
  return (
    <SafeAreaView className="w-100 flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Add Card",
          headerTitleAlign: "center",
        }}
      />
      <View className="w-full items-center">
        <Image
          className="w-[361.4px] h-[250px]"
          source={require("../../../../assets/images/visa1.png")}
        />
      </View>

      <View className="">
        <View className="mx-5 border-b-2">
          <Text className="leading-[22px] text-[20px] font-[400] ">
            Card Number
          </Text>

          <View className="flex-row items-center space-x-1 my-3">
            <Image
              className="h-[45] w-[45]"
              source={require("../../../../assets/images/card.png")}
            />
            <TextInput keyboardType="numeric" className="w-[75%]" />
          </View>
        </View>

        <View className="flex-row w-full mt-5">
          <View className="w-[50%] mx-5 border-b-2">
            <Text className="leading-[22px] text-[20px] font-[400] ">
              Exp Date
            </Text>

            <View className="flex-row items-center space-x-1 my-3">
              <TextInput keyboardType="numeric" className="w-[100%]" />
            </View>
          </View>

          <View className="w-[35%] border-b-2">
            <Text className="leading-[22px] text-[20px] font-[400] ">
              Cvv Code
            </Text>

            <View className="flex-row items-center space-x-1 my-3">
              <TextInput keyboardType="numeric" className="w-[100%]" />
            </View>
          </View>
        </View>

        <Pressable className="bg-[#979797] border rounded-[15px] h-[55px] mx-10 items-center mt-5">
          <Text className="text-[#ffffff] text-[22px] text-center leading-[45px]">
            Add
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default addCard;
