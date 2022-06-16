import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props

    const loadMore = () => {
      loadPokemons()
      console.log("cargo")
    }

  return (
    <FlatList 
    data={pokemons}
    numColumns={2}
    showVerticalScrollIndicator={false}
    initialNumToRender={20}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item} />}
    contentContainerStyle={styles.flatlistContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0}
    ListFooterComponent={
      isNext && (
      <ActivityIndicator 
      size="large"
      style={styles.spinner}
      color="#AEAEAE"
      />
      )
    }
    />
  )
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === "android" ? 90 : 60,
    }
})