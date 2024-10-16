import { FlatList, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getNGO } from "../server/appwrite";
import Toast from "react-native-root-toast";
import { TouchableOpacity } from "react-native";

const Organizations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNgo = async () => {
      try {
        setIsLoading(true);
        const ngo = await getNGO();

        setData(ngo);
      } catch (error) {
        Toast.show(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNgo();
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>Loading Lists of NGOs...</Text>
      </View>
    );

  return (
    <View className="w-full">
      <Text className={`text-primary text-xl font-bold mb-4`}>
        Available Organizations
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => setSelectedOrg(item.$id)}
              className={`w-16 h-16 border-[1px] rounded-full items-center justify-center mr-10 ${
                selectedOrg == item.$id ? "border-primary border-2" : ""
              }`}
            >
              <Image source={{ uri: item.logo }} resizeMode="contain" />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="mt-2 w-[90vw]">
            <Text className="text-center text-red-600 font-bold">
              Sorry, there are no available organizations
            </Text>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

export default Organizations;
