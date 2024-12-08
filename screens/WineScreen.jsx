import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


// const { width, height } = Dimensions.get('window');


export default function WineScreen() {
  return (
    <View>
      <Text style={styles.text20}>WineScreen con 20</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  text20:{
    fontSize: 20 
  },
  text40:{
    fontSize: 40 
  },
  text:{
 
  },
})
