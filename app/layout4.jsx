import { StyleSheet, View } from "react-native";
import React from "react";

const Layout4 = () => {
  return (
    <View style={styles.container}>
      {/* Top full-width box */}
      <View style={[styles.item, { marginBottom: 5 }]}></View>

      {/* Two column layout */}
      <View style={styles.row}>
        {/* Left Column */}
        <View style={styles.col}>
          <View style={styles.item1}></View>
          <View style={styles.item2}></View>
          <View style={styles.item3}></View>
        </View>

        {/* Right Column */}
        <View style={styles.col}>
          <View style={styles.item4}></View>
          <View style={styles.item5}>
            <View style={styles.circle}></View>
          </View>
          <View style={styles.item6}></View>
        </View>
      </View>
    </View>
  );
};

export default Layout4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2c2d4",
    padding: 10,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    flex: 10,
    width: "90%",
    margin: 20,
  },
  col: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  item: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  item1: {
    flex: 2,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  item2: {
    flex: 2,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  item3: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  item4: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  item5: {
    flex: 2,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  item6: {
    flex: 2,
    marginVertical: 20,
    backgroundColor: "#77bed0",
    borderRadius: 5,
    width: "95%",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fce882",
    alignSelf: "center",
    marginTop: "50%",
  },
});