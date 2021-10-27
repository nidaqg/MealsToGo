import React from "react";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";
import { CameraScreen } from "../../features/settings/screens/CameraScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";


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
      <SettingsStack.Screen 
      name="Camera" 
      options={{
        header: () => null,
      }}
      component={CameraScreen} />

    </SettingsStack.Navigator>
  );
};