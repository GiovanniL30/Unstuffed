import React, { Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import Context from "../context/UserContext";
import Container from "../components/Container";

const RootLayout = () => {
  return (
    <>
      <RootSiblingParent>
        <Context>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </Context>
      </RootSiblingParent>
    </>
  );
};

export default RootLayout;
