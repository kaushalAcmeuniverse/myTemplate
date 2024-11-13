import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ScreenOne = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="w-1/2 text-center mb-7 text-2xl font-semibold">The template us inside redux toolkit and tailwind css</Text>
      <Pressable
        onPress={() => navigation.navigate("screen2")}
        className="bg-blue-800 px-4 py-2 rounded-md"
      >
        <Text className="text-white">Go To Screen 2</Text>
      </Pressable>
    </View>
  );
};

export default ScreenOne;
