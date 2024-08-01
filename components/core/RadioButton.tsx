import { Pressable, StyleSheet, Text } from "react-native";
import Tick from "@/assets/svgs/tick";

type RadioButtonProps = {
  checked: boolean;
  onPress: () => void;
};

function RadioButton({ checked, onPress }: RadioButtonProps) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onPress}
    >
      {checked && <Tick width={20} height={20} stroke={"#1be7ff"} />}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#cccccc",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#efefd0",
  },
});

export default RadioButton;
