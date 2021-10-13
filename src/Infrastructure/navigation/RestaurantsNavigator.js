import React from "react";

//import stack navigation
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
//import screen
import { RestaurantScreen } from "../../features/restaurants/screens/RestaurantScreen";
import { Text } from "react-native";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Detail Page</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
