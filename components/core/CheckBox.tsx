import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Tick from "@/assets/svgs/tick";

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && (
        <Tick
          className=""
          // onPress={function (): void {}}
          width={20}
          height={20}
          stroke={"#1be7ff"}
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
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#cccccc",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#efefd0",
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
