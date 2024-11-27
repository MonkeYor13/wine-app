import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import globalStyles from "../data/globalStyles";

export default function ButtonsCategoration({ selectedButton, setSelectedButton }) {
  // Array de botones
  const buttons = [
    { label: "All", value: "All" },
    { label: "Offers", value: "Offers" },
    { label: "Popular", value: "Popular" },
    // Puedes agregar más botones aquí
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.value}
          style={[styles.button, selectedButton === button.value && styles.buttonSelected]}
          onPress={() => setSelectedButton(button.value)}
        >
          <Text style={[styles.text, selectedButton === button.value && styles.textSelected]}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 32,

  },
  buttonSelected: {
    borderBottomWidth: 1,
    borderColor: globalStyles.colorBgLogin
  },
  text: {
    color: globalStyles.colorInactIcon, // Color de texto no seleccionado
  },
  textSelected: {
    color: globalStyles.colorBgLogin, // Color de texto seleccionado
  },
})