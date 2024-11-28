import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetallesVino({ route }) {
  const { vino } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: vino.imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{vino.nombre}</Text>
      <Text style={styles.descripcion}>{vino.descripcion}</Text>
      <Text style={styles.precio}>Precio: ${vino.precio}</Text>
      <Text style={styles.mililitros}>{vino.mililitros}ML</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imagen: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  descripcion: {
    fontSize: 16,
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
