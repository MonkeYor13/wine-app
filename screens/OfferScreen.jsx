import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { useNavigation } from '@react-navigation/native';


export default function OfferScreen() {
  const { likedVinos } = useContext(Contexto);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vinos Favoritos:</Text>
      {likedVinos.map((vino) => (
        <Text key={vino.id} style={styles.vinoName}>{vino.nombre}</Text>
      ))}
    </View>

  )
}

const styles = StyleSheet.create({})