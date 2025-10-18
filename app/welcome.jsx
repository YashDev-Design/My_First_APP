import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Welcome = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const handleInputChange = setName;

  const handleSubmit = () => {
    if (name) {
      setSubmitted(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Welcome to Our App!
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.card, color: theme.text },
        ]}
        placeholder="Enter your name"
        placeholderTextColor={theme.text}
        value={name}
        onChangeText={handleInputChange}
        returnKeyType="next"
      />

      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.8}
        style={[styles.button, { backgroundColor: theme.card }]}
        accessibilityRole="button"
      >
        <Text style={[styles.buttonText, { color: theme.text }]}>Submit</Text>
      </TouchableOpacity>

      {submitted && (
        <Text style={[styles.welcome, { color: theme.text }]}>
          Hello, Thanks for using the APP 😁 {name}!
        </Text>
      )}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    padding: 12,
    borderColor: "#888",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
    width: "100%",
  },

  button: {
    width: "35%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#888",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
  },

  welcome: {
    fontSize: 18,
    marginTop: 12,
  },
});
