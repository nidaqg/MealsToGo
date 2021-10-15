import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  //state for storing favourites
  const [favourites, setFavourites] = useState([]);

  //function for adding a restaurant to favourites
  const add = (restuarant) => {
    setFavourites([...favourites, restaurant]);
  };

  //function for removing a restaurant from favourites
  const remove = (restaurant) => {
    //filter out restuarants that have the same place id to avpoid duplication
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removefromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
