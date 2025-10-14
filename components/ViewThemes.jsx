import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ViewThemes = ({style, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  return (
    <View style = {[{
      backgroundColor: theme.background}, style]} {...props} />
  )
}

export default ViewThemes

const styles = StyleSheet.create({})