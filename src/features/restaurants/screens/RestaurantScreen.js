import React, { useContext } from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { RestaurantContext } from "../../../services/restaurantservice/mock/RestaurantContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import {Search} from "../components/SearchComponent";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;


export const RestaurantScreen = () => {
  const restaurantsContext = useContext(RestaurantContext);

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
        <Search/>
        <FlatList
          data={restaurantsContext.restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
