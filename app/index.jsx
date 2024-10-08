import { ScrollView, Image, Text, View, Button, StatusBar } from "react-native";
import { Link, router } from "expo-router";
import logo from "../assets/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";

export default function App() {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-full px-4">
          <View className="flex-row justify-center items-center ">
            <Image className="h-36 w-36" source={logo} resizeMode="contain" />
            <View className="mb-14">
              <Text className="text-primary font-bold text-5xl">Unstuffed</Text>
              <Text className="text-slate-500">sell, share, sustain</Text>
            </View>
          </View>
          <MyButton
            title={"Get Started"}
            containerStyles={"mt-20 py-3"}
            handlePress={() => {
              router.push("/browse");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
