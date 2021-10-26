import React, { createContext, useState, useEffect, useContext } from "react";
//use async storage to perpetuate favourites even on reload
//async stores locally on the phone, no server needed
import AsyncStorage from "@react-native-async-storage/async-storage";

//import authentication so we can attacj favourites to different users
import { AuthContext } from "../authentication/AuthenticationContext";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  //get current user from auth context
  const {user} = useContext(AuthContext)
  //state for storing favourites
  const [favourites, setFavourites] = useState([]);

  //function to store favourites in async
  const saveFavourites = async (value, user) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${user.uid}`, jsonValue);
    } catch (e) {
      console.log("error saving: ", e);
    }
  };

  //function to retrieve async data

  const loadFavourites = async (user) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${user.uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading: ", e);
    }
  };

  //function for adding a restaurant to favourites
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  //function for removing a restaurant from favourites
  const remove = (restaurant) => {
    //filter out restuarants that have the same place id to avpoid duplication
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

//useEffect to load favourites from storage
  useEffect(() => {
    if(user) {
    loadFavourites(user);
    }
  }, [user]);


  //useEffect to save favourites to storage
  useEffect(() => {
    if(user){
    saveFavourites(favourites, user);
    }
  }, [favourites, user]);

  

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
