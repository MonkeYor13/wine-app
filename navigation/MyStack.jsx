import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { LogInScreen, DetallesVino } from "../imports/screens"
import MyTabs from "../navigation/MyTabs"
import Icon from "react-native-vector-icons/Ionicons";
import ImageProfile from "../assets/imgs/imageProfile.jpeg"
import intro from "../data/intro"
import globalStyles from "../data/globalStyles";
import IconsHeader from "../components/IconsHeader";

export default function MyStack() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MyTabs} options={{
        title: intro[0].title,
        headerTitleStyle: { fontFamily: "Cormorant" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={ImageProfile} // Reemplaza con tu imagen
              style={styles.avatar}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (<IconsHeader />),
      }} />
      <Stack.Screen name="DetallesVino" component={DetallesVino} options={{
        headerShadowVisible: false,
        headerTitleStyle: { fontFamily: "Cormorant" },
        headerTitleAlign: "center",
        headerRight: () => (<IconsHeader />),
      }} />


    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({

  avatarContainer: {
    marginLeft: 10,
    borderRadius: 25,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  iconButton: {
    marginLeft: 15,
  },
});