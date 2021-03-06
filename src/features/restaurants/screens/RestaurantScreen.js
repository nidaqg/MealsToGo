import React, { useContext, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { FavouritesBar } from "../../../components/favourites/FavouritesBar";
import { RestaurantContext } from "../../../services/restaurantservice/mock/RestaurantContext";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/SearchComponent";
import { SafeArea } from "../components/SafeArea";
import { FadeInView } from "../../../components/animations/FadeAnimation";

export const RestaurantScreen = ({ navigation }) => {
  //set up contexts
  const restaurantsContext = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  //favourites bar
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeArea>
        {restaurantsContext.isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && 
        <FavouritesBar 
        favourites={favourites}
        onDetail={navigation.navigate}
        />}
        <FlatList
          data={restaurantsContext.restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail", {
                    currentRestaurant: item,
                  });
                }}
              >
                <FadeInView>
                <RestaurantInfo restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
