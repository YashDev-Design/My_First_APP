import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const CountOnClick = () => {
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
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <TextInput
        style={styles.input}
        value={maxCount.toString()}
        onChangeText={(text) => {
          const num = parseInt(text, 10);
          if (!isNaN(num) && num >= 0) {
            setMaxCount(num);
            if (count > num) setCount(num); // adjust count if exceeds new max
          }
        }}
        keyboardType="numeric"
        placeholder="Set max count"
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
              setIsIncreasing(false);
            }
          } else {
            if (count > 0) {
              setCount(count - 1);
            } else if (count === 0) {
              setIsIncreasing(true);
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
    backgroundColor: "#F2F2F7",
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    color: "#1C1C1E",
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
  input: {
    width: 100,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default CountOnClick;
