import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LoginScreen from "./screen/LoginScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import ShowDetailScreen from "./screen/ShowDetailScreen";

// Firestore setup
import * as firebase from "firebase";
import firebaseConfig from "../constants/firebaseConfig";

// Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initializing Firebase

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const dbCheck = (labname) => {
  database.ref("labs/");
};

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [scannedData, setScannedData] = useState("");

  const scannedDataHandler = (data) => {
    setScannedData(data);
  };

  let content = <LoginScreen isUserLoggedIn={isUserLoggedIn} />;

  if (isUserLoggedIn) {
    content = <WelcomeScreen scannedDataHandler={scannedDataHandler} />;
  }
  if (isUserLoggedIn && scannedData) {
    dbCheck("a");
    content = <ShowDetailScreen data={scannedData} />;
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
    backgroundColor: "white",
  },
});
