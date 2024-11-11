import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  onColor?: string;
  offColor?: string;
  label?: string;
  onToggle: () => void;
  style?: object;
  isOn: boolean;
  labelStyle?: object;
}

const Toggle: React.FC<Props> = ({
  onColor = "#636363",
  offColor = "#636363",
  label = "",
  onToggle,
  style = {},
  isOn = false,
  labelStyle = {},
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.setValue(isOn ? 0 : 1);

    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 23],
  });

  const color = isOn ? onColor : offColor;

  return (
    <View style={styles.container}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <TouchableOpacity activeOpacity={1} onPress={onToggle}>
        <View
          style={[styles.toggleContainer, style, { backgroundColor: color }]}
        >
          <Animated.View
            style={[
              styles.toggleWheelStyle,
              {
                marginLeft: moveToggle,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleContainer: {
    width: 51,
    height: 31,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: "center",
  },
  label: {
    marginRight: 2,
  },
  toggleWheelStyle: {
    width: 26,
    height: 26,
    backgroundColor: "white",
    borderRadius: 12.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});

export default Toggle;
