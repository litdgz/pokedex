import { SafeAreaView, Text } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native"

import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from "../api/pokemon"
import useAuth from "../hooks/useAuth"
import PokemonList from "../components/PokemonList"
import NoLogged from '../components/NoLogged'

export default function Favorites() {
  const [pokemons, setPokemons] = useState()
  const { auth } = useAuth()
  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          try {
            const response = await getPokemonsFavoriteApi()
            const pokemonsArray = [];
  
            for await (const id of response) {
              const pokemonDetails = await getPokemonDetailsApi(id)
  
              pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other['official-artwork'].front_default
              })
            }
  
            setPokemons(pokemonsArray)
          } catch (error) {
            throw error
          }
          
        })()
      }
    }, [auth])
  )

  
  
  return (
    <SafeAreaView>
      {!auth ? <NoLogged /> 
      : 
      <PokemonList pokemons={pokemons}/>}
    </SafeAreaView>
  )
}
