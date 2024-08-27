import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../features/userData/userDataSlice";
import { router, Stack } from "expo-router";
import { RootState } from "../../store";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../../utils/AuthContext";
import { firebase } from "@react-native-firebase/auth";
import axios from "axios";

export default function PhoneNumber() {
  // const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.userData.name);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { signInWithPhoneNumber, user, usertoken } = useAuth();

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  const handlePhoneNumber = async () => {
    try {
      await signInWithPhoneNumber(phoneNumber);
      router.push("./Otp");
    } catch (error) {
      console.error("Message Error", error.message)};}

  

  const handlephoneFromGoogleSignin = async () => {
    // Dispatch both name and phone number to the store

    try {
      const firebasetoken = usertoken;
      console.log(firebasetoken)
      console.log(phoneNumber)
      const response = await axios.put('http://192.168.1.4:8000/auth/update_user/', {
        phone_number: phoneNumber
      }, {
        headers: {
          "Authorization": `Bearer ${firebasetoken}`,
          "Content-Type": "application/json"
        },
      });

    // You can also navigate to another screen or perform any other action
    router.push("../home");
  } catch (error) {
    console.log("Error sending phone number to server", error.message)
  }
};

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Sign up",
          headerTitleAlign: "center",
        }}
      />
      <StatusBar style="dark" />
      {/* Other components */}
      <Text className="text-[12px] font-normal leading-[16px] py-[16px]">
        Enter the phone number you would like to use
      </Text>
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        placeholder="07...."
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="default"
      />
      <Pressable
        onPress={user ? handlephoneFromGoogleSignin : handlePhoneNumber}
        className="mt-[56px] bg-[#636363] h-[52px] items-center justify-center rounded-[99px]"
      >
        <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
