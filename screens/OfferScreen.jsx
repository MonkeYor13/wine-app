import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto'



export default function OfferScreen() {
  const { likedVinos } = useContext(Contexto);
  return (
    <View>
      <Text>Vinos Favoritos:</Text>
      <FlatList
        data={likedVinos} // Lista de vinos favoritos
        keyExtractor={(item) => item.id.toString()} // Clave única para cada vino
        renderItem={({ item }) => (
          <Text style={styles.vinoName}>{item.nombre}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tienes vinos favoritos aún.</Text>
        }
      />
    </View>

  )
}

const styles = StyleSheet.create({})