import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ViewThemes from "../components/ViewThemes";
import LogoThemes from "../components/LogoThemes";

const Home = () => {
  return (
    <>
      <ViewThemes style={styles.linkContainer}>
        <LogoThemes />
        <Image
          source={LogoThemes}
          style={{ width: 130, height: 65, marginBottom: 5 }}
        />
        <Link href="/about" asChild>
          <Pressable style={styles.buttonAbout}>
            <Text style={styles.buttonText}>About Me 📮</Text>
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
        <Link href="/reviews" asChild>
          <Pressable style={styles.buttonReviews}>
            <Text style={styles.buttonText}>User Reviews ⭐</Text>
          </Pressable>
        </Link>
        <Link href="/countonclick" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Count On Click 🔢</Text>
          </Pressable>
        </Link>
        <Link href="/rgbcolor" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>RGB Picker 🌈</Text>
          </Pressable>
        </Link>
        <Link href="/tiles" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Tiles Game 🎴</Text>
          </Pressable>
        </Link>
        <Link href="/alertform" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Alert Form 💬</Text>
          </Pressable>
        </Link>
      </ViewThemes>
    </>
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
  buttonReviews: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 7,
    alignItems: "center",
    width: 220,
  },
});
