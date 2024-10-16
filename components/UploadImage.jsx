import { Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const UploadImage = () => {
  const [images, setImages] = useState([]);

  const uploudImage = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpg"],
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0]]);
    }
  };

  return (
    <View className="w-full mt-7">
      <Text className="text-primary text-xl font-bold mb-4">
        Upload Photos of Donation
      </Text>
      <View className="flex flex-wrap flex-row justify-between">
        {images.map((data, index) => (
          <View
            key={index}
            className="w-[30%] h-24 border-2 border-slate-50 mb-4 flex items-center justify-center relative"
          >
            <Text>{data}</Text>
            <TouchableOpacity
              onPress={() =>
                setImages((prev) => prev.filter((_, i) => i !== index))
              }
              className="absolute -top-2 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center"
            >
              <Text className="text-white font-bold" style={{ fontSize: 10 }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity
          onPress={uploudImage}
          className="w-[30%] h-24 bg-gray-400 rounded-sm flex items-center justify-center mb-4"
        >
          <Text className="font-bold text-white text-4xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;
