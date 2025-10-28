import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BlueTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blue Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default BlueTab;
