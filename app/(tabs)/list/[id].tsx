import { View, Text } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import React from "react";

const NewsDetails = () => {
  const { id } = useSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />
      <Text> My news : {id}</Text>
    </View>
  );
};

export default NewsDetails;
