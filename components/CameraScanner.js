import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, ListItem, Icon } from 'react-native-elements'


import { BarCodeScanner } from "expo-barcode-scanner";

const CameraScanner = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    props.scanDataHandler(data);
    // imporve security here by validationg scanned data.
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Card title={"Camera"}containerStyle={{width: "100%", height: "50%"}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    padding: 100,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
});
export default CameraScanner;
