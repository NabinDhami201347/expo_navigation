import { View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/">Login</Link>
    </View>
  );
};

export default Profile;
