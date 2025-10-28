import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RedTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Red Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default RedTab;
