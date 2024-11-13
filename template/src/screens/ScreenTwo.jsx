import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ScreenTwo = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
    <Pressable onPress={()=>navigation.navigate("screen 1")} className="bg-blue-800 px-4 py-2 rounded-md">
      <Text className="text-white">Go To Screen 1</Text>
    </Pressable>
  </View>
  )
}

export default ScreenTwo