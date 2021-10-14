import React from "react";
import styled from "styled-components/native";
import {SafeAreaView, StatusBar} from "react-native";
import { RestaurantInfo } from "../components/RestaurantInfo";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;


export const RestaurantDetails = ({route}) => {

    const {currentRestaurant} = route.params;
    return (
        <>
        <SafeArea>
        <RestaurantInfo restaurant={currentRestaurant}/>
        </SafeArea>
        </>
    )
}