import { ScrollView, TouchableOpacity, View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-root-toast";
import Container from "../../components/Container";
import Unstuffed from "../../components/Unstuffed.jsx";
import FormField from "../../components/FormField.jsx";
import MyButton from "../../components/MyButton.jsx";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { signIn } from "../../server/appwrite.js";
import Spinner from "react-native-loading-spinner-overlay";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { email, password } = form;

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      const session = await signIn({ email: email, password: password });

      if (!session) {
        setError("Invalid Credentials");
      } else {
        setError("");
        setForm({ email: "", password: "" });
        router.push("/browse");
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
        <View className="items-center justify-center w-full min-h-[100vh]">
          <Spinner
            visible={isSubmitting}
            textContent="Logging In..."
            textStyle={{ color: "white" }}
          />
          <Unstuffed />

          <View className="w-full">
            <FormField
              title="Email"
              value={form.email}
              handleChange={(e) => setForm((prev) => ({ ...prev, email: e }))}
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
              title="Login"
              handlePress={handleLogin}
              containerStyles="mt-4 h-12"
              textStyles="font-bold"
            />

            <View className="gap-2 mt-1 items-center">
              <View className=" flex-row gap-2">
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push("/signup")}>
                  <Text className="underline text-primary font-bold">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text className="underline text-primary font-bold">
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
      <StatusBar backgroundColor="white" />
    </ScrollView>
  );
};

export default Login;
