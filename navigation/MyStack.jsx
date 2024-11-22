import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyTabs from "./MyTabs"
import LogInScreen from "../screens/LogInScreen"


export default function MyStack() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LogInScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  )
}

