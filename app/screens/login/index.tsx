import { View, Text, TextInput, Pressable, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../features/userData/userDataSlice";
import { Link, router, Stack } from "expo-router";
import { RootState } from "../../store";
import { StatusBar } from "expo-status-bar";

export default function login() {
  function handleLogin(text: string): void {}
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.userData.name);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  const handleSaveUserData = () => {
    // Dispatch both name and phone number to the store
    dispatch(
      setUserData({
        name,
        phoneNumber,
      })
    );
    // You can also navigate to another screen or perform any other action
    router.push("./Otp");
  };

  function handleNextScreenLogin(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen options={{ title: "Log in", headerTitleAlign: "center" }} />
      <StatusBar style="dark" />
      <View className="m-4">
        <View className="">
          <Text className="text-[#242424] text-[20px] font-semibold leading-[25px] tracking-tighter[-0.45]">Welcome back (userName)</Text>
        </View>

        <Text className="text-[12px] font-normal leading-[16px] py-[16px]">Enter OTP code</Text>
        <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" value={phoneNumber} onChangeText={handlePhoneNumberChange} keyboardType="numeric" />
        <Text className="text-[12px] font-normal leading-[16px] py-[16px]">Code sent via SMS to (number)</Text>

        <View className="">
          <Link href="./loginindex" className="mt-5 mb-2" asChild>
            <Pressable className="bg-[#636363] mt-[56px] w-full h-[52px] items-center justify-center rounded-[99px]">
              <TouchableOpacity onPress={() => router.push("./loginindex")} className="">
                <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">Continue</Text>
              </TouchableOpacity>
            </Pressable>
          </Link>
        </View>

        <View className="items-center justify-center">
          <Text className="text-[#636363] text-[17px] font-semibold leading-[22px] py-[16px]">I did not receive a code</Text>
        </View>
      </View>
    </View>
  );
}
