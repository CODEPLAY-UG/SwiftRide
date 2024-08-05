import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButton from "@components/core/RadioButton";
import { Stack } from "expo-router";

export default function Trinity() {
  const [selectedOption, setSelectedOption] = useState<number>(4);

  const handlePress = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "Radio Buttons",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
          headerStyle: {
            // height: 100, // Set the desired height for the header
            backgroundColor: "#fdd700", // Optional: set the background color
          },
        }}
      />
      <Text style={styles.title}>Menu</Text>
      <View style={styles.optionContainer}>
        <RadioButton
          checked={selectedOption === 1}
          onPress={() => handlePress(1)}
        />
        <Text style={styles.optionText}>Fish Fillet</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          checked={selectedOption === 2}
          onPress={() => handlePress(2)}
        />
        <Text style={styles.optionText}>Malewa</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          checked={selectedOption === 3}
          onPress={() => handlePress(3)}
        />
        <Text style={styles.optionText}>Gnuts</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          checked={selectedOption === 4}
          onPress={() => handlePress(4)}
        />
        <Text style={styles.optionText}>Chicken</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          checked={selectedOption === 5}
          onPress={() => handlePress(5)}
        />
        <Text style={styles.optionText}>Mukene</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
  },
});
