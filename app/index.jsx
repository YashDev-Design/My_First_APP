import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";

// Import your logo images directly
import DarkLogo from "../assets/images/logo_dark.png";
import LightLogo from "../assets/images/light_logo.png";

const Home = () => {
  const { theme, themeName } = useTheme();

  const logo = themeName === "dark" ? DarkLogo : LightLogo;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 65,
  },
});
