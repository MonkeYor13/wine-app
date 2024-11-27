import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import imgIntro from "../assets/imgs/imgIntro.png"
import intro from "../data/intro"
import globalStyles from '../data/globalStyles'
import { StatusBar } from 'expo-status-bar'

export default function LogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgIntro} style={styles.content}>
        <Text style={styles.title}>{intro[0].title}</Text >
        <Text style={styles.subtitle}>{intro[0].subtitle}</Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Cambia 'Home' por tu screen principal
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.frase}>{intro[0].frase}</Text>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: globalStyles.colorBgLogin,
    paddingVertical: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: globalStyles.colorText
  },
  subtitle: {
    fontSize: 18,
    color: globalStyles.colorText,
    marginTop: 20,
  },
  button: {
    backgroundColor: globalStyles.colorText,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: globalStyles.colorBgLogin,
    fontWeight: 'bold',
  },
  frase: {
    color: globalStyles.colorText
  }
})