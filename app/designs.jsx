import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const Design = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerRow}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
      <View style={styles.ContainerColumn}>
        <View style={[{flex:1, backgroundColor:"purple"}]} />
        <View style={[{flex:1, backgroundColor:"orange"}]} />
      </View>
      <View style={styles.ContainerRow}>
        <View style={[{flex:2, backgroundColor:"pink"}]} />
        <View style={[{flex:1, backgroundColor:"lightblue"}]} />
      </View>
    </View>
  );
};

export default Design;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContainerRow: {
    flex: 1,
    flexDirection: "row",
  },
  ContainerColumn: {
    flex: 1,
    flexDirection: "column",
  },
  box1: {
    flex: 1,
    backgroundColor: "tomato",
  },
  box2: {
    flex: 1,
    backgroundColor: "gold",
  },
  box3: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
