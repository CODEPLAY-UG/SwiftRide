import { View, Text, Pressable, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Info } from "lucide-react-native";

export default function Keys() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "PassKeys",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className="flex-row justify-center space-x-4 px-8 py-1">
        <View className="justify-center">
          <Info color="#107C10" size={16} />
        </View>
        <View className="pt-2 pb-6 pr-4">
          <Text className="text-[13px] leading-5 tracking-[0.23px] ">
            Passkeys are easier to use and more secure than passwords for
            protecting your funds.
          </Text>
        </View>
      </View>
      <View className="flex-row px-8 py-3">
        <View className="flex-1">
          <Text className="text-[#242424] text-[17px] leading-[22px] tracking-[0.43px]">
            Device
          </Text>
          <Text className="text-[#616161] text-[15px] leading-[20px] tracking-[0.23px]">
            Date created:
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px] tracking-[0.08px]">
            Last Used
          </Text>
        </View>
        <View className="justify-center ">
          <Pressable
            onPress={openModal}
            className="bg-[#C50F1F] h-7 rounded-full justify-center items-center"
          >
            <Text className="text-[#FFFFFF] text-[13px] font-semibold leading-[18px] tracking-[0.08px] px-2">
              Delete
            </Text>
          </Pressable>
        </View>
      </View>
      {/* modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableOpacity className="flex-1" onPress={closeModal}>
          <View className="h-[316px] mt-auto bg-[#FFFFFF] rounded-3xl shadow-2xl">
            <TouchableOpacity activeOpacity={1}>
              <View className="justify-center items-center h-[52px]">
                <Text className="font-semibold text-[20px] leading-[25px] tracking-[-0.45px]">
                  Delete this passkey
                </Text>
              </View>
              <View className="h-[54px] px-4">
                <Text className="text-center text-[13px] text-[#242424] leading-[18px] tracking-[-0.08px]">
                  This action removes the passkey from SwiftRide only. For
                  complete removal, check your device's passkey management
                  guide.
                </Text>
              </View>

              <View className="px-4 pt-6">
                <Pressable className="bg-[#C50F1F] w-full h-[52px] items-center justify-center rounded-[99px]">
                  <Text className="text-[#FFFFFF] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                    Delete
                  </Text>
                </Pressable>
              </View>
              <View className="px-4 pt-3">
                <Pressable
                  onPress={closeModal}
                  className="bg-[#F0F0F0] w-full h-[52px] items-center justify-center rounded-[99px]"
                >
                  <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                    Cancel
                  </Text>
                </Pressable>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* modal */}
    </View>
  );
}
