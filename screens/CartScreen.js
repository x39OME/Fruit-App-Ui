import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import FruitCart from '../components/fruitCart';
import { cartItems } from '../constants';
import { themeColors } from '../theme';

export default function CartScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-100">

      <View className="flex-row justify-start mx-5 mt-4">
        <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-white rounded-xl">
          <ChevronLeftIcon size="30" color="black" />
        </TouchableOpacity>
      </View>

      <View className="cart mx-5 flex-1">

        {/* Cart */}
        <Text style={{color: themeColors.text}} className="text-2xl py-10">Your 
          <Text className="font-bold"> Cart</Text>
        </Text>

        {/* Products */}
        <View>
          {
            cartItems.map((item,index)=> <FruitCart fruit={item} key={index} />)
          }
        </View>

        {/* Price */}
        <View className="flex-row justify-end py-4">
          <Text className="text-lg">Total price: <Text className="font-bold text-white">$ 63.50</Text></Text>
        </View>

      </View>

      {/* Payment */}
      <View className="flex-row justify-between items-center mx-10 mb-6">
        <TouchableOpacity className="p-3 flex-1 rounded-xl" style={{
            backgroundColor: 'orange', 
            opacity: 0.8,
            shadowColor: 'orange',
            shadowRadius: 25,
            shadowOffset: {width: 0, height: 15},
            shadowOpacity: 0.4,
        }}>

          <Text className="text-xl text-center text-white font-bold">Payment</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}