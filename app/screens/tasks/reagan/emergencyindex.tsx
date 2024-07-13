import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Search } from 'lucide-react-native'

export default function EmergencyContacts() {
    
  return (
    <View className='bg-white h-full w-full'>
        <Stack.Screen options={{ title: "Emergency contacts", headerTitleAlign: "center" }} />

        <Text className='py-[12px] px-[16px]'>Choose Contact</Text>
        <View className='bg-[#F0F0F0] rounded-[24px] h-[36px] w-[343px] flex-row items-center mx-6'>
        <Search color='#616161' size={20} className='px-4'/>
        <TextInput className='flex-1'
        placeholder='Search'
        placeholderTextColor="#616161"
        selectionColor='#808080'/>
        </View>
        <Text className='text-center p-[16px]'>Select Contact</Text>
        
    </View>
   
  )
}