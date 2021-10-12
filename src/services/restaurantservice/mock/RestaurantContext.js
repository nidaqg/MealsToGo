import React, { useState, createContext, useEffect, useMemo, useContext } from "react";
import { restaurantRequest, restaurantTransform } from "./RestaurantService";
import {LocationContext} from "../../location/locationContext";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  //creating state for each thing we will need
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //import location context to hook up search with retrieving of restaurtant data
  const {location} = useContext(LocationContext)


  //function to retrieve restaurants
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    //set restaurants back to empty array everytime new search is triggered
    setRestaurants([]);

    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  //use effect to trigger a search whenever the search bar loads
  //must format data coming from searchKeyword
  useEffect(() => {
    if(location) {
    const locationString = `${location.lat},${location.lng}`
    retrieveRestaurants(locationString)
    }
    }, [location])

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
