import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../context/ThemeContext";

const { width } = Dimensions.get("window");
const tileSize = width / 5.5;

export default function Tiles() {
  const { theme } = useTheme();

  const n = 8; // Total number of tiles (must be even)
  const uniqueCount = n / 2;

  const [numbers] = useState(() => {
    const baseNumbers = Array.from({ length: uniqueCount }, (_, i) => i + 1);
    const shuffled = [...baseNumbers, ...baseNumbers].sort(
      () => Math.random() - 0.5
    );
    return shuffled;
  });

  const [flipped, setFlipped] = useState(Array(numbers.length).fill(false));
  const [matched, setMatched] = useState(Array(numbers.length).fill(false));
  const [openTiles, setOpenTiles] = useState([]);

  const [timeLeft, setTimeLeft] = useState(50);
  const [timerActive, setTimerActive] = useState(false);
  const [steps, setSteps] = useState(0);
  const [bestScore, setBestScore] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const loadScore = async () => {
      try {
        const savedScore = await AsyncStorage.getItem("bestScore");
        if (savedScore) setBestScore(parseFloat(savedScore));
      } catch (error) {
        console.error("Error loading best score:", error);
      }
    };
    loadScore();
  }, []);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      Alert.alert(
        "⏰ Time's Up!",
        "You didn’t find all matching tiles in time!"
      );
      setTimerActive(false);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive, timeLeft]);

  const handleTilePress = (index) => {
    if (!timerActive) {
      setTimerActive(true);
    }
    if (flipped[index] || matched[index]) return; // Ignore if tile is already flipped or matched
    if (openTiles.length === 2) return;

    setSteps((prev) => prev + 1);

    const newFlipped = [...flipped];
    newFlipped[index] = true;
    const newOpenTiles = [...openTiles, index];
    setFlipped(newFlipped);
    setOpenTiles(newOpenTiles);

    // When 2 tiles are open
    if (newOpenTiles.length === 2) {
      const [first, second] = newOpenTiles;
      if (numbers[first] === numbers[second]) {
        // It's a match!
        const newMatched = [...matched];
        newMatched[first] = true;
        newMatched[second] = true;
        setMatched(newMatched);
        setOpenTiles([]);

        // Check for win condition
        if (newMatched.every((val) => val)) {
          clearInterval(timerRef.current);
          setTimerActive(false);
          const secondsTaken = 50 - timeLeft;
          const score = Math.max(0, 1000 - (steps * 10 + secondsTaken * 5)); // simple scoring formula
          setTimeout(async () => {
            try {
              if (!bestScore || score > bestScore) {
                await AsyncStorage.setItem("bestScore", score.toString());
                setBestScore(score);
              }
            } catch (error) {
              console.error("Error saving score:", error);
            }

            Alert.alert(
              "🎉 You Won!",
              `All matching tiles found in ${secondsTaken} seconds with ${steps} steps!\n\n🏆 Score: ${score}\n📊 Best Score: ${
                bestScore ? bestScore : score
              }`
            );
          }, 400);
        }
      } else {
        // Not a match — flip back after short delay
        setTimeout(() => {
          const resetFlipped = [...newFlipped];
          resetFlipped[first] = false;
          resetFlipped[second] = false;
          setFlipped(resetFlipped);
          setOpenTiles([]);
        }, 800);
      }
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTimerActive(false);
    setTimeLeft(50);
    setSteps(0);
    const baseNumbers = Array.from({ length: uniqueCount }, (_, i) => i + 1);
    const shuffled = [...baseNumbers, ...baseNumbers].sort(
      () => Math.random() - 0.5
    );
    setMatched(Array(shuffled.length).fill(false));
    setFlipped(Array(shuffled.length).fill(false));
    setOpenTiles([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>⏱ {timeLeft}s</Text>
        <Text style={styles.infoText}>🪜 Steps: {steps}</Text>
        <Text style={styles.infoText}>🏆 Best: {bestScore || 0}</Text>
      </View>
      <View style={styles.grid}>
        {numbers.map((num, index) => (
          <Pressable
            key={index}
            style={[
              styles.tile,
              flipped[index]
                ? { backgroundColor: theme.surface || "#FFFFFF" }
                : { backgroundColor: theme.card || "#D1D1D6" },
              matched[index] && {
                backgroundColor: theme.card
                  ? `${theme.card}80`
                  : "rgba(209, 209, 214, 0.5)",
                opacity: 0.5,
              },
            ]}
            onPress={() => handleTilePress(index)}
            disabled={matched[index]}
          >
            <Text
              style={[
                styles.letter,
                {
                  opacity: flipped[index] || matched[index] ? 1 : 0,
                  color: theme.text,
                },
              ]}
            >
              {num}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: "90%",
  },
  tile: {
    width: tileSize,
    height: tileSize,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  letter: {
    fontSize: 40,
    fontWeight: "600",
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
