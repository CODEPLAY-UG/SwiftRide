import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ActivityIndicator, Modal, TouchableWithoutFeedback, StyleSheet, Pressable } from "react-native";
import Mapbox, { Camera, UserLocation } from "@rnmapbox/maps";
import { Stack } from "expo-router";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bike, Menu } from "lucide-react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RideDetails from "@/components/core/RideDetails";
import MenuContent from "../../../components/core/MenuContent";
import bikes from "../../../data/bikes.json";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Marker from "../../../components/core/Marker"; // Import the custom Marker component

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbHp0YzQyNGwwdmZ1MmtzOWxpeThlc29iIn0.kAEI1rycCIBvS2kDEWcLhA"
);

export default function MapboxComponent() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isRideDetailsOpen, setIsRideDetailsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rideSheetRef = useRef<BottomSheet>(null);

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

  const snapPoints = ["40%"];

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
          onRequestClose={closeMenu}
        >
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
    height: "100%",
    width: "75%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
