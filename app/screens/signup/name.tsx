import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack } from "expo-router";
import { useDispatch } from "react-redux";
import { setUserData } from "../../features/userData/userDataSlice";
import { StatusBar } from "expo-status-bar";

export default function SignUpIndex() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleNextScreen = () => {
    // Dispatch the name to the store
    dispatch(
      setUserData({
        name,
        phoneNumber: "",
      })
    );
    // Navigate to the next screen (e.g., using navigation library)
    router.push("./phoneNumber");
  };
  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Sign Up", headerTitleAlign: "center" }}
      />
      <StatusBar style="dark" />
      <Text className="text-[12px] font-normal leading-[16px] py-[16px]">
        Enter the name you would like to go by
      </Text>
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        placeholder="Name"
        onChangeText={handleNameChange}
        // defaultValue={text}
      />
      <View className="items-center">
        <Pressable
          onPress={handleNextScreen}
          className="bg-[#636363] mt-[56px] w-full h-[52px] items-center justify-center rounded-[99px]"
        >
          <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Continue
          </Text>
        </Pressable>
        <Text className="text-[#242424] py-5 text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
          Or
        </Text>
        <Pressable className="space-x-3 border border-[#636363] flex-row w-full h-[52px] items-center justify-center rounded-[99px]">
          <Image
            className="h-5 w-5"
            source={require("../../../assets/images/googleLogo.png")}
          />
          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Continue with Google
          </Text>
        </Pressable>
        <Pressable className="space-x-3 border border-[#636363] flex-row w-full h-[52px] mt-4  items-center justify-center rounded-[99px]">
          <Image
            className="h-5 w-5"
            source={require("../../../assets/images/appleLogo.png")}
          />
          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Continue with Apple
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
