import React from 'react';
import { RestaurantScreen } from "../../features/restaurants/screens/RestaurantScreen";
//import Navigation components
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";

import { Text } from "react-native";
//import SafeArea component
import {SafeArea} from "../../features/restaurants/components/SafeArea";

const Tab = createBottomTabNavigator();
//for tab navigation
const Settings = () => (
    <SafeArea style={{ flex: 1 }}>
      <Text>Settings</Text>
    </SafeArea>
  );
  const Map = () => (
    <SafeArea style={{ flex: 1 }}>
      <Text>Maps</Text>
    </SafeArea>
  );
  const Restaurants = () => <RestaurantScreen />;
  
  

export const AppNavigation = () => {
    return (
        <NavigationContainer>
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
            <Tab.Screen name="Restaurants" component={Restaurants} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}