import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const { pokemons } = props
  return (
    <FlatList 
    data={pokemons}
    numColumns={2}
    showVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item} />}
    contentContainerStyle={styles.flatlistContentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 5
    }
})