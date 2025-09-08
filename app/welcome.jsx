import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = setName;

  const handleSubmit = () => {
    if (name) {
      setSubmitted(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={handleInputChange}
        returnKeyType="next"
      />
      <Text onPress={handleSubmit} style={{ color: "blue", marginBottom: 12 }}>
        Submit
      </Text>
      {submitted && <Text style={styles.welcome}>Hello, {name}!</Text>}
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

  welcome: {
    fontSize: 18,
    marginTop: 12,
  },
});
