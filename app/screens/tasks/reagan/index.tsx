import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { BookUser, ChevronRight, ContactRound, Headset, HeartHandshake, Newspaper, PhoneCall, ReceiptText, Upload } from 'lucide-react-native'

export default function Safety() {
    const handleLocation = () => {
        router.push("./emergencyindex");
      };
  return (
    <View className='bg-[#FFFFFF] h-full'>
        <Stack.Screen options={{ title: "Safety", headerTitleAlign: "center" }} />
      <View className='justify-center items-center gap-[10px]'>
      <Image className='w-[200px] h-[200px] '
      source={require('@assets/images/Security-header.png')}/>
      </View>
      <View className='px-5 gap-4'>
      <Text className=' pt-2  pb-6 text-[#616161]'>Enable your safety features for a smooth and safe journey.</Text>
      </View>
      <View className='flex flex-col  px-5 text-[#242424]'>

        <View>
            <TouchableOpacity  onPress={handleLocation} className='py-3 h-12  flex-row space-x-4'>
            <BookUser color='#808080'  className='px-4'/>
            <Text className='grow'>Emergency contacts</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12  flex-row space-x-4'>
            <Upload color='#808080'className='px-4'/>
            <Text className='grow'>Share trip status</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12  flex-row space-x-4'>
        <HeartHandshake color='#808080'className='px-4'/>
            <Text className='grow'>Link SwiftRide to my health app</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12 flex-row space-x-4'>
        <Headset color='#808080' className='px-4'/>
            <Text className='grow'>Log a support request</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12  flex-row space-x-4'>
        <ContactRound color='#808080' className='px-4'/>
            <Text className='grow'>Add trusted contacts</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12  flex-row space-x-4'>
        <ReceiptText color='#808080' className='px-4'/>
            <Text className='grow'>Receipts</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12 flex-row space-x-4'>
        <Newspaper color='#808080' className='px-4'/>
            <Text className='grow'>Articles</Text>
            <ChevronRight color='#616161'/>
            </TouchableOpacity>
            </View>
        <View><TouchableOpacity className='py-3 h-12 flex-row space-x-4'>
        <PhoneCall color='#808080' className='px-4'/>
            <Text className='grow'>Call support now</Text>
            </TouchableOpacity>
            </View>
      </View>
      
    </View>
  )
}