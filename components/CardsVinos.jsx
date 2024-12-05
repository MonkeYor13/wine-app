import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import vinos from '../data/vinos'
import globalStyles from '../data/globalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Contexto from '../contexto/Contexto';


export default function CardsVinos() {
  const {filteredVinos, } = useContext(Contexto)

  // Limitar texto de los nombres de vinos con 3 puntitos
  const truncarTexto = (texto, limite) => {
    return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
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

            <TouchableOpacity onPress={{}}>
              <MaterialIcons 
              name={item.like ? 'favorite' : 'favorite-outline'} 
              size={30} 
              color={item.like ? 'red' : 'gray'}
              />
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