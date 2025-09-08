import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Layout1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}></View>
      </View>
      <View style={styles.thin_row}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    </View>
  );
};

export default Layout1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdeffaff",
  },
  row: {
    flexDirection: "row",
    margin: 10,
    flex: 3,
    width: "100%",
  },
  thin_row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: "#77bed0ff",
    borderRadius: 5,
  },
});