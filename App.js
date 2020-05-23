import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header"

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Lab Authenticator"} />
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   flex: 1,
  },
});
