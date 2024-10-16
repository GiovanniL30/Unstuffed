import { TouchableOpacity, Text } from "react-native";
import React from "react";

const MyButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      className={`bg-primary w-full items-center rounded-md justify-center ${containerStyles}`}
    >
      <Text className={`text-white uppercase ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
