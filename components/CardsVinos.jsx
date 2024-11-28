import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import vinos from '../data/vinos'
import globalStyles from '../data/globalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CardsVinos({selectedButton}) {
  // Filtrado de vinos según el botón seleccionado
  const filteredVinos = vinos.filter((vino) => {
    if (selectedButton === "All") return true;
    if (selectedButton === "Offers") return vino.offer;
    if (selectedButton === "Popular") return vino.popular;
    return false; // Prevención de errores
  });

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}  // Oculta la barra de desplazamiento horizontal
      data={filteredVinos} // Datos filtrados
      keyExtractor={(item) => item.id.toString()} // Clave única para cada elemento
      renderItem={({ item }) => (
        <View style={styles.vinoCard}>
          <Image source={{ uri: item.imagen }} style={styles.vinoImage} resizeMode='contain' />
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.vinoNombre}>${item.precio}</Text>
          <MaterialIcons name="favorite" size={24} color="black" />
          </View>
          <View style={{alignItems: 'center'}}>
          <Text style={styles.vinoNombre}>{item.nombre}</Text>
          <Text style={styles.vinoNombre}>{item.mililitros}ML</Text>
          </View>
        </View>
      )} // Renderizar cada elemento
      ItemSeparatorComponent={<View style={{width: 16}}/>}
    />
  )
}

const styles = StyleSheet.create({
  vinoCard: {
    borderRadius: 8,
    backgroundColor: globalStyles.colorCard,
    width: 160,
    height: 250,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  vinoImage: {
  width: "100%",
  height: "60%",
  },
  vinoNombre: {
    fontWeight: "bold",
  },
})