// Marker.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Bike } from "lucide-react-native";

const Marker = () => {
  return (
    <View className="py-2" style={styles.markerContainer}>
      <View style={styles.ellipticalMarker}>
        <View style={styles.ellipseInner}>
          <Bike color="white" size={20} />
        </View>
      </View>
      <View style={styles.markerPointer} />
    </View>
  );
};

export default Marker;

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: "center",
    backgroundColor: "blue",
  },
  ellipticalMarker: {
    width: 60,
    height: 54,
    borderRadius: 30,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  ellipseInner: {
    width: 43,
    height: 38,
    borderRadius: 99,
    backgroundColor: "#AF52DE",
    justifyContent: "center",
    alignItems: "center",
  },
  markerPointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    marginTop: -3,
    borderTopColor: "white", // Set to white to match the marker background
  },
});
