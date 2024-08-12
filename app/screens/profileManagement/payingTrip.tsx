import { View, Text, TextInput, Pressable, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, ChevronRight, DotIcon, Lock, Phone, SparklesIcon, SunMoon, WalletIcon } from "lucide-react-native";

export default function Paying() {
  function handlePaying(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Paying for your trip",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="">
        <View className="">
          <View className="">
            <View className="justify-between py-1 items-center">
              <Image className="h-[180px] w-[100%] rounded-[16px]" source={require(".../../../assets/images/coin.png")} />
            </View>
          </View>

          <View className="flex-row justify-between items-center px-1 ">
            <View className="mx-3">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">SwiftRide Payment Guide</Text>
              <View className="mt-2">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Welcome to SwiftRide! Here’s a step-by-step guide on how to collect payments using Mobile Money, ensuring a smooth and hassle-free experience for both drivers and riders.</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-8">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">1. Setting Up Mobile Money in the App</Text>
              <View className=" mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Open the SwiftRide App: Navigate to the 'Payment' section in your profile.</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Add Payment Method: Select 'Mobile Money' and enter your Mobile Money details (phone number and provider)</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Verify: Follow the prompts to verify your Mobile Money account. This may involve entering a verification code sent to your phone.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-8">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">2. Requesting a Ride and Making a Payment</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Request a Ride: Enter your destination, select your ride type, and confirm your pickup location.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Payment Confirmation: Once your ride is complete, the app will automatically charge the fare to your linked Mobile Money account.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Receipt: A digital receipt will be sent to your email and can be accessed in the 'Trip History' section of the app.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-8">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">3. Managing Your Mobile Money Account</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]"> Update Payment Method: You can update or change your Mobile Money details anytime in the 'Payment' section.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]"> Check Balance: Ensure your Mobile Money account has sufficient funds to avoid payment issues.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-8">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">4. Troubleshooting and Support</Text>

              <View className="mt-4">
                <Text className="text-[#616161] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Common Issues</Text>
              </View>
              <View className="mt-2">
                <View className="flex-row pr-4 mx-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Payment Failed: Ensure your Mobile Money account has enough funds and is active.</Text>
                </View>

                <View className="flex-row pr-4 mx-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]"> Verification Issues: Double-check the entered details and retry the verification process.</Text>
                </View>

                <View className="mt-4">
                  <Text className="text-[#616161] text-[17px] font-semibold leading-[22px] tracking-tighter[-0.43]">Getting Help:</Text>
                </View>

                <View className="flex-row pr-4 mx-4 mt-2">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]"> Customer Support: If you encounter any issues, contact our support team via the Help Center in the app. We’re available 24/7 to assist you.</Text>
                </View>
                <View className="flex-row pr-4 mx-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">FAQs: Check our FAQ section in the app for answers to common questions regarding Mobile Money payments.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
