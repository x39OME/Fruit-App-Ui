import {View, Text, Touchable, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native';
import {Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import {themeColors} from '../theme';
import {fruits, categories} from '../constants';
import FruitCard from '../components/fruitCard';
import FruitSales from '../components/fruitSales';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-orange-100'>

      {/* Bar */}
      <View className='mx-6 mt-2 flex-row justify-between items-center'>
        <Bars3CenterLeftIcon size='30' color='black' />
        <TouchableOpacity className='p-2 rounded-xl' style={{backgroundColor: 'rgba(255,255,255, .3)'}}>
          <ShoppingCartIcon size='25' color='orange' />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View className='mt-4'>
        <Text style={{color: themeColors.text}} className='text-2xl tracking-widest font-medium ml-5'>
          Seasonal
        </Text>
        <Text style={{color: themeColors.text}} className='text-3xl font-semibold ml-5'>
          Fruits and Vegetables
        </Text>
        <ScrollView className='mt-8 px-5' horizontal showsHorizontalScrollIndicator={false}>
          {
            categories.map((category, index)=>{
              let isActive = category == activeCategory;
              let textClass = `text-xl ${isActive? ' font-bold': ''}`;
              let buttonClass = `mr-8 relative rounded-2xl`;

              return(
                <TouchableOpacity
                  onPress={()=> setActiveCategory(category)}
                  key={index}
                  className={buttonClass}>
                  <Text style={{color: themeColors.text}} className={textClass}>{category}</Text>
                  {
                    isActive? (
                      <Text className='font-extrabold -mt-3 ml-2 text-orange-400'>
                        _ ___
                    </Text>
                    ):null
                  }
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      {/* Categories */}

      {/* Carousel */}
      <View className="carousel mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            fruits.map((fruit, index)=>{
              return (
                <FruitCard fruit={fruit} key={index} />
              )
            })
          }
        </ScrollView>
      </View>
      {/* Carousel */}

      {/* Sales !! */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">Hot Sales</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...fruits].reverse().map((fruit, index)=>{
              return (
                <FruitSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
      </View>
      {/* Sales !! */}
    </SafeAreaView>
  )
}