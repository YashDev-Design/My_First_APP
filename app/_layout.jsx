// /app/_layout.jsx

import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable, Text, StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import ThemeModal from "../components/ThemeModal";

// Import screens
import Home from "./index";
import About from "./about";
import Designs from "./designs";
import Welcome from "./welcome";
// import LayoutTask from "./layout_task";
import Reviews from "./reviews";
import RgbColor from "../../rgbcolor";
// import Tiles from "../../tiles";
import AlertForm from "./alertform";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const screenOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: theme.card },
    headerTintColor: theme.text,
    drawerStyle: { backgroundColor: theme.background },
    drawerActiveTintColor: theme.accent,
    drawerInactiveTintColor: theme.text,
    drawerLabelStyle: { fontSize: 16, fontWeight: "500" },
    headerRight: () => (
      <Pressable
        style={styles.themeButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.themeIcon}>🎨</Text>
      </Pressable>
    ),
  });

  return (
    <>
      <Drawer.Navigator screenOptions={screenOptions}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Designs" component={Designs} />
        <Drawer.Screen name="Welcome" component={Welcome} />
        {/* <Drawer.Screen name="Layout Task" component={LayoutTask} /> */}
        <Drawer.Screen name="User Reviews" component={Reviews} />
        {/* <Drawer.Screen name="Count On Click" component={CountOnClick} />
        <Drawer.Screen name="RGB Picker" component={RgbColor} />
        <Drawer.Screen name="Tiles Game" component={Tiles} /> */}
        <Drawer.Screen name="Alert Form" component={AlertForm} />
      </Drawer.Navigator>

      <ThemeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default function Layout() {
  return (
    <ThemeProvider>
      <DrawerNavigator />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  themeButton: {
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,
    padding: 8,
  },
  themeIcon: {
    fontSize: 22,
  },
});
