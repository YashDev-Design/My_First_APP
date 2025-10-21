import { StyleSheet, Text, View } from "react-native";
import React from "react";

const layout2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
    </View>
  );
};

export default layout2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e16868ff",
    justifyContent: "center",
  },
  box1: {
    flex: 1,
    backgroundColor: "#006f8bff",
    margin: 30,
  },
});
