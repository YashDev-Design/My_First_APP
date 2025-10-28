import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { DrawerToggleButton } from "@react-navigation/drawer";
import ThemeModal from "../../components/ThemeModal";
import DrawerA from "./drawer_a";
import DrawerB from "./drawer_b";
import DrawerC from "./drawer_c";
import ColorsLayout from "./(colors_tabs)/_layout";

const Drawer = createDrawerNavigator();

// Drawer item that jumps back to the root Home screen
function GoHome({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const parent = navigation.getParent?.();
      parent?.navigate?.("Home");
      // Also close the nested drawer if it's open
      navigation?.closeDrawer?.();
    }, [navigation])
  );
  return null;
}

export default function DrawerLayout() {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const screenOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: theme.card },
    headerTintColor: theme.text,
    drawerStyle: { backgroundColor: theme.background },
    drawerActiveTintColor: theme.accent,
    drawerInactiveTintColor: theme.text,
    drawerLabelStyle: { fontSize: 16, fontWeight: "500" },
    headerLeft: () => <DrawerToggleButton />,
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
      <Drawer.Navigator screenOptions={screenOptions} initialRouteName="Drawer 1">
        <Drawer.Screen
          name="Home"
          component={GoHome}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Drawer A"
          component={DrawerA}
          options={{ title: "Drawer A" }}
        />
        <Drawer.Screen
          name="Drawer B  "
          component={DrawerB}
          options={{ title: "Drawer B" }}
        />
        <Drawer.Screen
          name="Drawer C"
          component={DrawerC}
          options={{ title: "Drawer C" }}
        />
        <Drawer.Screen
          name="Colors"
          component={ColorsLayout}
          options={{ title: "Colors" }}
        />
      </Drawer.Navigator>

      <ThemeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
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
