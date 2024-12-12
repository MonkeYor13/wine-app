import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../data/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DetallesVino({ route }) {
  const { vino } = route.params;
  const [counter, setcounter] = useState(0)

  const addItem = () => {
    setcounter(counter + 1)
  }
  const subtractItem = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }
  }

  return (
    <View style={styles.container}>
      {/* parte superior */}
      <Text style={styles.nombre}>{vino.nombre}</Text>



      {/* parte del medio */}
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', flex: 1, marginTop: 20 }}>


        {/* lado left */}
        <View style={{ flex: 1, justifyContent: 'space-evenly', paddingRight: 8, alignItems: 'flex-end' }}>
          <Text style={[styles.descripcion, { textAlign: 'right' }]}>{vino.frase}</Text>
          <Text style={styles.descripcion}>{vino.pais}</Text>
          <Text style={styles.descripcion}>{vino.añoDeCosecha}</Text>
          <Text style={styles.descripcion}>{vino.calificacion}/5</Text>
        </View>

        {/* bottle */}
        <View style={{ flex: 2, }}>
          <Image source={{ uri: vino.imagen }} style={styles.imagen} />
        </View>


        {/* lado right */}
        <View style={{ flex: 1, justifyContent: 'space-evenly', paddingRight: 8 }}>
          <Text style={styles.descripcion}>{vino.descripcion}</Text>
          <Text style={styles.descripcion}>{vino.tipoDeUva}</Text>
          <Text style={styles.descripcion}>{vino.mililitros} ML</Text>
        </View>
      </View>

      {/* parte inferior */}
      <Text style={styles.food}>Recomendado con {vino.food}</Text>
      <Text style={styles.precio}>Precio: ${vino.precio}</Text>

      {/* botones */}
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 16 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <TouchableOpacity style={styles.touchItem} onPress={subtractItem}>
            <AntDesign name="minuscircle" size={24} color={globalStyles.colorBgLogin} />
          </TouchableOpacity>

          <Text>{counter}</Text>

          <TouchableOpacity style={styles.touchItem} onPress={addItem}>
            <AntDesign name="pluscircle" size={24} color={globalStyles.colorBgLogin} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ backgroundColor: globalStyles.colorBgLogin, paddingHorizontal: 32, paddingVertical: 16, borderRadius: 16 }}>
          <Text style={styles.buttom}>Add cart </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: '100%',
    resizeMode: 'contain',
  },
  descripcion: {
    fontSize: 14,
    color: globalStyles.colorInactIcon
  },
  precio: {
    fontSize: 18,
    fontFamily: 'Bodoni',
    paddingHorizontal: 16
  },
  food: {
    fontFamily: 'Cormorant',
    fontSize: 24,
    padding: 16,
    textAlign:'center'
  },
  mililitros: {
    fontSize: 16,
    color: 'gray',
  },
  touchItem: {
    padding: 8,
    paddingHorizontal: 16
  },
  buttom: {
    fontFamily: 'Bodoni',
    color: 'white',
    fontSize: 16,
  }
});
