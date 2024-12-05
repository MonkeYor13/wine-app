import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Contexto from './Contexto'
import vinos from '../data/vinos'


export default function UsarProvider({ children }) {
  //lista iniical de vinos
  const [listaVinos, setListaVinos] = useState(vinos)
  //estados categorizacion
  const [selectedButton, setSelectedButton] = useState('All');

  // Array de botones
  const buttons = [
    { label: "All", value: "All" },
    { label: "Offers", value: "Offers" },
    { label: "Popular", value: "Popular" },
    // Puedes agregar más botones aquí
  ];

  // Filtrado de vinos según el botón seleccionado
  const filteredVinos = vinos.filter((vino) => {
    if (selectedButton === "All") return true;
    if (selectedButton === "Offers") return vino.offer;
    if (selectedButton === "Popular") return vino.popular;
    return false; // Prevención de errores
  });



  return (
    <Contexto.Provider
      value={{
        listaVinos,
        setListaVinos,
        selectedButton,
        setSelectedButton,
        buttons,
        filteredVinos,
      }}
    >
      {children}
    </Contexto.Provider>
  )
}