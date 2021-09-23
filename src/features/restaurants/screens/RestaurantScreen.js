import React from 'react';
import styled from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/RestaurantInfo';


const SafeArea = styled(SafeAreaView)`
flex: 1;
 ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
padding: ${props => props.theme.space[3]};
`;

const ListContainer = styled(View)`
padding: ${props => props.theme.space[3]};
      flex: 1;
      backgroundColor:${props => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = () => {
    return (
    <>
      <SafeArea>
        <SearchContainer>
        <Searchbar
      placeholder="Search"
    />
        </SearchContainer>
        <ListContainer>
          <RestaurantInfo />
        </ListContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
    )
}
