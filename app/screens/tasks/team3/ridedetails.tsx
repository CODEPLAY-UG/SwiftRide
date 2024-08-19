import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import BikeIcon from "@/assets/svg/BikeIcon";
import ChevronRight from "@/assets/svg/ChevronRight";

export default function RideDetails() {
  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "Ride details",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className=" flex-col items-center justify-center">
        <BikeIcon />
        <Text>UGX. (Fare)</Text>
      </View>
      <View>
        <Text>Trip details</Text>
        <Text>Pick-up</Text>
        <Text>Destination</Text>
        <Text>Biketype</Text>
        <Text>Payment method</Text>
        <Text>driver name</Text>
        <TouchableOpacity className="flex-row">
          <Text>Trip route map</Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row">
          <Text>Receipt</Text>
          <View>
            <ChevronRight />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
