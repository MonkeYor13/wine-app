import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import globalStyles from "../data/globalStyles";
import Contexto from "../contexto/Contexto";
import { useContext } from "react";


export default function ButtonsCategoration() {
  const{selectedButton, setSelectedButton, buttons} = useContext(Contexto)

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