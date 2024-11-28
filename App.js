import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bodoni: require("./assets/fonts/BodoniModaSC-VariableFont_opsz,wght.ttf"),
    BodoniBold: require("./assets/fonts/BodoniModaSC_9pt-Bold.ttf"),
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

//QUEDAMOS EN DONDE DEBEMOS REPASAR CONTEXT PARA ASI PODER APREDENR 
//HACER USO DE LOS ESTADOS Y LISTA EN TODOA LA APP
