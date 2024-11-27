import { StyleSheet, Text, FlatList, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import globalStyles from "../data/globalStyles";
import vinos from '../data/vinos'
import ButtonsCategoration from "../components/ButtonsCategoration";

export default function HomeScreen() {
  const [selectedButton, setSelectedButton] = useState('All');

  // Filtrado de vinos según el botón seleccionado
  const filteredVinos = vinos.filter((vino) => {
    if (selectedButton === "All") return true;
    if (selectedButton === "Offers") return vino.offer;
    if (selectedButton === "Popular") return vino.popular;
    return false; // Prevención de errores
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* TITULO */}
      <View style={styles.contentTitle}>
        <Text style={[styles.title, { fontWeight: "700" }]}>Drinks</Text>
        <Text style={styles.title}> Collection</Text>
      </View>
      {/* BOTONES DE CATEGORIZACION */}
      <ButtonsCategoration selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      {/* DATOS DEL LA LISTA DE OBJETOS USANDO MAP */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}  // Oculta la barra de desplazamiento horizontal
          data={filteredVinos} // Datos filtrados
          keyExtractor={(item) => item.id.toString()} // Clave única para cada elemento
          renderItem={({ item }) => (
            <View style={styles.vinoCard}>
              <Image source={{ uri: item.imagen }} style={styles.vinoImage} />
              <Text style={styles.vinoNombre}>{item.nombre}</Text>
              <Text style={styles.vinoDescripcion}>{item.descripcion}</Text>
            </View>
          )} // Renderizar cada elemento
          contentContainerStyle={{ paddingBottom: 20 }} // Espaciado inferior opcional
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colorBgScreen,
    paddingHorizontal: 16,
  },
  contentTitle: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontFamily: "Cormorant",
    color: globalStyles.colorBgLogin
  },
  vinoCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  vinoImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  vinoNombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  vinoDescripcion: {
    fontSize: 14,
    color: "#666",
  },
});
