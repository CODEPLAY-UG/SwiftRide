import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Safety() {
  return (
    <SafeAreaView className=''>
        <Stack.Screen options={{ title: "Safety", headerTitleAlign: "center" }} />
      <View className='justify-center items-center gap-[10px]'>
      <Image className='w-[200px] h-[200px] '
      source={require('@assets/images/safetyheader.png')}/>
      </View>
      <View className='px-[16px] gap-[16px]'>
      <Text className=' pt-[8px]  pb-[24px]'>Enable your safety features for a smooth and safe journey.</Text>
      </View>
      <View className='flex flex-col  px-[16px]'>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-400'><Text>Emergency contacts</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-300'><Text>Share trip status</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-200'><Text>Link SwiftRide to my health app</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-100'><Text>Log a support request</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-300'><Text>Add trusted contacts</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-200'><Text>Receipts</Text></TouchableOpacity></View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] bg-slate-400'><Text>Articles</Text></TouchableOpacity></View>
      </View>
    </SafeAreaView>
  )
}