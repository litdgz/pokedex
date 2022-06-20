import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Image } from "react-native"

import AccountNavigation from "./AccountNavigation"
import FavoritesNavigation from "./FavoritesNavigation"
import PokedexNavegation from "./PokedexNavegation"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return(
        <Tab.Navigator initialRouteName="Pokedex">
            <Tab.Screen name="Favorites" component={FavoritesNavigation} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, size}) => (
                    <Icon name="heart" color={color}  size={size}/>
                    )
                }} />
            <Tab.Screen name="Pokedex" component={PokedexNavegation} options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball()
                }}/>
                <Tab.Screen name="Account" component={AccountNavigation} options={{
                    tabBarLabel: "Cuenta",
                    tabBarIcon: (color, size) => (
                        <Icon name="user" color={color} size={20}/>
                    )
                }}/>
        </Tab.Navigator>
    )

}

function renderPokeball() {
    return(
        <Image 
            source={require("../../assets/pokeball.png")}
            style={{width: 75, height: 75, top: -15}} 
        />
    )
}