import { StyleSheet, Text, FlatList, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import globalStyles from "../data/globalStyles";
import ButtonsCategoration from "../components/ButtonsCategoration";
import CardsVinos from "../components/CardsVinos";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* TITULO */}
      <View style={styles.contentTitle}>
        <Text style={[styles.title, { fontWeight: "700" }]}>Drinks</Text>
        <Text style={styles.title}> Collection</Text>
      </View>


      {/* BOTONES DE CATEGORIZACION */}
      <ButtonsCategoration />


      {/* DATOS DEL LA LISTA DE OBJETOS USANDO MAP */}
      <View style={styles.contentCard}>
        <CardsVinos />
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
  contentCard: {
    marginTop: 30,
  }
});
