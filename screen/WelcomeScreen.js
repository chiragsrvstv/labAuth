import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/color";

import CameraScanner from "../components/CameraScanner";

const WelcomeScreen = () => {
  const [scanClick, setScanClick] = useState(false);
  const [scannedData, setScannedData] = useState("");

  const onScanAcceptHandler = () => {
    setScanClick(true);
  };

  const onScanResetHandler = () => {
    setScanClick(false);
    setScannedData("");
  };

  const scanDataHandler = (data) => {
    setScannedData(data);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome Technician:1</Text>
      {scanClick ? <CameraScanner scanDataHandler={scanDataHandler} /> : null}
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
      {/* displaying a card if extracted data from scanner exists */}
      {scannedData ? (
        <Card style={styles.cardContainer}>
          <Text> {scannedData} </Text>
          <Button
            title="Proceed"
            color="red"
            onPress={volunteerDisplayHandler}
          />
        </Card>
      ) : null}
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
  cameraContainer: {
    width: 600,
    maxWidth: "80%",
    alignItems: "center",
  },
  camera: {
    width: 800,
    height: 400,
  },
});

export default WelcomeScreen;
