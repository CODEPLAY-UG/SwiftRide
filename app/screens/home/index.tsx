import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  PanResponder,
} from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { router, Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bike, Menu } from "lucide-react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RideDetails from "@/components/core/RideDetails";
import SideMenu from "react-native-side-menu-updated";
import MenuContent from "../../../components/core/MenuContent";

export default function Index() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isRideDetailsOpen, setIsRideDetailsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rideSheetRef = useRef<BottomSheet>(null);
  const menuSheetRef = useRef<BottomSheet>(null);

  const snapPoints = ["40%"];

  const menuSnapPoints = ["100%"];

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

  const BottomSheetHeader = ({ title }: { title: string }) => {
    return (
      <View className="items-center justify-center border-b-[1px] p-1 border-b-[#f0f0f0]">
        <Text className="text-[17px] text-[#242424] py-2 font-[600] leading-[22px] tracking-[-0.43px]">
          {title}
        </Text>
      </View>
    );
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
    <SideMenu
      menu={<MenuContent />}
      isOpen={isMenuOpen}
      onChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <View className="justify-center items-center w-full">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <MapView
          className="h-full w-full"
          provider="google"
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={(data) => console.log(data)}
          showsUserLocation={false}
          userInterfaceStyle="dark"
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"You Are Here"}
            onPress={(data) => console.log(data.nativeEvent.coordinate)}
          />
        </MapView>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleRideDetailsPress(0)}
          className="absolute bottom-5"
        >
          <View className="bg-black rounded-full w-20 h-20 justify-center items-center">
            <Bike color="white" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMenuPress}
          className="absolute top-10 left-5"
        >
          <View className="bg-white rounded-full p-4 justify-center items-center">
            <Menu color="#808080" size={24} />
          </View>
        </TouchableOpacity>

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
    </SideMenu>
  );
}

const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    width: "80%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 10,
  },
});
