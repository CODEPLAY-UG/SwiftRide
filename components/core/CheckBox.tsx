import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckMark from "@/assets/svgs/checkmark";

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && (
        <CheckMark
          className=""
          // onPress={function (): void {}}
          width={20}
          height={20}
          stroke={"#ffffff"}
        />
      )}
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.checkboxContainer}>
        <MyCheckbox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0,
    borderColor: "#636363",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#636363",
  },
  appContainer: {
    // flex: 1,
    alignItems: "center",
    paddingVertical: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
