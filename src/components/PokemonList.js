import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
    const { pokemons } = props
  return (
    <FlatList 
    data={pokemons}
    numColums={2}
    showVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <Text>{item.name}</Text>}
    contentContainerStyle={styles.flatlistContentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 5
    }
})