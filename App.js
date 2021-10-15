import 'react-native-gesture-handler';
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/Theme";

//importing fonts from expo-google-fonts.
//Each font has to be imported separately
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

//import contextproviders
import { RestaurantContextProvider } from "./src/services/restaurantservice/mock/RestaurantContext";
import {LocationContextProvider} from "./src/services/location/locationContext";
import { FavouritesContextProvider } from './src/services/favourites/FavouritesContext';

//import Navigation
import { Navigation } from "./src/Infrastructure/navigation/index";

//import theme provider from styled components npm package and wrap everything in it
//this will help us keep the theme consistent throughout the app
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
        <LocationContextProvider>
        <RestaurantContextProvider>
        <Navigation/>
        </RestaurantContextProvider>
        </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
