import {
  ScrollView,
  Image,
  Text,
  View,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Unstuffed from "../components/Unstuffed";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";

export default function App() {
  return (
    <SafeAreaView className="bg-white px-4">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full justify-center items-center">
          <Unstuffed />
          <MyButton
            title={"Get Started"}
            containerStyles={"mt-20 py-3 "}
            handlePress={() => {
              router.push("/login");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
