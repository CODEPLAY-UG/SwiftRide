import { View, Text } from "react-native";
import React from "react";
import { Bike } from "lucide-react-native";

export default function BikeIcon() {
  return (
    <View className="bg-white rounded-full p-2">
      <Bike color="black" size={16} />
    </View>
  );
}
