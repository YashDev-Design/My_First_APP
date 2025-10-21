import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../context/ThemeContext";

const CountOnClick = () => {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [maxCount, setMaxCount] = useState(10);

  // Load count, isIncreasing and maxCount from AsyncStorage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedCount = await AsyncStorage.getItem("counterValue");
        const storedIsIncreasing = await AsyncStorage.getItem("isIncreasing");
        const storedMaxCount = await AsyncStorage.getItem("maxCount");
        if (storedCount !== null) {
          setCount(parseInt(storedCount, 10));
        }
        if (storedIsIncreasing !== null) {
          setIsIncreasing(storedIsIncreasing === "true");
        }
        if (storedMaxCount !== null) {
          setMaxCount(parseInt(storedMaxCount, 10));
        }
      } catch (e) {
        // Handle error if needed
      }
    };
    loadData();
  }, []);

  // Save count, isIncreasing and maxCount to AsyncStorage whenever they change
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("counterValue", count.toString());
        await AsyncStorage.setItem("isIncreasing", isIncreasing.toString());
        await AsyncStorage.setItem("maxCount", maxCount.toString());
      } catch (e) {
        // Handle error if needed
      }
    };
    saveData();
  }, [count, isIncreasing, maxCount]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.countText, { color: theme.text }]}>{count}</Text>
      <Text style={[styles.label, { color: theme.text }]}>
        Max Count: {maxCount}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={maxCount}
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#007AFF"
        onValueChange={(value) => setMaxCount(Math.round(value))}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isIncreasing ? "#007AFF" : "#FF3B30" },
        ]}
        onPress={() => {
          if (isIncreasing) {
            if (count < maxCount) {
              setCount(count + 1);
            } else if (count === maxCount) {
              Alert.alert(
                "Max Limit Reached",
                "You’ve reached the max limit to increase.",
                [
                  {
                    text: "OK",
                    onPress: () => setIsIncreasing(false),
                  },
                ]
              );
            }
          } else {
            if (count > 0) {
              setCount(count - 1);
            } else if (count === 0) {
              Alert.alert(
                "Min Limit Reached",
                "You’ve reached the minimum limit to decrease.",
                [
                  {
                    text: "OK",
                    onPress: () => setIsIncreasing(true),
                  },
                ]
              );
            }
          }
        }}
      >
        <Text style={styles.buttonText}>
          {isIncreasing ? "Increase Count" : "Decrease Count"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  slider: {
    width: 250,
    height: 40,
    marginBottom: 20,
  },
});

export default CountOnClick;
