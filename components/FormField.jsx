import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import eye from "../assets/eye.png";
import eye_hide from "../assets/eye-hide.png";

const FormField = ({
  title,
  handleChange,
  textStyle,
  editable = true,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="py-4 w-full">
      <Text className={`text-gray-500 ${textStyle}`}>{title}</Text>
      <View className="border-[1px] h-12 bg-white rounded-md mt-2 focus:border-primary flex-row items-center border-slate-200">
        <TextInput
          editable={editable}
          className="flex-1 px-2"
          value={value}
          onChangeText={handleChange}
          placeholder={title.toLowerCase()}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className="h-5 w-5 mr-2 opacity-50"
              resizeMode="contain"
              source={showPassword ? eye : eye_hide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
