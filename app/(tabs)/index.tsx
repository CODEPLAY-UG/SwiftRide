import { View, Image, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function TabIndex() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return (
      <SafeAreaView className="bg-[#FFFFFF] h-full w-full pt-3">
        <Stack.Screen options={{ headerShown: false }} />
        <View className="bg-[#F0F0F0] mx-[5%] flex-row mb-2 items-center justify-between py-2 px-4 rounded-[24px]">
          <View className="flex-row items-center space-x-2">
            <Image
              className="w-[20px] h-[20px]"
              source={require("@assets/images/search.png")}
            />
            <TextInput
              className=" font-normal text-[17px] leading-[22px] tracking-[0.43px]"
              placeholder="Going somewhere?.."
            />
          </View>
          <View className="">
            <Image
              className="w-[20px] h-[20px]"
              source={require("@assets/images/mic.png")}
            />
          </View>
        </View>
        <View className="flex-1 justify-center items-center">
          {errorMsg ? <Text>{errorMsg}</Text> : <Text>Loading...</Text>}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full w-full pt-3">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-[#F0F0F0] mx-[5%] flex-row mb-2 items-center justify-between py-2 px-4 rounded-[24px]">
        <View className="flex-row items-center space-x-2">
          <Image
            className="w-[20px] h-[20px]"
            source={require("@assets/images/search.png")}
          />
          <TextInput
            className=" font-normal text-[17px] leading-[22px] tracking-[0.43px]"
            placeholder="Going somewhere?.."
          />
        </View>
        <View className="">
          <Image
            className="w-[20px] h-[20px]"
            source={require("@assets/images/mic.png")}
          />
        </View>
      </View>
      <View className="flex-1">
        <MapView
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton
          showsUserLocation
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          className="h-full w-full"
        />
      </View>
    </SafeAreaView>
  );
}
