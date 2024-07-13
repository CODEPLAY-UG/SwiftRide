import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BookUser, ChevronRight, ContactRound, Headset, HeartHandshake, Newspaper, ReceiptText, Upload } from 'lucide-react-native'

export default function Safety() {
    const handleLocation = () => {
        router.push("./emergencyindex");
      };
  return (
    <SafeAreaView className=''>
        <Stack.Screen options={{ title: "Safety", headerTitleAlign: "center" }} />
      <View className='justify-center items-center gap-[10px]'>
      <Image className='w-[200px] h-[200px] '
      source={require('@assets/images/safetyheader.png')}/>
      </View>
      <View className='px-[20px] gap-[16px]'>
      <Text className=' pt-[8px]  pb-[24px] text-[#616161]'>Enable your safety features for a smooth and safe journey.</Text>
      </View>
      <View className='flex flex-col  px-[20px] text-[#242424]'>

        <View>
            <TouchableOpacity  onPress={handleLocation} className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
            <BookUser color='#808080'  className='px-4'/>
            <Text className='grow'>Emergency contacts</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
            <Upload color='#808080'className='px-4'/>
            <Text className='grow'>Share trip status</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
        <HeartHandshake color='#808080'className='px-4'/>
            <Text className='grow'>Link SwiftRide to my health app</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
        <Headset color='#808080' className='px-4'/>
            <Text className='grow'>Log a support request</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
        <ContactRound color='#808080' className='px-4'/>
            <Text className='grow'>Add trusted contacts</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
        <ReceiptText color='#808080' className='px-4'/>
            <Text className='grow'>Receipts</Text>
            <ChevronRight color='#616161' className=''/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-[12px] h-[48px] w-[361px] flex-row space-x-4'>
        <Newspaper color='#808080' className='px-4'/>
            <Text className='grow'>Articles</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  )
}