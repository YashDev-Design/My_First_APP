import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Tiles() {
  const letters = ["J", "A", "R", "V"];
  const [flipped, setFlipped] = useState(Array(letters.length).fill(false));
  const [openTiles, setOpenTiles] = useState([]);

  const handleTilePress = (index) => {
    // If this tile is already open, ignore
    if (openTiles.includes(index)) return;

    // If two tiles are already open, reset and open the new one
    if (openTiles.length === 2) {
      const reset = Array(letters.length).fill(false);
      const newFlipped = [...reset];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      setOpenTiles([index]);
    } else {
      // Otherwise, open this tile normally
      const newFlipped = [...flipped];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      setOpenTiles([...openTiles, index]);
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setFlipped(Array(letters.length).fill(false));
        setOpenTiles([]);
      }}
    >
      <View style={styles.grid}>
        {letters.map((letter, index) => (
          <Pressable
            key={index}
            style={[
              styles.tile,
              flipped[index] ? styles.tileRevealed : styles.tileHidden,
            ]}
            onPress={(e) => {
              e.stopPropagation();
              handleTilePress(index);
            }}
          >
            <Text style={[styles.letter, { opacity: flipped[index] ? 1 : 0 }]}>
              {letter}
            </Text>
          </Pressable>
        ))}
      </View>
    </Pressable>
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
    columnGap: 20,
    rowGap: 20,
    width: 240,
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
    transition: "all 0.3s",
  },
  tileHidden: {
    backgroundColor: "#D1D1D6",
  },
  tileRevealed: {
    backgroundColor: "#FFFFFF",
  },
  letter: {
    fontSize: 64,
    fontWeight: "600",
    color: "#000000",
  },
});
