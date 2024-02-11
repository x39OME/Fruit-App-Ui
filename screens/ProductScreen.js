import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import {StarRating, StarRatingDisplay } from 'react-native-star-rating-widget';

export default function ProductScreen(props) {

  let fruit = props.route.params;
  const navigation = useNavigation();
  // console.log('fruit: ',fruit);
  const [rating, setRating] = useState(0);

  return (
    <View className="flex-1" style={{backgroundColor: fruit.color}}> 
      <SafeAreaView>

        {/* Back Icon */}
        <View className="flex-row justify-start mx-5">
          <TouchableOpacity
            onPress={()=> navigation.goBack()}
            style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
            className="border border-gray-50 rounded-xl mt-2">
            <ChevronLeftIcon size="30" color="white" />
          </TouchableOpacity>
        </View>

        {/* Image */}
        <View className="flex-row justify-center mt-5 pb-10" style={{
          shadowColor: fruit.shadow,
          shadowRadius: 50,
          shadowOffset: {width: 0, height: 50},
          shadowOpacity: 0.7,
        }}>
          <Image source={fruit.image} style={{width: 290, height: 290}} />
        </View>
      </SafeAreaView>

      <View style={{borderTopLeftRadius: 45, borderTopRightRadius: 45}} className="bg-orange-100 flex-1 px-6 space-y-2">

        {/* Name Fruit */}
        <Text style={{color: themeColors.text}} className="mt-8 text-2xl font-bold">{fruit.name}</Text>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">
              Sold <Text className="text-gray-800 font-extrabold"> 239</Text>
          </Text>
        </View>

        {/* Star Rating */}
        <StarRatingDisplay
          maxStars={5}
          rating={fruit.stars}
          starSize={25}
          emptyColor="lightgray"
        />

        {/* Description */}
        <View style={{height: 165}}>
          <Text style={{color: themeColors.text}} className="tracking-wider py-3 ">
            Lorem Ipsum is simply dummy text of the print and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a bad galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic wisa typesetting.
          </Text>
        </View>

        <View className="flex-row justify-between items-center">

          {/* Price */}
          <Text className="text-2xl">$ {fruit.price}</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Cart')} className="p-3 ml-6 flex-1 rounded-xl"
            style={{
              backgroundColor: fruit.shadow, 
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 25,
              shadowOffset: {width: 0, height: 15},
              shadowOpacity: 0.5,}}>

            {/* Add To Cart */}
            <Text className="text-lg text-center font-bold text-white">Add To Cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}