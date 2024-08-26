import { View, Text, TouchableOpacity, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import BikeIcon from "@/assets/svg/BikeIcon";
import ChevronRight from "@/assets/svg/ChevronRight";
import RatingIcon from "@/assets/svg/RatingIcon";
import DownloadIcon from "@/assets/svg/DownloadIcon";
import ShareIcon from "@/assets/svg/ShareIcon";

export default function RideDetails() {
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
          title: "Ride details",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className=" flex-col items-center justify-center px-4 pt-6 pb-3">
        <BikeIcon width={42} height={42} />
        <Text className="text-[#242424] text-[17px] font-semibold leading-[22px]tracking-[0.43px] pt-2 pb-3">
          UGX. (Fare)
        </Text>
      </View>
      <View className="px-4">
        <Text className="text-[#242424] text-[17px] font-semibold leading-[22px]tracking-[0.43px] pt-2 pb-2">
          Trip details
        </Text>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Pick-up
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Destination
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Biketype
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Payment method
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
        </View>
        <View className="py-3">
          <Text className="text-[17px] leading-[22px]tracking-[0.43px]">
            Driver name
          </Text>
          <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
            Subtext
          </Text>
          <View className="flex-row">
            <RatingIcon />
            <Text className="text-[#616161] text-[13px] leading-[18px]tracking-[0.08px]">
              1.0
            </Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row py-3">
          <Text className="flex-1 text-[17px] leading-[22px]tracking-[0.43px]">
            Trip route map
          </Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row py-3" onPress={openModal}>
          <Text className="flex-1 text-[17px] leading-[22px]tracking-[0.43px]">
            Receipt
          </Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
      </View>
      {/* modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableOpacity className="flex-1" onPress={closeModal}>
          <View className="h-[226px] mt-auto bg-[#FFFFFF] rounded-3xl shadow-2xl">
            <TouchableOpacity activeOpacity={1}>
              <View className="justify-center items-center h-[52px]">
                <Text className="font-semibold text-[20px] leading-[25px] tracking-[-0.45px]">
                  Receipt
                </Text>
              </View>

              <View className="px-4 pt-6">
                <Pressable className="bg-[#636363] w-full h-[52px] items-center justify-center rounded-[99px] flex-row">
                  <DownloadIcon />
                  <Text className="text-[#FFFFFF] text-[17px] font-semibold leading-[22px] tracking-[-0.43px] pl-2">
                    Download
                  </Text>
                </Pressable>
              </View>
              <View className="px-4 pt-3">
                <Pressable className="bg-[#FFFFFF] w-full h-[52px] items-center justify-center rounded-[99px] flex-row">
                  <ShareIcon />
                  <Text className="text-[#636363] text-[17px] font-semibold leading-[22px] tracking-[-0.43px] pl-2">
                    Share
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
