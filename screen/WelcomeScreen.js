import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/color";

import CameraScanner from "../components/CameraScanner";

const WelcomeScreen = (props) => {
  const [scanClick, setScanClick] = useState(false);
  const [scannedData, setScannedData] = useState("");

  const onScanAcceptHandler = () => {
    setScanClick(true);
  };

  const onScanResetHandler = () => {
    setScanClick(false);
    setScannedData("");
  };

  const fetchDataFromScanner = (data) => {
    setScannedData(data);
    props.scannedDataHandler(data);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome Technician:1</Text>
      {scanClick ? <CameraScanner onScanData={fetchDataFromScanner} /> : null}
      <Card style={styles.cardContainer}>
        <Text> Scanner </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Open"
              color={Colors.primary}
              onPress={onScanAcceptHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Close"
              color={Colors.primary}
              onPress={onScanResetHandler}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    paddingBottom: 20,
  },
  cardContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
});

export default WelcomeScreen;
