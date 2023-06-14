import { View, Pressable, Text } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.replace("home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>

      <Link href="register">Create Account</Link>
    </View>
  );
};

export default LoginPage;
