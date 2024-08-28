import React from "react";
import { View, StyleSheet } from "react-native";

export default function Triangle() {
  return <View style={styles.triangle} />;
}

const styles = StyleSheet.create({
  triangle: {
    position: "absolute",
    top: -8,
    left: 20,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5, // Half of the base of the triangle
    borderRightWidth: 5, // Half of the base of the triangle
    borderBottomWidth: 10, // Height of the triangle
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff", // Color of the triangle
    // // Adding shadow for iOS
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.15,
    // shadowRadius: 2.84,
    // // Adding elevation for Android
    // elevation: 4,
  },
});
