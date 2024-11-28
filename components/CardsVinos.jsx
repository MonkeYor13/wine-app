import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import vinos from '../data/vinos'
import globalStyles from '../data/globalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CardsVinos({ selectedButton }) {
  // Filtrado de vinos según el botón seleccionado
  const filteredVinos = vinos.filter((vino) => {
    if (selectedButton === "All") return true;
    if (selectedButton === "Offers") return vino.offer;
    if (selectedButton === "Popular") return vino.popular;
    return false; // Prevención de errores
  });

  // Limitar texto de los nombres de vinos con 3 puntitos
  const truncarTexto = (texto, limite) => {
    return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
  };

  // Manejar favoritos en el resto de las categorias
  const [favorites, setFavorites] = useState([]); // Estado para los favoritos

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id) // Remover de favoritos
        : [...prevFavorites, id] // Agregar a favoritos
    );
  };

  const navigation = useNavigation(); //para la navegacion entre pantallas

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}  // Oculta la barra de desplazamiento horizontal
      data={filteredVinos} // Datos filtrados
      keyExtractor={(item) => item.id.toString()} // Clave única para cada elemento
      renderItem={({ item }) => (

        <View style={styles.vinoCard}>
          <TouchableOpacity onPress={() => navigation.navigate('DetallesVino', { vino: item })} style={{ flex: 1 }}>
            <Image source={{ uri: item.imagen }} style={styles.vinoImage} resizeMode='contain' />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8 }}>
            <Text style={styles.vinoNombre}>${item.precio}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <MaterialIcons name="favorite" size={24} color={favorites.includes(item.id) ? 'red' : 'black'} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.vinoNombre, styles.vinoText]}>{truncarTexto(item.nombre, 15)}</Text>
            <Text style={styles.vinoMililitros}>{item.mililitros}ML</Text>
          </View>
        </View>
      )} // Renderizar cada elemento
      ItemSeparatorComponent={<View style={{ width: 16 }} />}
    />
  )
}

const styles = StyleSheet.create({
  vinoCard: {
    borderRadius: 8,
    width: 180,
    height: 300,
    backgroundColor: globalStyles.colorCard,
    justifyContent: 'center',
    padding: 8
  },
  vinoImage: {
    flex: 1,
    width: '100%',
    height: '80%',
  },
  vinoMililitros: {
    fontFamily: 'Cormorant',
    color: globalStyles.colorInactIcon,
    textAlign: 'center'
  },
  vinoText: {
    fontFamily: 'BodoniBold',
    textAlign: 'center'
  }
})