import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const layout2 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </View>
  )
}

export default layout2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00ff',
  },
  box1:{
    flex: 1,
    backgroundColor: '#77bed0ff',
    margin: 20,
  },
  box2:{
    flex: 1,
    backgroundColor: '#77d08fff',
    margin: 20,
  },
  box3:{
    flex: 1,
    backgroundColor: '#ccd077ff',
    margin: 20,
  },
  box4:{
    flex: 1,
    backgroundColor: '#77d0c4ff',
    margin: 20,
  },
});