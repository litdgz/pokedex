import { Button, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorites() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi()
      console.log(response)
  }
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites}/>
    </SafeAreaView>
  )
}
