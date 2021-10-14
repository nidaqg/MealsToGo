import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { SearchMap } from "../components/SearchMap";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;  
`

export const MapScreen = () => {
    return (
<>
<SearchMap/>
<Map/>
</>
    )
}