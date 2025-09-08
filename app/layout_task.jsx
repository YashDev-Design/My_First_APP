import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LayoutTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a Layout</Text>

      <Link href="/layout1" asChild>
        <Pressable style={styles.buttonLayout1}>
          <Text style={styles.buttonText}>Layout 1</Text>
        </Pressable>
      </Link>

      <Link href="/layout2" asChild>
        <Pressable style={styles.buttonLayout2}>
          <Text style={styles.buttonText}>Layout 2</Text>
        </Pressable>
      </Link>

      <Link href="/layout3" asChild>
        <Pressable style={styles.buttonLayout3}>
          <Text style={styles.buttonText}>Layout 3</Text>
        </Pressable>
      </Link>

      <Link href="/layout4" asChild>
        <Pressable style={styles.buttonLayout4}>
          <Text style={styles.buttonText}>Layout 4</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LayoutTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonLayout1: {
    backgroundColor: '#1A237E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonLayout2: {
    backgroundColor: '#00695C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonLayout3: {
    backgroundColor: '#37474F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonLayout4: {
    backgroundColor: '#800020',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});