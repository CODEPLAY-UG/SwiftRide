import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onColor?: string;
  offColor?: string;
  label?: string;
  onToggle: () => void;
  style?: object;
  labelStyle?: object;
}

const Toggle: React.FC<Props> = ({
  onColor = "#636363",
  offColor = "#636363",
  label = "",
  onToggle,
  style = {},
  labelStyle = {},
}) => {
  const [isOn, setIsOn] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadToggleState = async () => {
      try {
        const storedState = await AsyncStorage.getItem("toggleState");
        if (storedState !== null) {
          setIsOn(JSON.parse(storedState));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadToggleState();
  }, []);

  useEffect(() => {
    animatedValue.setValue(isOn ? 0 : 1);

    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  useEffect(() => {
    const saveToggleState = async () => {
      try {
        await AsyncStorage.setItem("toggleState", JSON.stringify(isOn));
      } catch (error) {
        console.error(error);
      }
    };
    saveToggleState();
  }, [isOn]);

  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 23],
  });

  const color = isOn ? onColor : offColor;

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle();
  };

  return (
    <View style={styles.container}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <TouchableOpacity activeOpacity={1} onPress={handleToggle}>
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
