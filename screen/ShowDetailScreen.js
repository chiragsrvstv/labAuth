import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

import firebaseConfig from "../constants/firebaseConfig";
import { Alert } from "react-native";

import FormDisplay from "../components/FormDisplay"

const ShowDetailScreen = (props) => {

  let volunteerData = {};
  let currentLab = {};
  const volunteerRef = firebaseConfig
    .database()
    .ref("/volunteers")
    .child(props.volunteerId);

  const currentTechnicianRef = firebaseConfig
    .database()
    .ref("/technicians")
    .child(props.userData.uid);

  volunteerRef.on("value", (snap) => {
    console.log(snap.val());
    volunteerData = snap.val() ? snap.val() : "";
  });

  currentTechnicianRef.on("value", (snap) => {
    console.log(snap.val());
    currentLab = snap.val()
      ? snap.val()
      : Alert.alert("No labs assigned to you");
  });

  //   const message = <Text> Displaying Soon ! </Text>;
  const content = <Text> Main Content Displaying Soon ! </Text>;

  if (!volunteerData.hasOwnProperty("labsAccessed")) {
    console.log(
      "First Time Visiting this lab, No other labs visited in the past"
    );
    return (
      <View style={styles.screen}>
        <Text style={styles.title} color={"pink"}>
          Welcome
        </Text>
        <Text>
          {" "}
          First Time Visiting this lab, No other labs visited in the past{" "}
        </Text>
        <FormDisplay volunteerData={volunteerData} currentLab={currentLab} />
        <Button title="Scan Again" onPress={props.backToWelcome} />
      </View>
    );
  } else if (
    volunteerData.hasOwnProperty("labsAccessed") &&
    !volunteerData.hasOwnProperty(currentLab)
  ) {
    console.log("First Time Visiting this lab");
    return (
      <View style={styles.screen}>
        <Text style={styles.title} color={"pink"}>
          Welcome
        </Text>
        <Text> First Time Visiting this lab </Text>
        <FormDisplay />
        <Button title="Scan Again" onPress={props.backToWelcome} />
      </View>
    );
  }
};

export default ShowDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    paddingBottom: 20,
  },
});
