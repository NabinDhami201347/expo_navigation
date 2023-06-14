import { View, Text } from "react-native";
import { Link } from "expo-router";

import React from "react";

const ListPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/list/1">List One</Link>
      <Link href="/list/2">List Two</Link>
      <Link href="/list/3">List Three</Link>
    </View>
  );
};

export default ListPage;
