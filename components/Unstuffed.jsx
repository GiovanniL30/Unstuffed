import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../assets/logo.png";

const Unstuffed = () => {
  return (
    <View className="flex-row justify-center items-center ">
      <Image className="h-36 w-36" source={logo} resizeMode="contain" />
      <View className="mb-14">
        <Text className="text-primary font-bold text-5xl">Unstuffed</Text>
        <Text className="text-slate-500">sell, share, sustain</Text>
      </View>
    </View>
  );
};

export default Unstuffed;
