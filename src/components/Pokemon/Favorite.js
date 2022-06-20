import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"


import { addPokemonFavoriteApi, isPokemonFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadCheck, setReloadCheck] = useState(false)
    console.log(isFavorite)

    const Icon = isFavorite ? FontAwesome : FontAwesome5

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id)
                setIsFavorite(response)
            } catch (error) {
                throw error
            }
        })()
    }, [id, reloadCheck])

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev)
    }

    const removeFavorite = () => {
        console.log("Eliminar de Favoritos")
    }


    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id)
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Icon 
    name="heart" 
    color="#fff" 
    size={20} 
    onPress={isFavorite ? removeFavorite : addFavorite} 
    style={{ marginRight: 20}}/>
  )
}