import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LoginScreen from "./screen/LoginScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import ShowDetailScreen from "./screen/ShowDetailScreen";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [scannedData, setScannedData] = useState('');

  const scannedDataHandler = (data) => {
    setScannedData(data);
  }

  let content = <LoginScreen isUserLoggedIn={isUserLoggedIn} />;

  if (isUserLoggedIn) {
    content = <WelcomeScreen scannedDataHandler={scannedDataHandler} />;
  }
  if(isUserLoggedIn && scannedData) {
    content = <ShowDetailScreen data={scannedData} />
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
    backgroundColor: "white"
  },
});
