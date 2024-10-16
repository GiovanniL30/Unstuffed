import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-root-toast";
import Container from "../../components/Container";
import Unstuffed from "../../components/Unstuffed.jsx";
import FormField from "../../components/FormField.jsx";
import MyButton from "../../components/MyButton.jsx";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createUser } from "../../server/appwrite.js";
import Spinner from "react-native-loading-spinner-overlay";

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    contactNumber: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSignup = async () => {
    const { firstName, lastName, email, contactNumber, password, middleName } =
      form;

    if (!firstName || !lastName || !email || !contactNumber || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      const newUser = await createUser({
        email: email,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        contactNumber: contactNumber,
        password: password,
      });

      if (newUser) {
        setError("");
        setForm({
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          contactNumber: "",
          password: "",
        });
        Toast.show("Created Account Successfully", {
          duration: Toast.durations.LONG,
        });
        router.push("/login");
      } else {
        Toast.show("Having Error Creating Account", {
          duration: Toast.durations.LONG,
        });
      }
    } catch (error) {
      Toast.show(error.message, { duration: Toast.durations.LONG });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView>
      <Container>
        <View className="items-center justify-center w-full min-h-[100vh] py-20">
          <Spinner
            visible={isSubmitting}
            textContent="Signing Up..."
            textStyle={{ color: "white" }}
          />
          <Unstuffed />
          <Text className="text-3xl font-bold  mt-20 text-primary">
            Create Your Account
          </Text>
          <View className="gap-2  items-center mb-5">
            <View className="flex-row gap-2">
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className="underline text-primary font-bold">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full">
            <FormField
              title="First Name"
              value={form.firstName}
              handleChange={(e) =>
                setForm((prev) => ({ ...prev, firstName: e }))
              }
            />
            <FormField
              title="Last Name"
              value={form.lastName}
              handleChange={(e) =>
                setForm((prev) => ({ ...prev, lastName: e }))
              }
            />
            <FormField
              title="Middle Name"
              value={form.middleName}
              handleChange={(e) =>
                setForm((prev) => ({ ...prev, middleName: e }))
              }
            />
            <FormField
              title="Email"
              value={form.email}
              handleChange={(e) => setForm((prev) => ({ ...prev, email: e }))}
            />
            <FormField
              title="Contact Number"
              value={form.contactNumber}
              handleChange={(e) =>
                setForm((prev) => ({ ...prev, contactNumber: e }))
              }
            />
            <FormField
              title="Password"
              value={form.password}
              handleChange={(e) =>
                setForm((prev) => ({ ...prev, password: e }))
              }
            />
            {error && <Text className="text-red-600 text-center">{error}</Text>}
            <MyButton
              disabled={isSubmitting}
              title="Signup"
              handlePress={handleSignup}
              containerStyles="mt-4 h-12"
              textStyles="font-bold"
            />
          </View>
        </View>
      </Container>
      <StatusBar backgroundColor="white" />
    </ScrollView>
  );
};

export default Signup;
