import { View, Text, StatusBar, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import FormField from "../../components/FormField";
import Organizations from "../../components/Organizations";
import UploadImage from "../../components/UploadImage";

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
          <FormField
            title="Location"
            value="2600 North Cambridge Condominium, Bareng Drive"
            handleChange={() => {}}
            editable={false}
            textStyle={"text-primary text-xl font-bold"}
          />
          <Organizations />
        </View>
      </Container>
    </ScrollView>
  );
};

export default Donate;
