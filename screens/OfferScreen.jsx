import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { useNavigation } from '@react-navigation/native';


export default function OfferScreen() {

  return (
    <FlatList
      data={toys.filter((toy) => favorites.includes(toy.id))}
      renderItem={({ item }) => (
        <Text>{item.name}</Text>
      )}
    />

  )
}

const styles = StyleSheet.create({})