import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/Theme";

//import theme provider from styled components npm package and wrap everything in it
//this will help us keep the theme consistent throughout the app
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
