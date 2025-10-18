// /context/ThemeContext.js

import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themes } from "../constants/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark"); // default theme
  const [theme, setTheme] = useState(themes.dark);
  const THEME_KEY = "@selectedTheme";

  // Load saved theme from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedThemeName = await AsyncStorage.getItem(THEME_KEY);
        if (storedThemeName && themes[storedThemeName]) {
          setThemeName(storedThemeName);
          setTheme(themes[storedThemeName]);
        }
      } catch (error) {
        console.warn("Error loading theme:", error);
      }
    };
    loadTheme();
  }, []);

  // Save theme when changed
  const changeTheme = async (name) => {
    try {
      await AsyncStorage.setItem(THEME_KEY, name);
      setThemeName(name);
      setTheme(themes[name]);
    } catch (error) {
      console.warn("Error saving theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy access
export const useTheme = () => useContext(ThemeContext);
