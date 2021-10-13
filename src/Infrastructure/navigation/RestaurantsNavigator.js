import React from 'react';

//import stack navigation
import {createStackNavigator} from "@react-navigation/stack";
//import screen
import { RestaurantScreen } from '../../features/restaurants/screens/RestaurantScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator =() => {
    return (
        <RestaurantStack.Navigator headerMode = "none">
            <RestaurantStack.Screen 
            name="Restaurants"
            component={RestaurantScreen}
            />
        </RestaurantStack.Navigator>
    )
}