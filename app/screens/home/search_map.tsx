import React from "react";
import Mapbox, {
  Camera,
  CircleLayer,
  Images,
  LocationPuck,
  PointAnnotation,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
} from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { router, Stack } from "expo-router";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Bike,
  MapPin,
  MapPinned,
  Menu,
  SearchX,
} from "lucide-react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MenuContent from "@components/core/MenuContent";
import { featureCollection } from "@turf/helpers";
import { point } from "@turf/helpers";
import bikes from "@data/bikes.json";
import { ProgressBar } from "react-native-paper";
import addresses from "@data/address.json";
import SearchComponent from "@/components/core/Search";
import BikeType from "@/components/core/BikeType";

Mapbox.setAccessToken("process.env.EXPO_PUBLIC_MAPBOX_KEY");
export default function MapboxComponent() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isRideDetailsOpen, setIsRideDetailsOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rideSheetRef = useRef<BottomSheet>(null);

  const [snapPoints, setSnapPoints] = useState(["40%"]);

  const handleRideDetailsPress = useCallback((index: number) => {
    rideSheetRef.current?.snapToIndex(index);
    setIsRideDetailsOpen(true);
  }, []);

  const handleMenuPress = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <View className="flex-1 justify-center items-center">
          {errorMsg ? (
            <Text>{errorMsg}</Text>
          ) : (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <MapContent
        location={location}
        handleRideDetailsPress={handleRideDetailsPress}
        handleMenuPress={handleMenuPress}
        isRideDetailsOpen={isRideDetailsOpen}
        setIsRideDetailsOpen={setIsRideDetailsOpen}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        closeMenu={closeMenu}
        rideSheetRef={rideSheetRef}
        snapPoints={snapPoints}
      />

      {isMenuOpen && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isMenuOpen}
          onRequestClose={closeMenu}>
          <TouchableWithoutFeedback onPress={closeMenu}>
            <View style={styles.overlay}>
              <View style={styles.menuContainer}>
                <MenuContent />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const MapContent = ({
  location,
  handleRideDetailsPress,
  handleMenuPress,
  isRideDetailsOpen,
  setIsRideDetailsOpen,
  isMenuOpen,
  setIsMenuOpen,
  closeMenu,
  rideSheetRef,
  snapPoints,
}: {
  location: Location.LocationObject | null;
  handleRideDetailsPress: (index: number) => void;
  handleMenuPress: () => void;
  isRideDetailsOpen: boolean;
  setIsRideDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
  rideSheetRef: React.RefObject<BottomSheet>;
  snapPoints: string[];
}) => {
  const BottomSheetHeader = ({ title }: { title: string }) => {
    return (
      <View className="items-center justify-center border-b-[1px] p-1 border-b-[#f0f0f0]">
        <Text className="text-[17px] text-[#242424] py-2 font-[600] leading-[22px] tracking-[-0.43px]">
          {title}
        </Text>
      </View>
    );
  };

  const points = bikes.map((bike: { longitude: number; latitude: number }) =>
    point([bike.longitude, bike.latitude])
  );

  const pin = require("@assets/images/pin.png");

  const [snapPoints1, setSnapPoints1] = useState(["30%"]);

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

  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <View className="h-full w-full">
        <Mapbox.MapView
          // styleURL="mapbox://styles/mapbox/dark-v11"
          scaleBarEnabled={false}
          className="w-full h-full">
          {location && (
            <>
              <Camera
                centerCoordinate={[
                  location.coords.longitude,
                  location.coords.latitude,
                ]}
                zoomLevel={16}
                followZoomLevel={15}
                followUserLocation
                animationDuration={3000}
              />
              <LocationPuck
                pulsing={{ isEnabled: true }}
                puckBearingEnabled
                puckBearing="heading"
              />
              <ShapeSource id="bikes" cluster shape={featureCollection(points)}>
                <SymbolLayer
                  id="bike-icons"
                  minZoomLevel={0.5}
                  style={{
                    iconImage: "pin",
                    iconAllowOverlap: true,
                    iconSize: 0.4,
                    // iconKeepUpright: true,
                    iconAnchor: "bottom",
                  }}
                />
                {/* <SymbolLayer
                  id="pointCount"
                  style={{
                    textField: ["get", "point_count"],
                    textSize: 16,
                    textColor: "#ffffff",
                    textPitchAlignment: "map",
                  }}
                /> */}
                <CircleLayer
                  id="clusters"
                  belowLayerID="pointCount"
                  filter={["has", "point_count"]}
                  style={{
                    circlePitchAlignment: "map",
                    circleColor: "#AF52DE",
                    circleRadius: 20,
                    circleOpacity: 0.7,
                    circleStrokeWidth: 2,
                    circleStrokeColor: "white",
                  }}
                />
                <Images images={{ pin }} />
              </ShapeSource>
            </>
          )}
        </Mapbox.MapView>
      </View>
      <Pressable
        // onPress={() => handleRideDetailsPress(0)}
        className="absolute bottom-5">
        <View className="bg-black rounded-full w-20 h-20 justify-center items-center">
          <Bike color="white" size={24} />
        </View>
      </Pressable>

      <Pressable
        onPress={() => router.push("../")}
        className="absolute top-10 left-5">
        <View className="bg-white rounded-full p-4 justify-center items-center">
          <ArrowLeft color="#808080" size={24} />
        </View>
      </Pressable>

      {isRideDetailsOpen && (
        <BottomSheet
          ref={rideSheetRef}
          snapPoints={snapPoints1}
          enablePanDownToClose={false}
          onClose={() => setIsRideDetailsOpen(false)}>
          <BottomSheetView>
            <View className="px-5 mb-2 justify-between">
              <View className="px-4 mt-2">
                <View className="flex-row space-x-5 justify-between item-center">
                  <View className="flex-row items-center space-x-2">
                    <View className="">
                      <Text className="text-[17px] text-center text-[#242424] leading-[22px] tracking-[-0.43px]">
                        Select your destination
                      </Text>
                      <Text className="text-[15px] text-center text-[#616161] leading-[20px] tracking-[-0.23px]">
                        Drag map to move pin to new location
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <ProgressBar indeterminate color="#636363" className="h-[1px]" />

            <View>
              <SearchComponent
                setIsTyping={setIsTyping}
                // setSearchQuery={setSearchQuery}
                placeholder="Destination"
              />
            </View>
            {isTyping && (
              <View className="mt-2">
                <ProgressBar
                  indeterminate
                  color="#636363"
                  className="h-[1px]"
                />

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

            <View className="px-4">
              <Pressable
                onPress={() => {
                  setIsAddress(true);
                }}
                // className="bg-[#636363] flex-row justify-center p-5 mx-3 rounded-[99px] mt-10">
                className="mt-4 bg-[#636363] h-[45px] items-center justify-center rounded-[99px]">
                <Text className="text-white font-[400] text-[17px]">
                  Confirm destination
                </Text>
              </Pressable>
            </View>
          </BottomSheetView>
        </BottomSheet>
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
    </View>
  );
};

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
