import React from "react";

//import stack navigation
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
//import screen
import { RestaurantScreen } from "../../features/restaurants/screens/RestaurantScreen";
import { RestaurantDetails } from "../../features/restaurants/screens/RestaurantDetails";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
