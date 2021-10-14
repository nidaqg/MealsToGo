import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { List } from "react-native-paper";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

export const RestaurantDetails = ({ route }) => {
  //get current restaurants from params
  const { currentRestaurant } = route.params;

  //set up states for menu
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <SafeArea>
        <RestaurantInfo restaurant={currentRestaurant} />

        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Fried Eggs" />
            <List.Item title="Eggs Benedict" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Hamburger" />
            <List.Item title="Chicken Strips" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Steak" />
            <List.Item title="Pasta" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Lemonade" />
            <List.Item title="Coke" />
          </List.Accordion>
        </ScrollView>
      </SafeArea>
    </>
  );
};
