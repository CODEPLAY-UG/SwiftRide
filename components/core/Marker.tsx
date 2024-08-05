import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, Pressable, Animated } from "react-native";
import { Bike } from "lucide-react-native";

const Marker = ({ distance = "1.2 km", time = "15 mins" }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const containerStyle = {
    width: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 160],
    }),
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [54, 50],
    }),
  };

  return (
    <Pressable onPress={handlePress} style={styles.markerContainer}>
      <Animated.View style={[styles.ellipticalMarker, containerStyle]}>
        <View style={styles.row}>
          <View style={styles.ellipseInner}>
            <Bike color="white" size={20} />
          </View>
          {expanded && (
            <>
              <Text style={styles.markerText}>{distance}</Text>
              <Text style={styles.markerText}>{time}</Text>
            </>
          )}
        </View>
      </Animated.View>
      {!expanded && <View style={styles.markerPointer} />}
    </Pressable>
  );
};

export default Marker;

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  ellipticalMarker: {
    width: 40, // Adjusted width
    height: 35, // Adjusted height
    borderRadius: 25, // Adjusted border radius
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ellipseInner: {
    width: 43,
    height: 38,
    borderRadius: 99,
    backgroundColor: "#AF52DE",
    justifyContent: "center",
    alignItems: "center",
    // padding: 5,
  },
  markerPointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 13,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    marginTop: -3,
    borderTopColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  markerText: {
    color: "#AF52DE",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
