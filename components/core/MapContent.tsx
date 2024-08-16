import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Mapbox, { Camera, UserLocation } from "@rnmapbox/maps";
import Marker from "./Marker"; // Import your custom Marker component
import bikes from "@data/bikes.json"; // Sample bike locations data

type MapContentProps = {
  location: any;
  handleRideDetailsPress: () => void;
  handleMenuPress: () => void;
  isRideDetailsOpen: boolean;
  setIsRideDetailsOpen: (open: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  closeMenu: () => void;
  rideSheetRef: any;
  snapPoints: any;
};

const MapContent: React.FC<MapContentProps> = ({
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
}) => {
  const mapRef = useRef<Mapbox.MapView | null>(null);
  const [markerPositions, setMarkerPositions] = useState<any[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const updateMarkerPositions = () => {
      const positions = bikes.map((bike) => {
        const screenPoint = mapRef.current
          ?.getCamera()
          .project([bike.longitude, bike.latitude]);
        return { ...bike, left: screenPoint.x, top: screenPoint.y };
      });
      setMarkerPositions(positions);
    };

    updateMarkerPositions();
    mapRef.current?.addListener("regionDidChange", updateMarkerPositions);

    return () => {
      mapRef.current?.removeListener("regionDidChange", updateMarkerPositions);
    };
  }, [mapRef.current]);
  return (
    <View style={styles.container}>
      <Mapbox.MapView
        ref={mapRef}
        styleURL="mapbox://styles/mapbox/streets-v11"
        className="w-full h-full"
      >
        {location && (
          <Camera
            centerCoordinate={[
              location.coords.longitude,
              location.coords.latitude,
            ]}
            zoomLevel={15}
            animationDuration={5000}
          />
        )}
        <UserLocation
          showsUserHeadingIndicator={true}
          androidRenderMode="gps"
        />
      </Mapbox.MapView>

      {/* Render the custom markers */}
      {markerPositions.map((position) => (
        <Marker
          key={position.id}
          distance="1.2 km"
          time="15 mins"
          style={{
            left: position.left,
            top: position.top,
            position: "absolute",
          }}
        />
      ))}
    </View>
  );
};

export default MapContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
