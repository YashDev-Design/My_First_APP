import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AlertForm = () => {
  const [name, setName] = useState("");
  const [mood, setMood] = useState(null);

  const moods = [
    { emoji: "🙂", label: "OK" },
    { emoji: "😃", label: "Good" },
    { emoji: "🤩", label: "Excellent" },
  ];

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Missing Info", "Please enter your name first!");
      return;
    }
    if (!mood) {
      Alert.alert("Missing Mood", "Please select how you're feeling today!");
      return;
    }

    Alert.alert(
      "Mood Check 💬",
      `Hey ${name}! Are you sure you're feeling ${mood.label}?`,
      [{ text: "OK", style: "default" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you feeling today?</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name..."
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      {/* Emoji Mood Selector */}
      <View style={styles.moodContainer}>
        {moods.map((m, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.moodButton,
              mood?.label === m.label && styles.moodButtonSelected,
            ]}
            onPress={() => setMood(m)}
            activeOpacity={0.7}
          >
            <Text style={styles.moodEmoji}>{m.emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* OK Button */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          { backgroundColor: mood ? "#007AFF" : "#ccc" },
        ]}
        onPress={handleSubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.submitText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 25,
    color: "#333",
  },
  input: {
    width: "85%",
    height: 50,
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    color: "#333",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  moodContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 40,
  },
  moodButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  moodButtonSelected: {
    backgroundColor: "#007AFF20",
    borderColor: "#007AFF",
    borderWidth: 2,
  },
  moodEmoji: {
    fontSize: 35,
  },
  submitButton: {
    width: 120,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default AlertForm;
