import React from "react";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen 
      name="Favourites" 
      options={{
        header: () => null,
      }}
      component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};