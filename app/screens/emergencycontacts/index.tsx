import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

export default function EmergencyContacts() {
    
  return (
    <SafeAreaView>
        <Stack.Screen options={{ title: "Emergency contacts", headerTitleAlign: "center" }} />
        <View>
            <Text>EmergencyContacts</Text>
        </View>
    </SafeAreaView>
   
  )
}