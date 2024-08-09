import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

import { DotIcon } from "lucide-react-native";

export default function Getting() {
  return (
    <View className="bg-white h-full w-full px-4">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Getting started with SwiftRide",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="">
          <View className="">
            <View className="justify-between py-1 items-center">
              <Image className="h-[180px] w-[100%] rounded-[16px]" source={require(".../../../assets/images/rider.png")} />
            </View>
          </View>

          <View className="flex-row justify-between items-center ">
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Welcome to SwiftRide!</Text>
              <View className="mt-2">
                <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Your journey with SwiftRide begins here. We're excited to have you join our community. Let's explore how SwiftRide makes your ride-hailing experience seamless, efficient, and enjoyable.</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Discover the SwiftRide Community</Text>
              <View className=" mt-2">
                <View className="flex-row pr-4 pb-6">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Join the Community: SwiftRide is more than just an app; it’s a community of drivers and riders who value safety, reliability, and convenience.</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Safety First: We prioritize your safety with verified drivers, real-time ride tracking, and a dedicated support team available 24/7.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">How It Works</Text>
              <View className="mt-2">
                <View className="flex-row pr-4 pb-6">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Smart Matching: Our advanced algorithm connects you with the nearest available driver to ensure quick pickups and minimal wait times.</Text>
                </View>
                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Efficient Routing: SwiftRide uses real-time data{"\n"}to find the fastest and safest routes to your destination, avoiding traffic and delays.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Features You’ll Love</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Easy Ride Requests: Simply enter your destination, choose your ride type, and confirm your pickup location.</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
                    Ride Options: Whether you need a quick ride, a{"\n"}
                    larger vehicle, or a luxury experience, we have{"\n"}
                    options to suit your needs (Swift, SwiftXL,{"\n"}SwiftLux).
                  </Text>
                </View>
                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Fare Estimates: Get an upfront fare estimate{"\n"}before confirming your ride, so you know exactly what to expect.</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Share Your Trip: Let friends and family follow your{"\n"}journey in real-time for added peace of mind.</Text>
                </View>

                <View className="flex-row">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">In-App Messaging: Communicate directly with{"\n"}your driver through the app for easy coordination.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Enjoy a Smooth Ride</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Real-Time Tracking: Watch your driver approach and track your ride in real-time on the map.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Driver Details: See your driver’s name, photo, and vehicle details for easy identification.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Flexible Payment ptions: Pay seamlessly through the app with your preferred payment method.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Stay Informed</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Eotifications: Receive updates about your ride, promotions, and special offers directly in the app.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Trip History: Access your past trips and receipts anytime in the Trip History’ section.</Text>
                </View>

                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Support at Your Fingertips: ur Help Center is always available for any questions or issues you might have.</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="px-4">
              <Text className="text-[#242424] text-[17px] font-semi-bold leading-[22px] tracking-tighter[-0.43]">Join the Conversation</Text>
              <View className="mt-2">
                <View className="flex-row pr-4">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Rate Your Ride: Share your feedback after each ride to help us improve and maintain high standards.</Text>
                </View>

                <View className="flex-row pr-4 pb-6">
                  <View className="">
                    <DotIcon color="#808080" size={16} />
                  </View>
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Invite Friends: Share your referral code and earn rewards when your friends join SwiftRide..</Text>
                </View>

                <View className="flex-row pr-4">
                  <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">Thank you for choosing SwiftRide. We're committed to making every journey a great experience. Safe travels and enjoy the ride!.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
