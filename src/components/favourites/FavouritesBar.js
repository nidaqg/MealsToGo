import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurant } from "../restaurant/CompactRestaurant";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }) => {
  return (
    <>
      <FavouritesWrapper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name.split("").join("");
            return (
              <View key={key} style={{ marginRight: 10 }}>
                <CompactRestaurant restaurant={restaurant} />
              </View>
            );
          })}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};
