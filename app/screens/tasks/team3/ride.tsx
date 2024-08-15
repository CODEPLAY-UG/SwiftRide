import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import BikeIcon from "@/assets/svg/BikeIcon";

export default function Ride() {
  const [selectedView, setSelectedView] = useState<"trips" | "timeline">(
    "trips"
  );
  //background color of the togglebutton when selected
  const bgColor = selectedView === "trips" ? "#2C7721" : "#F0F0F0";
  const bgColor2 = selectedView === "timeline" ? "#2C7721" : "#F0F0F0";

  //text color of the togglebutton when selected
  const textColor = selectedView === "trips" ? "#FFFFFF" : "#616161";
  const textColor2 = selectedView === "timeline" ? "#FFFFFF" : "#616161";

  //border radius of the togglebutton when selected
  const bdRadius =
    selectedView === "trips" ? " rounded-full" : "rounded-l-full";
  const bdRadius2 =
    selectedView === "timeline" ? " rounded-full" : "rounded-r-full";

  const openTrips = () => {
    setSelectedView("trips");
  };

  const openTimeline = () => {
    setSelectedView("timeline");
  };

  return (
    <View className="bg-white h-full">
      <Stack.Screen
        options={{
          title: "Activity",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <View className="py-2 px-4 flex-row justify-center">
        <TouchableOpacity
          className="flex-1 px-4 py-[6px] items-center rounded-l-full"
          onPress={openTrips}
          style={[{ backgroundColor: bgColor }]}
        >
          <Text
            className="text-[15px] leading-5 tracking-[0.23px] "
            style={[{ color: textColor }]}
          >
            Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 px-4 py-[6px] items-center rounded-r-full"
          onPress={openTimeline}
          style={[{ backgroundColor: bgColor2 }]}
        >
          <Text
            className="text-[15px] leading-5 tracking-[0.23px]"
            style={[{ color: textColor2 }]}
          >
            Timeline
          </Text>
        </TouchableOpacity>
      </View>
      {/*display when togglebutton is clicked */}
      <View>
        {selectedView === "trips" ? (
          <View className="px-4">
            <TouchableOpacity className="flex-row space-x-4 px-4">
              <BikeIcon />
              <View className="flex-1">
                <Text className="text-[#242424] text-[17px] leading-[22px] tracking-[0.43px]">
                  Destination
                </Text>
                <Text className="text-[#616161] text-[15px] leading-5 tracking-[0.23px]">
                  date,time
                </Text>
                <Text className="text-[#616161] text-[13px] leading-[18px] tracking-[0.08px]">
                  (fare)
                </Text>
              </View>
              <View className="justify-center">
                <ChevronRight size={20} color="#808080" />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Showing Timeline</Text>
        )}
      </View>
    </View>
  );
}
