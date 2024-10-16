import { View, Text, StatusBar, Platform } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import MyButton from "../../components/MyButton";
import { signOut } from "../../server/appwrite";
import Toast from "react-native-root-toast";
import Spinner from "react-native-loading-spinner-overlay";
import { router } from "expo-router";
import { useUserContext } from "../../context/UserContext";

const Me = () => {
  const { user } = useUserContext();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      const session = await signOut();

      if (session) {
        router.push("/login");
      } else {
        Toast.show("Failed to Sign out");
      }
    } catch (error) {
      Toast.show("Failed to Sign out: " + error.message);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Container>
      <Spinner
        visible={isSigningOut}
        textContent="Signing Out..."
        textStyle={{ color: "white" }}
      />
      <View className="flex-1 items-center justify-center">
        <Text className="text-center text-2xl font-bold mb-10">{`${user.firstName} ${user.lastName}`}</Text>
        <MyButton
          title="Logout"
          containerStyles={"h-12"}
          handlePress={handleSignOut}
        />
      </View>
    </Container>
  );
};

export default Me;
