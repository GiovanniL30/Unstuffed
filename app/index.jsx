import {
  ScrollView,
  Image,
  Text,
  View,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { Redirect, router } from "expo-router";
import Unstuffed from "../components/Unstuffed";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import { useUserContext } from "../context/UserContext";
import Spinner from "react-native-loading-spinner-overlay";

export default function App() {
  const { isLoading, isLoggedIn } = useUserContext();

  if (isLoggedIn) return <Redirect href="/browse" />;

  return (
    <SafeAreaView className="bg-white px-4">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Spinner
          visible={isLoading}
          textContent="Loading..."
          textStyle={{ color: "white" }}
        />
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
