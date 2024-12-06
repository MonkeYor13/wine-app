import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Contexto from './Contexto'
import vinos from '../data/vinos'


export default function UsarProvider({ children }) {
  const [listaVinos, setListaVinos] = useState(vinos) //lista iniical de vinos
  const [selectedButton, setSelectedButton] = useState('All'); //estados categorizacion
  const [likedVinos, setLikedVinos] = useState([]); // Vinos con like
  const isVinoLiked = (vino) => likedVinos.some((v) => v.id === vino.id); //verifica si un vino específico está marcado como "like"
  
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

  // Limitar texto de los nombres de vinos con 3 puntitos
  const truncarTexto = (texto, limite) => {
    return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
  };


//funcion de agregar y quitar de favoritos
  const toggleLike = (vino) => {
    setLikedVinos((prevLikes) => {
      if (prevLikes.some((v) => v.id === vino.id)) {
        return prevLikes.filter((v) => v.id !== vino.id); // Quitar de favoritos
      } else {
        return [...prevLikes, vino]; // Añadir a favoritos
      }
    });
  };


  return (
    <Contexto.Provider
      value={{
        listaVinos,
        selectedButton,
        setSelectedButton,
        buttons,
        filteredVinos,
        likedVinos,
        toggleLike,
        isVinoLiked,
        truncarTexto,
      }}
    >
      {children}
    </Contexto.Provider>
  )
}