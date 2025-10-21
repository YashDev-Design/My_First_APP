import {
  View,
  Text,
  Pressable,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/colors";

const LayoutTask = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>
        Choose a Layout
      </Text>

      <Pressable
        style={[styles.button, { backgroundColor: "#1A237E" }]}
        onPress={() => router.push("layout1")}
      >
        <Text style={styles.buttonText}>Layout 1</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#00695C" }]}
        onPress={() => router.push("layout2")}
      >
        <Text style={styles.buttonText}>Layout 2</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#37474F" }]}
        onPress={() => router.push("layout3")}
      >
        <Text style={styles.buttonText}>Layout 3</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#800020" }]}
        onPress={() => router.push("layout4")}
      >
        <Text style={styles.buttonText}>Layout 4</Text>
      </Pressable>
    </View>
  );
};

export default LayoutTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
