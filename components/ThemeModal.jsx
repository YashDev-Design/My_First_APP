// /components/ThemeModal.jsx

import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../constants/themes";

const ThemeModal = ({ visible, onClose }) => {
  const { themeName, changeTheme } = useTheme();
  const [selected, setSelected] = useState(themeName);

  const handleSave = () => {
    changeTheme(selected);
    onClose();
  };

  const renderThemeItem = ({ item, name }) => {
    const isSelected = selected === name;
    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          { borderColor: isSelected ? item.accent : "#ccc" },
        ]}
        onPress={() => setSelected(name)}
      >
        <View
          style={[
            styles.colorPreview,
            { backgroundColor: item.background, borderColor: item.accent },
          ]}
        />
        <Text style={[styles.optionText, { color: item.text }]}>
          {item.name}
        </Text>
        {isSelected && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Select Theme</Text>

          <FlatList
            data={Object.entries(themes)}
            keyExtractor={(item) => item[0]}
            renderItem={({ item }) =>
              renderThemeItem({ item: item[1], name: item[0] })
            }
          />

          <TouchableOpacity
            style={[
              styles.saveButton,
              { backgroundColor: themes[selected].accent },
            ]}
            onPress={handleSave}
          >
            <Text style={styles.saveText}>Save My Preference</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#F2F2F7",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 6,
  },
  colorPreview: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 2,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  checkmark: {
    fontSize: 18,
    color: "#007AFF",
    fontWeight: "600",
  },
  saveButton: {
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  cancelText: {
    color: "#007AFF",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },
});

export default ThemeModal;
