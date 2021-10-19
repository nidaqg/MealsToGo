import React from "react";
import styled from "styled-components";
import {Card, Title} from "react-native-paper";
import { CompactRestaurant } from "../../../components/restaurant/CompactRestaurant";


export const MapCallout = ({restaurant}) => {
    return (
        <>
        <CompactRestaurant isMap restaurant = {restaurant} />
        </>
    )
}
