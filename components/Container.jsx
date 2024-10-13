import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";

const Container = ({ children }) => {
  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        flex: 1,
      }}
      className="px-5 bg-white h-full w-full"
    >
      {children}
    </View>
  );
};

export default Container;
