import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";


export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyHome" component={HomeScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

