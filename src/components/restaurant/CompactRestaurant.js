import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform } from "react-native";

//image rendering for iOS
const CompactImage = styled.Image`
border-radius: 10px;
width: 120px;
height: 120px;
`;

//image rendering for android
const CompactWebView = styled(WebView)`
border-radius: 10px;
width: 120px;
height: 120px;
`

const Item = styled.View`
padding: 10px;
max-width: 120px;
align-items: center;
`;

//use theme items to style text
const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.body}
fontSize: ${props => props.theme.fontSizes.caption};
color: ${props => props.theme.colors.ui.primary};
`

const isAndroid = Platform.OS==="android";

export const CompactRestaurant = ({restaurant, isMap}) => {
    
    const Image = isAndroid && isMap ? CompactWebView: CompactImage;

    return (
        <>
        <Item>
            <Image
            source={{uri: restaurant.photos[0]}}
            />
            <Title>{restaurant.name}</Title>
        </Item>
        </>
    )
}