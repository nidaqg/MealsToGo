import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/Theme";

//import firebase
import * as firebase from "firebase";
import "firebase/auth";

//importing fonts from expo-google-fonts.
//Each font has to be imported separately
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

//import contextproviders
import { AuthContextProvider } from "./src/services/authentication/AuthenticationContext";

//import Navigation
import { Navigation } from "./src/Infrastructure/navigation/index";

//firebase authentication requirements
const firebaseConfig = {
  apiKey: "AIzaSyA_ZRNelFij6x1pGttLKXma1aBspLu8GJE",
  authDomain: "mealstogo-1b6f7.firebaseapp.com",
  projectId: "mealstogo-1b6f7",
  storageBucket: "mealstogo-1b6f7.appspot.com",
  messagingSenderId: "757408569779",
  appId: "1:757408569779:web:8e50653a91213ff51653c6",
};

//initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthContextProvider>
              <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
