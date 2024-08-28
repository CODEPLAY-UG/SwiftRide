import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, Stack } from "expo-router";
import SearchComponent from "@/components/core/SearchMapBox";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { ProgressBar, MD3Colors } from "react-native-paper";
import BikeType from "@/components/core/BikeType";
import ChevronLeft from "@/assets/svgs/chevronLeft";
import CalendarPlus from "@/assets/svgs/calendarPlus";
import getMapSearches from "@/services/mapSearchesGeo";
import MapPin from "@/assets/svgs/mapPin";
import Hop from "@/assets/svgs/hop";
import MapPinned from "@/assets/svgs/mapPinned";
import SearchX from "@/assets/svgs/searchX";
import Triangle from "@/assets/svgs/triangle";

interface LocationSuggestion {
  text_en: string;
  place_name_en: string;
  geometry: {
    coordinates: string[];
  };
  // distance: number;
  // Add other properties as needed
}

export default function Index() {
  const [isAddress, setIsAddress] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [result, setResult] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState<
    LocationSuggestion[]
  >([]);

  const [currentLocationSuggestions, setCurrentLocationSuggestions] = useState<
    LocationSuggestion[]
  >([]);

  const [showCurentLocationMenu, setShowCurentLocationMenu] =
    useState("hidden");
  const [clocation, setCLocation] = useState("");

  const handleCurrentLocation = async (input: string) => {
    if (input.length > 0) {
      setShowCurentLocationMenu("");
      setCLocation(input);
      const locationSuggestions = await getMapSearches(input);
      setCurrentLocationSuggestions(locationSuggestions);
    } else {
      setShowCurentLocationMenu("hidden");
      setCLocation(input);
      setCurrentLocationSuggestions([]);
    }
  };

  const rideSheetRef = useRef<BottomSheet>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Your route",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.9}
              className="ml-4">
              <ChevronLeft stroke={"#616161"} width={24} height={24} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.9}
              className="mr-5">
              <CalendarPlus color="#808080" width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <View className="flex-row space-x-2 px-4 mb-3">
        <MapPin width={24} height={24} />
        <TextInput
          placeholder="Current user location"
          className="text-[#616161] font-[17px]"
          value={clocation}
          onChangeText={handleCurrentLocation}
        />
      </View>
      <View
        style={styles.shadow}
        className={`flex px-3 py-2 mx-[60px] rounded-lg ${showCurentLocationMenu}`}>
        <Triangle />
        {currentLocationSuggestions.length > 0 ? (
          currentLocationSuggestions.slice(0, 3).map((item, index) => (
            <Pressable
              onPress={() => {
                setCLocation(item.place_name_en);
                setShowCurentLocationMenu("hidden");
              }}
              key={index}>
              <View className="flex-row justify-between items-center my-3">
                <View className="mx-6 flex-row items-center">
                  <MapPin width={24} height={34} />
                  <View className="mx-4">
                    <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                      {item.place_name_en}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))
        ) : (
          <View className="flex-row justify-between items-center my-3">
            <View className="mx-6 flex-row items-center">
              <Text>No result for {clocation}</Text>
            </View>
          </View>
        )}
      </View>
      <View>
        <SearchComponent
          setIsTyping={setIsTyping}
          setLocationSuggestions={setLocationSuggestions}
          placeholder="Destination"
          setResult={setResult}
        />
      </View>
      {isTyping && (
        <View className="mt-2">
          <ProgressBar indeterminate color="#636363" className="h-[1px]" />

          {locationSuggestions.length == 0 ? (
            <>
              <View className="mx-6 flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                  <SearchX height={24} width={24} />
                  <View className="mx-4">
                    <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                      No results for {result}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="space-y-5 mt-3">
                <Pressable onPress={() => router.push("./search_map")}>
                  <View className="flex-row justify-between items-center">
                    <View className="mx-6 flex-row items-center">
                      <MapPinned height={24} width={24} />
                      <View className="mx-4">
                        <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                          Select location on map
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            </>
          ) : (
            <View>
              {locationSuggestions.map((item, index) => (
                <Pressable
                  onPress={() => {
                    setIsAddress(true);
                  }}
                  key={index}>
                  <View className="flex-row justify-between items-center mt-3">
                    <View className="mx-6 flex-row items-center">
                      <MapPin width={24} height={34} />
                      <View className="mx-4">
                        <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                          {item.text_en}
                        </Text>
                        <Text className="text-[#616161] text-[13px] leading-[18px] tracking-[-0.08]">
                          {item.place_name_en}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}

              <View className="space-y-4 mt-[12px]">
                <Pressable onPress={() => router.push("./search_map")}>
                  <View className="flex-row justify-between items-center">
                    <View className="mx-6 flex-row items-center">
                      <MapPinned height={24} width={24} />
                      <View className="mx-4">
                        <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                          Select location on map
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>

              {locationSuggestions.length != 0 ? (
                <View className="px-4">
                  <Pressable
                    onPress={() => {
                      setIsAddress(true);
                    }}
                    // className="bg-[#636363] flex-row justify-center p-5 mx-3 rounded-[99px] mt-10">
                    className="mt-[56px] bg-[#636363] h-[45px] items-center justify-center rounded-[99px]">
                    <Text className="text-white font-[400] text-[17px]">
                      Confirm destination
                    </Text>
                  </Pressable>
                </View>
              ) : (
                ""
              )}
            </View>
          )}
        </View>
      )}

      {!isTyping && (
        <View className="space-y-2">
          <View className="mx-8 py-4">
            <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">
              Recent destinations
            </Text>
          </View>
          <View className="px-4 py-2 justify-between items-center">
            <Hop width={48} height={48} />
          </View>
          <View className="mx-4 py-2 justify-between items-center">
            <Text className="text-[#242424] font-semibold text-[20px] leading-[25px] tracking-[-0.45]">
              No rides yet
            </Text>
          </View>
          <View className="space-y-0">
            <View className="mx-4 justify-between items-center">
              <Text className="text-[#242424] text-[13px]  leading-[18px] tracking-[-0.08]">
                Your recent destinations will appear here.
              </Text>
            </View>
            <View className="items-center">
              <Pressable
                onPress={() => router.push("./")}
                className="mt-[22px] bg-[#636363] w-[330px] h-[45px] items-center justify-center rounded-[99px]"
                // className="mt-[56px] bg-[#636363] h-[52px] items-center justify-center rounded-[99px]"
              >
                <Text className="text-center text-white text-[17px] font-semibol leading-[22px] tracking-[-0.43]">
                  Place order
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddress}
        onRequestClose={() => {
          setIsAddress(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setIsAddress(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.menuContainer}>
                <BikeType setIsAddress={setIsAddress} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menuContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // Shadow goes upwards
    shadowOpacity: 0.25,
    shadowRadius: 3.84, // Adds shadow on iOS
  },
  position: {
    position: "absolute",
    // top: 10,
  },
  shadow: {
    position: "absolute",
    top: 65,
    zIndex: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2, // Reduced height for a thinner shadow
    },
    shadowOpacity: 0.1, // Lower opacity for a lighter shadow
    shadowRadius: 2, // Smaller radius for a sharper shadow
    elevation: 15, // Lower elevation for a less pronounced shadow on Android
  },
});
