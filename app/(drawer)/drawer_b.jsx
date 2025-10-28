import Drawer from "expo-router/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DrawerB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drawer B</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default DrawerB;
