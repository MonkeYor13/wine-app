import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, OfferScreen, SettingScreen, WineScreen } from "../imports/screens";
import globalStyles from "../data/globalStyles";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalStyles.colorBgLogin,
        tabBarInactiveTintColor: globalStyles.colorInactIcon,
        headerShown: false,
      }}
    >
      <Tab.Screen name="MyHome" component={HomeScreen} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (<AntDesign name="home" size={24} color={color} />),
      }} />
      <Tab.Screen name="Offers" component={OfferScreen} options={{
        tabBarIcon: ({ color }) => (<AntDesign name="star" size={24} color={color} />),
      }} />
      <Tab.Screen name="Wines" component={WineScreen} options={{
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="glass-wine" size={24} color={color} />),
      }} />
      <Tab.Screen name="Settings" component={SettingScreen} options={{
        tabBarIcon: ({ color }) => (<AntDesign name="user" size={24} color={color} />),
      }} />
    </Tab.Navigator>
  )
}

