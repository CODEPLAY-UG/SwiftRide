import { View, Text, TextInput, Pressable, Modal } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Info, Plus, Trash2 } from 'lucide-react-native'
import { useState } from 'react'

export default function AirtelMobileMoney() {
    const [isModalVisible,setIsModalVisible] =useState(false)
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isTyping,setIsTyping] =useState(false)
    const [input,setInput] =useState('')

    const handleInputChange = (text: string) => {
      setInput(text.trim());
  
      if (text.trim() === '') {
        setIsTyping(false);
        setErrorMessage('');
      } else {
        const numberValue = parseFloat(text);
        if (numberValue >= 5000) {
          setIsTyping(true);
          setErrorMessage('');
        } else {
          setIsTyping(false);
          setErrorMessage('The minimum amount is UGX 5,000. Please increase your amount.');
        }
        
      }
    };


  return (
    <SafeAreaView className='bg-white h-full'>
        <View>
          <Stack.Screen options={{ title: "AIRTEL Mobile Money", headerTitleAlign: "center", 
          headerRight: ()=> <Trash2 color='#C50F1F' size={24} onPress={()=> setIsModalVisible(true)}/>
            
           }} />
              <View className='flex-row justify-center space-x-4 px-8'>
              <View className='justify-center'>
                <Info color='#107C10' size={16}/>
              </View>
                <Text className='text-[13px] leading-5 tracking-[0.23px] '>You can use Airtel mobile money to pay for rides by topping up your wallet balance with Airtel mobile money.</Text>
              </View>
          <View className='flex-row space-x-4 px-6 h-[46px]'>
          <View className='justify-center '>
              <Plus color='#808080' size={24}/>
          </View>
              <View className='flex-1 justify-center'>
                  <TextInput
                          className="text-[17px] py-3 leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]"
                          placeholder="Add trip coins"
                          placeholderTextColor='#616161'
                          selectionColor='#808080'
                          keyboardType='numeric'
                          value={input}
                          onChangeText={handleInputChange}
                        />
              </View>
          </View>
             <View className='px-10'>
                {errorMessage ? <Text className='text-red-400'>{errorMessage}</Text> : null}
             </View>
          <View className='px-4 pt-12'>
          <Pressable
              
              className=" w-full h-[52px] items-center justify-center rounded-full"
              style={[
                { backgroundColor: isTyping || input !== '' ? '#636363' : '#F0F0F0' },
              
              ]}
            >
              <Text className="text-[#BDBDBD] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                Confirm
              </Text>
            </Pressable>
          </View>
            
                <Modal visible={isModalVisible}
                transparent={true}
                animationType='slide'
                >
                <View className='h-1/3 mt-auto bg-[#FFFFFF] rounded-t-lg border'>
                    
                            <View className='justify-center items-center h-[52px]'>
                                <Text className='font-semibold text-[20px] leading-[25px] tracking-[-0.45px]'>Remove (payment method)</Text>
                            </View>
                            <View className='h-[36px] px-4'>
                                <Text className='text-[13px] text-[#242424] leading-[18px] tracking-[-0.08px]'>Are you sure you want to remove this payment method? Removing it will mean you cannot use it to pay for trips.</Text>
                            </View>
                    
                        <View className='px-4 pt-6'>
                            <Pressable
                    
                                className="bg-[#C50F1F] w-full h-[52px] items-center justify-center rounded-[99px]">
                                 <Text className="text-[#FFFFFF] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                                     Continue
                                 </Text>
                             </Pressable>
                        </View>
                        <View className='px-4 pt-3'>
                             <Pressable
                                onPress={()=> setIsModalVisible(false)}
                                className="bg-[#FFFFFF] w-full h-[52px] items-center justify-center rounded-[99px]">
                                 <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                                     Cancel
                                 </Text>
                             </Pressable>
                        </View>
                </View>
                </Modal>
        </View>
    </SafeAreaView>
  )
}