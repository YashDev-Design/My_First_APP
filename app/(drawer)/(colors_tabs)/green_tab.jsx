import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GreenTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Green Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green", // fills the entire screen with green
    justifyContent: "center",  // centers vertically
    alignItems: "center",      // centers horizontally
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default GreenTab;