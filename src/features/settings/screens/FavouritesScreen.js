import React, { useContext } from "react";
import { SafeArea } from "../../restaurants/components/SafeArea";
import { FlatList, TouchableOpacity, View } from "react-native";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { RestaurantInfo } from "../../restaurants/components/RestaurantInfo";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { colors } from "../../../Infrastructure/Theme/colors";

const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.heading}
fontSize: ${props => props.theme.fontSizes.title};
color: ${props => props.theme.colors.ui.primary};
paddingTop: 20px;
`

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    favourites.length ? (
        <>
      <SafeArea>
          <View style={{paddingTop:15, alignItems:'left', paddingLeft:15}}>
              <Button
              icon="arrow-left" 
              mode="contained" 
              color={colors.brand.primary}
              onPress={() => navigation.goBack()}
              >Back
              </Button>
          </View>

        <FlatList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail", {
                    currentRestaurant: item,
                  });
                }}
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
    </>

    ):(
        <>
<SafeArea style={{alignItems:"center"}}>
    <Title>No favourites yet!</Title>
</SafeArea>
</>
    )
  );
};
