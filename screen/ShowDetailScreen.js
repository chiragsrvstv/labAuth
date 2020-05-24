import React, { useState, useEffect } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import firebaseConfig from "../constants/firebaseConfig";
import { ScrollView } from "react-native";

import FormDisplay from "../components/FormDisplay";
// import Input from "../components/Input";

const ShowDetailScreen = (props) => {
  const [inputDuration, setInputDuration] = useState(0);
  var volunteerData = {};
  var currentLab = {};

  var currentDate = (sp) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + sp + mm + sp + yyyy;
  };

  const volunteerRef = firebaseConfig
    .database()
    .ref("/volunteers")
    .child(props.volunteerId);

  const currentTechnicianRef = firebaseConfig
    .database()
    .ref("/technicians")
    .child(props.userData.uid);

  volunteerRef.once("value", (snap) => {
    volunteerData = snap.val();
  });

  currentTechnicianRef.once("value", (snap) => {
    currentLab = snap.val();
  });

  const OnInputDuration = (duration) => {
    setInputDuration(duration);
  };

  let content = <Text> Error </Text>;

    if (!volunteerData.hasOwnProperty("labsAccessed")) {
      console.log(volunteerData);
      return(
        <View style={styles.screen}>
          <Text style={styles.title} color={"pink"}>
            Welcome
          </Text>
          <Text>
            {" "}
            First Time Visiting this lab, No other labs visited in the past{" "}
          </Text>

          <Button title="Scan Again" onPress={props.backToWelcome} />
        </View>
      );
    } else if (
      volunteerData.hasOwnProperty("labsAccessed")
    ) {
      console.log(volunteerData.phone);
      return(
            <View style={styles.screen}>
              <Text style={styles.title} color={"pink"}>
              First Time Visiting this lab
              </Text>
              <ScrollView style={styles.inputContainer} >
                  <Input label={"Lab Id"} value={currentLab.lab.toString()} editable={false} style={styles.input} />
                  <Input label={"Volunteer PCT ID"} value={props.volunteerId} editable={false} />
                  <Input label={"Date"} value={currentDate("-")} editable={false} />
                  <Input label={"Technician Id"} value={props.userData.uid} editable={false} />
                  <Input label={"Duration"} onChangeText={OnInputDuration} value={inputDuration} placeHolder="Duration" />
                  <Input label={"Phone No"} value={volunteerData.phone.toString()} />
                  
              </ScrollView>
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
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    paddingBottom: 20,
  },
  inputContainer: {
      width: "90%",
      flex:1,
      alignContent: "center",
   
  },
  input: {
      width: 100,
  }
});
