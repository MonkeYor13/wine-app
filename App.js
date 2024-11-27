import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bodoni: require("./assets/fonts/BodoniModaSC-VariableFont_opsz,wght.ttf"),
    Cormorant: require("./assets/fonts/Cormorant-VariableFont_wght.ttf"),
  });
  //esto se lo agregamos para que siempre cargue nuestra fuente personalizada.
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



// QUEDAMOS EN CREAR LOS ESTILOS DE LA CARDS Y PASAR LOS PROPS