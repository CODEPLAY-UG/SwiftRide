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
import {
  CalendarPlus,
  Hop,
  MapPin,
  MapPinned,
  Mic,
  Search,
  SearchX,
  X,
} from "lucide-react-native";
import { Link, router, Stack } from "expo-router";
import SearchComponent from "@/components/core/Search1";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { ProgressBar, MD3Colors } from "react-native-paper";
import addresses from "@data/address.json";
import BikeType from "@/components/core/BikeType";

const BottomSheetHeader = ({ title }: { title: string }) => {
  return (
    <View className="items-center justify-center border-b-[1px] p-1 border-b-[#f0f0f0]">
      <Text className="text-[17px] text-[#242424] py-2 font-[600] leading-[22px] tracking-[-0.43px]">
        {title}
      </Text>
    </View>
  );
};

export default function Index() {
  const [isAddress, setIsAddress] = useState(false);
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredAddresses = addresses.filter(
    (item) =>
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.road.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rideSheetRef = useRef<BottomSheet>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Your route",
          headerTitleAlign: "center",
          headerRight: () => <CalendarPlus color="#808080" size={24} />,
        }}
      />
      <View className="flex-row space-x-2 px-4 mb-3">
        <MapPin className="text-[#808080] w-6 h-6" />
        <TextInput
          placeholder="Current user location"
          className="text-[#616161] font-[17px]"
        />
      </View>
      <View>
        <SearchComponent
          setIsTyping={setIsTyping}
          setSearchQuery={setSearchQuery}
          placeholder="Destination"
        />
      </View>
      {isTyping && (
        <View className="mt-2">
          <ProgressBar indeterminate color="#636363" className="h-[1px]" />

          {filteredAddresses.length == 0 ? (
            <>
              <View className="mx-6 flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                  <SearchX color="#808080" size={24} />
                  <View className="mx-4">
                    <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                      No results for query
                    </Text>
                  </View>
                </View>
              </View>
              <View className="space-y-5 mt-[12px]">
                <Pressable onPress={() => router.push("./search_map")}>
                  <View className="flex-row justify-between items-center">
                    <View className="mx-6 flex-row items-center">
                      <MapPinned color="#808080" size={24} />
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
              {filteredAddresses.slice(0, 2).map((item, index) => (
                <Pressable
                  onPress={() => {
                    setIsAddress(true);
                  }}
                  key={index}>
                  <View className="flex-row justify-between items-center mt-3">
                    <View className="mx-6 flex-row items-center">
                      <MapPin color="#808080" size={24} />
                      <View className="mx-4">
                        <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">
                          {item.address}
                        </Text>
                        <Text className="text-[#616161] text-[13px] leading-[18px] tracking-[-0.08]">
                          {item.road}, {item.city}
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
                      <MapPinned color="#808080" size={24} />
                      <View className="mx-4">
                        <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                          Select location on map
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>

              {filteredAddresses.length != 0 ? (
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
          <View className="px-4 py-4 justify-between items-center">
            <Hop color="#808080" size={48} />
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

      {isAddress && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => setIsAddress(false)}>
          <TouchableWithoutFeedback onPress={() => setIsAddress(false)}>
            <View style={styles.overlay}>
              <View style={styles.menuContainer}>
                <BikeType setIsAddress={setIsAddress} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
