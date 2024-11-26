import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import globalStyles from '../data/globalStyles'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar style='light' backgroundColor={globalStyles.ColorPurple} />
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

// quedamos en cargar la fuentes personalizadas