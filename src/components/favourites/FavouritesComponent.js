import React, {useContext} from "react";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons"

const FavouritesButton = styled(TouchableOpacity)`
background-color: transparent;
border-color: #20232a;
position:absolute;
top: 25px;
right: 25px;
z-index:9;
`

export const Favourite = ({restaurant}) => {
//destructure to get everything we need from the favourites context
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext)

//to check if current restaurant is in favourites
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    return (
        <>
        <FavouritesButton
        onPress= {()=> {!isFavourite ? (addToFavourites(restaurant)) : (removeFromFavourites(restaurant))}}
        >
            <AntDesign 
            name={isFavourite ? "heart": "hearto"}
            size={24}
            color={isFavourite ? "red": "white"}
            />
        </FavouritesButton>
        </>
    )
}