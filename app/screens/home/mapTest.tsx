import { View, Text } from "react-native";
import React, { SetStateAction } from "react";
import MapSearchBox from "@/components/core/MapSearchBox";
import { SafeAreaView } from "react-native-safe-area-context";

export default function mapTest() {
  return (
    <SafeAreaView className="bg-white h-full py-20">
      <MapSearchBox />
    </SafeAreaView>
  );
}
