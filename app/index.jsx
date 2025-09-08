import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AppLogo from "../assets/logo.png";

const Home = () => {
  return (
    <View style={styles.linkContainer}>
      <Text style={styles.heading}>Welcome to My First App</Text>
      <Image
        source={AppLogo}
        style={{ width: 130, height: 65, marginBottom: 5 }}
      />
      <Link href="/about" asChild>
        <Pressable style={styles.buttonAbout}>
          <Text style={styles.buttonText}>About Us 📮</Text>
        </Pressable>
      </Link>
      <Link href="/designs" asChild>
        <Pressable style={styles.buttonDesigns}>
          <Text style={styles.buttonText}>Our Designs 📐</Text>
        </Pressable>
      </Link>
      <Link href="/welcome" asChild>
        <Pressable style={styles.buttonWelcome}>
          <Text style={styles.buttonText}>Welcome Page 🎉</Text>
        </Pressable>
      </Link>
      <Link href="/layout_task" asChild>
        <Pressable style={styles.buttonLayout}>
          <Text style={styles.buttonText}>Layout Task 🖼️</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  linkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#222",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
  buttonAbout: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
  buttonDesigns: {
    backgroundColor: "purple",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
  buttonWelcome: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
  buttonLayout: {
    backgroundColor: "teal",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
