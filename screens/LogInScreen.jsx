import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
// import { useNavigation } from '@react-navigation/native';
import React from 'react'
import imgIntro from "../assets/imgIntro.png"

export default function LogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgIntro} style={styles.content}>
        <Text style={styles.title}>Vinoteca {'\n'}   Gourmet</Text >
        <Text style={styles.subtitle}>
          Descubre los mejores vinos para cada ocasión.
        </Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Cambia 'Home' por tu screen principal
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.frase}>El vino perfecto, a un clic de distancia.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f1f1',
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#F0EEEDFF', //color del texto
    textShadowColor: '#7F1E57', // Color del borde
    textShadowOffset: { width: -1, height: 1 }, // Dirección de la sombra
    textShadowRadius: 2, // Difuminado
  },
  subtitle: {
    fontSize: 18,
    //color: '#952F57',
    color: '#7F1E57',
    //color: '#800020',
    //textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    textShadowColor: '#FFFFFFFF', // Color del borde
    textShadowOffset: { width: -1, height: 1 }, // Dirección de la sombra
    textShadowRadius: 1, // Difuminado
  },
  button: {
    backgroundColor: '#7F1E57',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  frase: {
    color: '#7F1E57'
  }
})