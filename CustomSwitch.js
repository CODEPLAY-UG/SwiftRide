import React from "react";
import { View, Switch } from "react-native";
import { SwitchProps } from "react-native-paper";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function CustomSwitch(props) {
  return (
    <View>
      <Switch trackColor={{ false: "#636363", true: "#107808", height: "51px" }} thumbColor={"#FFFFFF"} ios_backgroundColor={"red"} onValueChange={props.toggleSwitch} value={props.isEnabled} />
    </View>
  );
}
