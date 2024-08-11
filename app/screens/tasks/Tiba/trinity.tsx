import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButton from "@components/core/RadioButton";
import { router, Stack } from "expo-router";
import ChevronLeft from "@/assets/svgs/chevronLeft";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Trinity() {
  const [selectedOption, setSelectedOption] = useState<number>(4);

  const handlePress = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Radio Button",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.9}
              className="ml-4"
            >
              <ChevronLeft stroke={"#616161"} width={24} height={24} />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#fdd700",
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
