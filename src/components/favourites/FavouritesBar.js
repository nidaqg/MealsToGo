import React from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurant } from "../restaurant/CompactRestaurant";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

//use theme items to style text
const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.body}
fontSize: ${props => props.theme.fontSizes.caption};
color: ${props => props.theme.colors.ui.primary};
marginLeft: 10px
`


export const FavouritesBar = ({ favourites, onDetail }) => {
  
    if(!favourites.length) {
        return null;
    }
  
    return (
    <>
      <FavouritesWrapper>
        <Title>Favourites</Title>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <View key={key} style={{ marginLeft: 10 }}>
                  <TouchableOpacity
                  onPress={()=> onDetail("RestaurantDetail", {
                      currentRestaurant: restaurant,
                    })}
                  >
                <CompactRestaurant restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};
