import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyTabs from "./MyTabs"


export default function MyStack() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  )
}

