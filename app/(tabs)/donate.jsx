import { View, Text, StatusBar, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import FormField from "../../components/FormField";
import Organizations from "../../components/Organizations";
import UploadImage from "../../components/UploadImage";
import MyButton from "../../components/MyButton";

const Donate = () => {
  return (
    <ScrollView className="bg-white">
      <Container>
        <View>
          <FormField
            title="Your Current Location"
            value="2600 North Cambridge Condominium, Bareng Drive"
            handleChange={() => {}}
            editable={false}
            textStyle={"text-primary text-xl font-bold"}
          />

          <Organizations />
          <UploadImage />
          <FormField
            title="Location"
            value="2600 North Cambridge Condominium, Bareng Drive"
            handleChange={() => {}}
            editable={false}
            textStyle={"text-primary text-xl font-bold"}
          />
          <MyButton
            title="Donate"
            handlePress={() => {}}
            containerStyles="h-12 mt-8"
          />
        </View>
      </Container>
    </ScrollView>
  );
};

export default Donate;
