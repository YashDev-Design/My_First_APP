import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlueTab from "./blue_tab";
import RedTab from "./red_tab";
import GreenTab from "./green_tab";
import { FontAwesome5 } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

export default function ColorsLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: { backgroundColor: "#333" },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "drums") {
            iconName = "drum";
          } else if (route.name === "piano") {
            iconName = "music";
          } else if (route.name === "guitar") {
            iconName = "guitar";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="drums"
        options={{ title: "Drums" }}
        component={BlueTab}
      />
      <Tab.Screen
        name="piano"
        options={{ title: "Piano" }}
        component={RedTab}
      />
      <Tab.Screen
        name="guitar"
        options={{ title: "Guitar" }}
        component={GreenTab}
      />
    </Tab.Navigator>
  );
}
