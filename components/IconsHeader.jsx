import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from "../data/globalStyles";



export default function IconsHeader() {
  return (
    <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="cart-outline" size={24} color={globalStyles.colorBgLogin} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="notifications-outline" size={24} color={globalStyles.colorBgLogin} />
            </TouchableOpacity>
          </View>
  )
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  iconButton: {
    marginLeft: 15,
  },
})