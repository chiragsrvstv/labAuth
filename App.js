import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LoginScreen from "./screen/LoginScreen";
import WelcomeScreen from "./screen/WelcomeScreen";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  let content = <LoginScreen isUserLoggedIn={isUserLoggedIn} />;

  if (isUserLoggedIn) {
    content = <WelcomeScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Lab Authenticator"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
