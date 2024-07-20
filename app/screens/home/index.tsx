import React from "react";
import Mapbox, { Camera, PointAnnotation } from "@rnmapbox/maps";
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
import { Stack } from "expo-router";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bike, Menu } from "lucide-react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RideDetails from "@/components/core/RideDetails";
import MenuContent from "../../../components/core/MenuContent";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbHluOGxjeXAwM3J1Mm1wbG9wcTJnZzYzIn0.RgeMcoyjxD8bGql5tsKyrA"
);

export default function MapboxComponent() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isRideDetailsOpen, setIsRideDetailsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rideSheetRef = useRef<BottomSheet>(null);

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
        <Mapbox.MapView scaleBarEnabled={false} className="w-full h-full">
          {location && (
            <>
              <Camera
                centerCoordinate={[
                  location.coords.longitude,
                  location.coords.latitude,
                ]}
                zoomLevel={14}
                animationDuration={2000}
              />
              <PointAnnotation
                id="current-location"
                coordinate={[
                  location.coords.longitude,
                  location.coords.latitude,
                ]}
              >
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "blue",
                    borderRadius: 15,
                    borderColor: "white",
                    borderWidth: 3,
                  }}
                />
              </PointAnnotation>
            </>
          )}
        </Mapbox.MapView>
      </View>
      <Pressable
        onPress={() => handleRideDetailsPress(0)}
        className="absolute bottom-5"
      >
        <View className="bg-black rounded-full w-20 h-20 justify-center items-center">
          <Bike color="white" size={24} />
        </View>
      </Pressable>

      <Pressable onPress={handleMenuPress} className="absolute top-10 left-5">
        <View className="bg-white rounded-full p-4 justify-center items-center">
          <Menu color="#808080" size={24} />
        </View>
      </Pressable>

      {isRideDetailsOpen && (
        <BottomSheet
          ref={rideSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsRideDetailsOpen(false)}
        >
          <BottomSheetView>
            <BottomSheetHeader title="Ride Details" />
            <RideDetails />
          </BottomSheetView>
        </BottomSheet>
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
    height: "100%",
    width: "75%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
