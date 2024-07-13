import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

export default function TaskIndex() {
  const handleLocationreagan = () => {
    router.push("./reagan");
  };
  return (
    <View className="h-full justify-center gap-5 items-center">
      <Stack.Screen options={{ title: "Tasks", headerTitleAlign: "center" }} />
      <TouchableOpacity className="">
        <Text>Emma</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Joy</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Leon</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={handleLocationreagan} 
       className="">
        <Text>Reagan</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Scout</Text>
      </TouchableOpacity>
    </View>
  );
}
