import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";
import { useFonts } from "expo-font";
import UsarProvider from "./contexto/UsarProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bodoni: require("./assets/fonts/BodoniModaSC-VariableFont_opsz,wght.ttf"),
    BodoniBold: require("./assets/fonts/BodoniModaSC_9pt-Bold.ttf"),
    Cormorant: require("./assets/fonts/Cormorant-VariableFont_wght.ttf"),
  });
  //esto se lo agregamos para que siempre cargue nuestra fuente personalizada.
  if (!fontsLoaded) return null;

  return (
    <UsarProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UsarProvider>
  );
}

//se termino de aprender lo de pasar la infomraicon ocn like y usar contexto.
