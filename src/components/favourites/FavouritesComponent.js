import React, {useContext} from "react";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons"

const FavouritesButton = styled(TouchableOpacity)`
background-color: transparent;
border-color: #20232a;
position:absolute;
top: 20px;
right: 10px;
width: 70px;
z-index:9;
`

export const Favourite = () => {
//destructure to get everything we need from the favourites context
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext)

    return (
        <>
        <FavouritesButton>
            <AntDesign 
            name="heart"
            size={24}
            color="red"
            />
        </FavouritesButton>
        </>
    )
}