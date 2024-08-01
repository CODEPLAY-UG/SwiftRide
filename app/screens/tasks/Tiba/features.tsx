import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import RadioButton from "@/components/core/RadioButton";

export default function features() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const checkboxes = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  const handleCheckboxPress = (id) => {
    setSelectedCheckbox(id);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.checkboxContainer}>
        {checkboxes.map((checkbox) => (
          <RadioButton
            key={checkbox.id}
            checked={selectedCheckbox === checkbox.id}
            onPress={() => handleCheckboxPress(checkbox.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  checkboxContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
});
