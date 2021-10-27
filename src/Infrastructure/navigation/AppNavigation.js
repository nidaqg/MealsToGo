import React from 'react';
import { RestaurantsNavigator } from './RestaurantsNavigator';
import { SettingsNavigator } from './SettingsNavigator';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";

import { MapScreen } from '../../features/map/screens/MapScreen';

import { RestaurantContextProvider } from "../../services/restaurantservice/mock/RestaurantContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";

//for tab navigation
const Tab = createBottomTabNavigator();
  

export const AppNavigation = () => {
    return (
      <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>

          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Restaurants') {
                iconName = 'fast-food-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Map') {
                iconName = 'map-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
          </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>

    )
}