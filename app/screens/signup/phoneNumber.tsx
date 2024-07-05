import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../features/userData/userDataSlice";
import { router } from "expo-router";
import { RootState } from "../../store";

export default function PhoneNumber() {
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

  return (
    <View className="bg-white h-full w-full px-5">
      {/* Other components */}
      <TextInput
        className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <Pressable
        onPress={handleSaveUserData}
        className="mt-[56px] bg-[#636363] w-[361px] h-[52px] items-center justify-center rounded-[99px]"
      >
        <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
