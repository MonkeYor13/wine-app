import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import globalStyles from '../data/globalStyles';

export default function FavoriteScreen() {
  const { likedVinos } = useContext(Contexto);
  return (
    <View style={styles.favoriteScreen}>
      <Text style={styles.vinosFavoritos}>Vinos Favoritos:</Text>
      <FlatList
        data={likedVinos} // Lista de vinos favoritos
        keyExtractor={(item) => item.id.toString()} // Clave única para cada vino
        renderItem={({ item }) => (

          <View style={styles.favoriteCard}>
            <View style={styles.favoriteContentText}>

              <Text style={styles.favoriteTitle}>{item.nombre}</Text>
              <Text style={styles.favoriteFrase}>{item.frase}</Text>

              <View style={styles.favoriteContentDetails}>
                <Text style={styles.favoriteDetails}>Source: {item.pais}</Text>
                <Text style={styles.favoriteDetails}>{item.mililitros}ML</Text>
                <Text style={styles.favoriteDetails}>{item.calificacion} /5</Text>
              </View>

            </View>
            <Image style={styles.favoriteImage} source={{ uri: item.imagen }} resizeMode='contain' />
          </View>

        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tienes vinos favoritos aún.</Text>
        }
        ItemSeparatorComponent={<View style={styles.ItemSeparatorComponent} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  favoriteScreen: {
    flex: 1,
    padding: 16,
    backgroundColor: globalStyles.colorBgScreen,
  },
  vinosFavoritos: {
    fontFamily: 'Bodoni',
    marginTop: 16,
    fontSize: 16,
    marginBottom: 16,
    color: globalStyles.colorBgLogin,
  },
  favoriteCard: {
    backgroundColor: globalStyles.colorCard,
    borderRadius: 16,
    height: 200,
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  favoriteContentText: {
    justifyContent: 'space-around',
    flex: 3
  },
  favoriteContentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  favoriteTitle: {
    fontFamily: 'BodoniBold',
    fontSize: 16,
    textAlign: 'center',
  },
  favoriteFrase: {
    fontFamily: 'Cormorant',
    fontSize: 24,
    textAlign: 'center',
    color: globalStyles.colorBgLogin,
  },
  favoriteDetails: {
    fontFamily: 'Cormorant',
    fontSize: 16,
    color: globalStyles.colorInactIcon
  },
  favoriteImage: {
    width: 100,
    height: 180,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  emptyText: {
    fontFamily: 'BodoniBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    color: globalStyles.colorBgLogin,
  },
  ItemSeparatorComponent: {
    height: 24
  }
})