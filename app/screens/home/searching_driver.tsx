import React from "react";
import Mapbox, {
  Camera,
  CircleLayer,
  Images,
  LineLayer,
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
import { ArrowLeft, Bike, Menu } from "lucide-react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MenuContent from "@components/core/MenuContent";
import { featureCollection } from "@turf/helpers";
import { point } from "@turf/helpers";
import bikes from "@data/bikes.json";
import { UserLocation } from "@rnmapbox/maps";
import ConfirmLoading from "@/components/core/ConfirmLoading";
import PaymentMode from "@/components/core/PaymentMode";
import { ProgressBar } from "react-native-paper";
import ConfirmDriver from "@/components/core/ConfirmDriver";
import { getDirections } from "@/services/directions";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";

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

  const [direction, setDirection] = useState();
  const directionCoordinate = direction?.routes?.[0]?.geometry.coordinates;

  const onPointPress = async (event: OnPressEvent) => {
    // handleRideDetailsPress(0);
    // console.log(event);
    const newDirection = await getDirections(
      [location?.coords.longitude, location?.coords.latitude],
      [event.coordinates.longitude, event.coordinates.latitude]
    );
    setDirection(newDirection);
  };

  const pin = require("@assets/images/pin.png");

  const [message, setMessage] = useState("Confirming your trip");
  const [per, setPer] = useState(0.3);
  const [isDriver, setIsDriver] = useState(false);
  const [snapPoints1, setSnapPoints1] = useState(["40%"]);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setMessage("Confirming your trip");
      setPer(0.5);
    }, 2000); // 5 seconds
    timer = setTimeout(() => {
      setMessage("Connecting to your driver");
      setPer(0.7);
      setSnapPoints1(["50%"]);
      setIsDriver(true);
    }, 4000); // 5 seconds

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const mapRef = useRef(null);
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
          styleURL="mapbox://styles/mapbox/dark-v11"
          ref={mapRef}
          scaleBarEnabled={false}
          compassEnabled={true}
          compassViewPosition={3}
          // logoEnabled
          attributionEnabled={false}
          // surfaceView={false}
          className="w-full h-full">
          {location && (
            <>
              <Camera
                // centerCoordinate={[
                //   location.coords.longitude,
                //   location.coords.latitude,
                // ]}
                centerCoordinate={[32.583333, 0.316667]} // Centenary Park, Uganda
                // centerCoordinate={
                //   location
                //     ? [location.coords.longitude, location.coords.latitude]
                //     : [32.583333, 0.316667]
                // }
                zoomLevel={16}
                followZoomLevel={15}
                // followUserLocation
                followUserLocation={location !== null ? true : false} // only follow user location if it's available
                animationDuration={5000}
              />
              <UserLocation
                showsUserHeadingIndicator={true}
                androidRenderMode="gps"
              />

              <LocationPuck
                pulsing={{ isEnabled: true }}
                visible={true}
                puckBearingEnabled
                puckBearing="heading"
              />
              <ShapeSource
                onPress={onPointPress}
                id="bikes"
                cluster
                shape={featureCollection(points)}>
                <SymbolLayer
                  id="bike-icons"
                  minZoomLevel={0.5}
                  style={{
                    iconImage: "pin",
                    iconAllowOverlap: true,
                    iconSize: 0.4,
                    iconKeepUpright: true,
                    iconAnchor: "bottom",
                  }}
                />
                <SymbolLayer
                  id="pointCount"
                  style={{
                    textField: ["get", "point_count"],
                    textSize: 16,
                    textColor: "#ffffff",
                    textPitchAlignment: "map",
                  }}
                />
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
              {directionCoordinate && (
                <ShapeSource
                  id="routeSource"
                  lineMetrics
                  shape={{
                    properties: {},
                    type: "Feature",
                    geometry: {
                      type: "LineString",
                      coordinates: directionCoordinate,
                    },
                  }}>
                  <LineLayer
                    id="exampleLineLayer"
                    style={{
                      lineColor: "#ffd700",
                      lineCap: "round",
                      lineJoin: "round",
                      lineWidth: 7,
                      // lineDasharray: [0, 4, 3],
                    }}
                  />
                </ShapeSource>
              )}
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
            <BottomSheetHeader title={message} />
            <ProgressBar progress={per} color="#636363" className="h-[1px]" />

            {!isDriver && <ConfirmLoading />}
            {isDriver && <ConfirmDriver />}
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
