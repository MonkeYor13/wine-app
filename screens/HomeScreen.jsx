import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import globalStyles from "../data/globalStyles";

export default function HomeScreen() {
  const [selectedButton, setSelectedButton] = useState('all');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* TITULO */}
      <View style={styles.contentTitle}>
        <Text style={[styles.title, { fontWeight: "700" }]}>Drinks</Text>
        <Text style={styles.title}> Collection</Text>
      </View>
      {/* BOTONES DE CATEGORIZACION */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedButton === "all" && styles.buttonSelected]}
        >
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
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
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 24,
    borderWidth: 1,
  },
  buttonSelected: {
    

  },
});
