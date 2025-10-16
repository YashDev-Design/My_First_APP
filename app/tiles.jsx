import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

const { width } = Dimensions.get("window");
const tileSize = width / 5.5;

export default function Tiles() {
  const n = 12; // Total number of tiles (must be even)
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

  const handleTilePress = (index) => {
    if (flipped[index] || matched[index]) return; // Ignore if tile is already flipped or matched
    if (openTiles.length === 2) return;

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
          setTimeout(() => {
            Alert.alert("🎉 You Won!", "All matching tiles are found!");
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

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {numbers.map((num, index) => (
          <Pressable
            key={index}
            style={[
              styles.tile,
              flipped[index] ? styles.tileRevealed : styles.tileHidden,
              matched[index] && styles.tileMatched,
            ]}
            onPress={() => handleTilePress(index)}
            disabled={matched[index]}
          >
            <Text
              style={[
                styles.letter,
                { opacity: flipped[index] || matched[index] ? 1 : 0 },
              ]}
            >
              {num}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
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
    backgroundColor: "#D1D1D6",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  tileHidden: {
    backgroundColor: "#D1D1D6",
  },
  tileRevealed: {
    backgroundColor: "#FFFFFF",
  },
  tileMatched: {
    backgroundColor: "#E0E0E0",
    opacity: 0.5,
  },
  letter: {
    fontSize: 40,
    fontWeight: "600",
    color: "#000000",
  },
});
