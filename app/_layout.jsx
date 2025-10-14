import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { use } from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/colors";

const _layout = () => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="about"
        options={{ headerShown: true, title: "About Us" }}
      />
      <Stack.Screen
        name="designs"
        options={{ headerShown: true, title: "Our Designs" }}
      />
      <Stack.Screen
        name="welcome"
        options={{ headerShown: true, title: "Welcome Page" }}
      />
      <Stack.Screen
        name="layout_task"
        options={{ headerShown: true, title: "Layout Task" }}
      />
      <Stack.Screen
        name="layout1"
        options={{ headerShown: true, title: "Layout 1" }}
      />
      <Stack.Screen
        name="layout2"
        options={{ headerShown: true, title: "Layout 2" }}
      />
      <Stack.Screen
        name="layout3"
        options={{ headerShown: true, title: "Layout 3" }}
      />
      <Stack.Screen
        name="layout4"
        options={{ headerShown: true, title: "Layout 4" }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
