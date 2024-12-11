import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../data/globalStyles';

export default function DetallesVino({ route }) {
  const { vino } = route.params;

  return (
    <View style={styles.container}>
      {/* parte superior */}
      <Text style={styles.nombre}>{vino.nombre}</Text>

      {/* parte del medio */}
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', flex: 1, marginTop: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.descripcion}>{vino.frase}</Text>
          <Text style={styles.descripcion}>País {vino.pais}</Text>
          <Text style={styles.mililitros}>{vino.añoDeCosecha}years</Text>
          <Text style={styles.mililitros}>{vino.calificacion}/5</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={{ uri: vino.imagen }} style={styles.imagen} />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={styles.descripcion}>{vino.descripcion}</Text>
          <Text style={styles.mililitros}>{vino.tipoDeUva}ML</Text>
          <Text style={styles.mililitros}>{vino.mililitros}ML</Text>
        </View>
      </View>

      {/* parte inferior */}
      <View style={{ backgroundColor: 'red' }}>

        <Text style={styles.precio}>We recommend it to you with {vino.food}</Text>
        <Text style={styles.precio}>Precio: ${vino.precio}</Text>

        <Text>+ </Text>
        <Text>- </Text>
        <Text>Add cart </Text>
       

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: globalStyles.colorBgScreen,
    justifyContent: 'space-between'
  },
  nombre: {
    fontSize: 24,
    marginVertical: 8,
    fontFamily: 'BodoniBold',
    textAlign: 'center'
  },
  imagen: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  descripcion: {
    fontSize: 14,
    marginVertical: 4,
  },
  precio: {
    fontSize: 18,
    color: 'green',
    marginVertical: 4,
  },
  mililitros: {
    fontSize: 16,
    color: 'gray',
  },
});
