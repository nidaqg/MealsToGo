import React, {useContext} from 'react';
import { RestaurantsNavigator } from './RestaurantsNavigator';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";

import { Text, Button } from "react-native";
//import SafeArea component
import {SafeArea} from "../../features/restaurants/components/SafeArea";
import { MapScreen } from '../../features/map/screens/MapScreen';
import { AuthContext } from '../../services/authentication/AuthenticationContext';

import { RestaurantContextProvider } from "../../services/restaurantservice/mock/RestaurantContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";


const Tab = createBottomTabNavigator();
//for tab navigation
const Settings = () => {
  const {onLogOut} = useContext(AuthContext);

  return (
    <SafeArea style={{ flex: 1 }}>
      <Button
      title="Log out"
      onPress={()=> onLogOut()}
      />
    </SafeArea>
  );
}
  

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
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={MapScreen} />
          </Tab.Navigator>
          </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>

    )
}