import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Stack } from "expo-router";
import { Info, Plus, Trash2, X } from "lucide-react-native";
import { useState } from "react";

export default function MtnMobileMoney() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeight] = useState(new Animated.Value(298)); // Initial height of modal
  const [isDeleted, setDeleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  const textColor = isTyping || input !== "" ? "#FFFFFF" : "#BDBDBD";
  const borderColor =
    input !== "" && parseFloat(input) < 5000 ? "red" : "#D1D1D1";

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setDeleted(false);
    modalHeight.setValue(298); // Reset modal height for future uses
  };

  const handleContinue = () => {
    // Animate the modal height reduction
    Animated.timing(modalHeight, {
      toValue: 166,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setDeleted(true); // Change state after animation is complete
    });
  };

  const clearInput = () => {
    setInput("");
    setErrorMessage("");
  };

  const handleInputChange = (text: string) => {
    setInput(text.trim());

    if (text.trim() === "") {
      setIsTyping(false);
      setErrorMessage("");
    } else {
      const numberValue = parseFloat(text);
      if (numberValue >= 5000) {
        setIsTyping(true);
        setErrorMessage("");
      } else {
        setIsTyping(false);
        setErrorMessage(
          "The minimum amount is UGX 5,000. Please increase your amount."
        );
      }
    }
  };

  return (
    <View className="bg-white h-full">
      <View>
        <Stack.Screen
          options={{
            title: "MTN Mobile Money",
            headerTitleAlign: "center",
            headerShown: true,
            headerRight: () => (
              <Trash2 color="#C50F1F" size={24} onPress={openModal} />
            ),
          }}
        />
        <View className="flex-row justify-center space-x-4 px-8 py-1">
          <View className="justify-center">
            <Info color="#107C10" size={16} />
          </View>
          <Text className="text-[13px] leading-5 tracking-[0.23px] ">
            You can use MTN mobile money to pay for rides by topping up your
            wallet balance with MTN mobile money.
          </Text>
        </View>
        <View className="flex-row space-x-4 px-6 h-[46px]">
          <View className="justify-center ">
            <Plus color="#808080" size={24} />
          </View>
          <View
            className=" flex-row flex-1 justify-center border-b-[1px]"
            style={[{ borderBottomColor: borderColor }]}
          >
            <TextInput
              className=" flex-1 text-[17px] py-3 leading-[22px] tracking-[-0.43px]  "
              placeholder="Add trip coins"
              placeholderTextColor="#616161"
              selectionColor="#808080"
              keyboardType="numeric"
              value={input}
              onChangeText={handleInputChange}
            />

            {input !== "" && (
              <TouchableOpacity
                className=" justify-center"
                onPress={clearInput}
              >
                <View className="bg-[#616161] p-[3px] rounded-full">
                  <X color="white" size={16} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="px-16">
          {errorMessage ? (
            <Text className="text-red-400">{errorMessage}</Text>
          ) : null}
        </View>
        <View className="px-4 pt-12">
          <Pressable
            className=" w-full h-[52px] items-center justify-center rounded-full "
            style={[
              {
                backgroundColor:
                  input !== "" && parseFloat(input) >= 5000
                    ? "#636363"
                    : "#F0F0F0",
              },
            ]}
          >
            <Text
              className="text-[17px] font-[600] leading-[22px] tracking-[-0.43px]"
              style={[{ color: textColor }]}
            >
              Confirm
            </Text>
          </Pressable>
        </View>
        {/* modal */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <TouchableOpacity className="flex-1" onPress={closeModal}>
            <View className=" mt-auto bg-[#FFFFFF] rounded-t-3xl border">
              <TouchableOpacity activeOpacity={1}>
                <Animated.View style={[{ height: modalHeight }]}>
                  {isDeleted ? (
                    <>
                      <View className="justify-center items-center h-[52px]">
                        <Text className="font-semibold text-[20px] leading-[25px] tracking-[-0.45px]">
                          (payment method) deleted
                        </Text>
                      </View>
                      <View className="h-[36px] px-4">
                        <Text className="text-center text-[13px] text-[#242424] leading-[18px] tracking-[-0.08px]">
                          (payment method) has been removed from your payment
                          methods.
                        </Text>
                      </View>
                    </>
                  ) : (
                    <>
                      <View className="justify-center items-center h-[52px]">
                        <Text className="font-semibold text-[20px] leading-[25px] tracking-[-0.45px]">
                          Remove (payment method)
                        </Text>
                      </View>
                      <View className="h-[36px] px-4">
                        <Text className="text-[13px] text-[#242424] leading-[18px] tracking-[-0.08px]">
                          Are you sure you want to remove this payment method?
                          Removing it will mean you cannot use it to pay for
                          trips.
                        </Text>
                      </View>
                      <View className="px-4 pt-6">
                        <Pressable
                          onPress={handleContinue}
                          className="bg-[#C50F1F] w-full h-[52px] items-center justify-center rounded-[99px]"
                        >
                          <Text className="text-[#FFFFFF] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                            Continue
                          </Text>
                        </Pressable>
                      </View>
                      <View className="px-4 pt-3">
                        <Pressable
                          onPress={closeModal}
                          className="bg-[#F0F0F0] w-full h-[52px] items-center justify-center rounded-[99px]"
                        >
                          <Text className="text-[#636363] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
                            Cancel
                          </Text>
                        </Pressable>
                      </View>
                    </>
                  )}
                </Animated.View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        {/* modal */}
      </View>
    </View>
  );
}
