import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";


const ShowDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title} color={"pink"}>
        The Volunteer is: {props.data}{" "}
      </Text>
      <Text> live DB connection coming soon ! </Text>
    </View>
  );
};

export default ShowDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
  title: {
    fontSize: 20,
    marginVertical: 10,
    paddingBottom: 20,
  },
});
