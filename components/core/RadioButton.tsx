import { Pressable, StyleSheet } from "react-native";
import CheckMark from "@/assets/svgs/checkmark";

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
      {checked && <CheckMark width={20} height={20} stroke={"#636363"} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 12, // Changed to make it circular, consistent with iOS look
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "transparent",
    opacity: 0, // Set opacity to 0 to make it invisible
  },
  checkboxChecked: {
    backgroundColor: "transparent",
    opacity: 1, // Set opacity to 1 to make it visible when checked
  },
});

export default RadioButton;
