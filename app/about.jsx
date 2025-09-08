import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const About = () => {
  return (
    <View style={styles.linkContainer}>
      <Text style={[styles.title, { color: "green" }]}>About us</Text>
        <Link href="/" style={styles.linkText}>
          Back to Home ←
        </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  linkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },

  linkText: {
    color: "blue",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
