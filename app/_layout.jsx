import React, { Text } from "react-native";
import { Slot, Stack } from "expo-router";
import Context from "../context/UserContext";

const RootLayout = () => {
  return (
    <>
      <Context>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </Context>
    </>
  );
};

export default RootLayout;
