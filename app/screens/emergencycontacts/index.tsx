import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { Search } from 'lucide-react-native'

export default function EmergencyContacts() {
    
  return (
    <View className='bg-white h-full w-full'>
        <Stack.Screen options={{ title: "Emergency contacts", headerTitleAlign: "center" }} />

        <Text className='py-[12px] px-[16px]'>Choose Contact</Text>
        <View className='bg-[#F0F0F0] rounded-[24px] h-[36px] w-[343px]  flex-row'>
        <Search color='#616161'/>
        <TextInput className=''
        placeholder='Search'
        placeholderTextColor="#616161"/>
        </View>
        <Text className='text-center'>Select Contact</Text>
        
    </View>
   
  )
}