import { Image, useColorScheme } from "react-native";

import DarkLogo from "../assets/images/logo_dark.png";
import LightLogo from "../assets/images/light_logo.png";
import React from "react";
import { Colors } from "../constants/colors";

const LogoThemes = (props) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return (
    <Image source={logo} style={{ width: 130, height: 65, marginBottom: 5 }} />
  );
};

export default LogoThemes;
