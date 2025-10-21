import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../context/ThemeContext";

const RGBColorMixer = () => {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);
  const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const color = `rgb(${red}, ${green}, ${blue})`;

  const getContrastColor = (r, g, b) => {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000" : "#fff";
  };

  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Text Input Display Box */}
      <TextInput
        style={[
          styles.colorBox,
          {
            backgroundColor: color,
            color: getContrastColor(red, green, blue),
          },
        ]}
        placeholder="Type here..."
        placeholderTextColor={
          getContrastColor(red, green, blue) === "#000" ? "#444" : "#ccc"
        }
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      {/* RGB Sliders */}
      <View
        style={[
          styles.slidersWrapper,
          {
            opacity: isEnabled ? 1 : 0.4, // 👈 dims when disabled
            backgroundColor: theme.card ?? theme.background,
          },
        ]}
      >
        <View style={styles.sliderRow}>
          <Text style={[styles.letter, { color: "red" }]}>R</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={red}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#ddd"
            thumbTintColor="red"
            onValueChange={(value) => {
              if (isEnabled) setRed(Math.round(value)); // 👈 only works when toggle is on
            }}
          />
          <Text style={[styles.valueText, { color: theme.text }]}>{red}</Text>
        </View>

        <View style={styles.sliderRow}>
          <Text style={[styles.letter, { color: "green" }]}>G</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={green}
            minimumTrackTintColor="green"
            maximumTrackTintColor="#ddd"
            thumbTintColor="green"
            onValueChange={(value) => {
              if (isEnabled) setGreen(Math.round(value));
            }}
          />
          <Text style={[styles.valueText, { color: theme.text }]}>{green}</Text>
        </View>

        <View style={styles.sliderRow}>
          <Text style={[styles.letter, { color: "blue" }]}>B</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={blue}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#ddd"
            thumbTintColor="blue"
            onValueChange={(value) => {
              if (isEnabled) setBlue(Math.round(value));
            }}
          />
          <Text style={[styles.valueText, { color: theme.text }]}>{blue}</Text>
        </View>
      </View>

      {/* Toggle Switch */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleLabel, { color: theme.text }]}>
          {isEnabled ? "Color Mixer ON" : "Color Mixer OFF"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#007AFF" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f7",
    padding: 20,
  },
  colorBox: {
    width: 250,
    height: 120,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#ccc",
    marginBottom: 40,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
  },
  slidersWrapper: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  letter: {
    fontSize: 20,
    fontWeight: "700",
    width: 30,
    textAlign: "center",
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  valueText: {
    width: 40,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    color: "#333",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  toggleLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginRight: 10,
  },
});

export default RGBColorMixer;
