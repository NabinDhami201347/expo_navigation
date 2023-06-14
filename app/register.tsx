import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

const RegisterPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default RegisterPage;
