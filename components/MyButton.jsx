import { TouchableOpacity, Text } from "react-native";
import React from "react";

const MyButton = ({ title, handlePress, containerStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-primary w-full items-center rounded-md ${containerStyles}`}
    >
      <Text className="text-white uppercase">{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
