import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import MyTabs from "./MyTabs"
import LogInScreen from "../screens/LogInScreen"


export default function MyStack() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MyTabs} options={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: "green",
        headerTitle: () => null,
        headerLeft: () => (
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }} // Reemplaza con tu imagen
              style={styles.avatar}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="cart-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        ),
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