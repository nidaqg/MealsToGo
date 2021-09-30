import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantTransform } from "./RestaurantService";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
//creating state for each thing we will need
  const [restaurants, setRestaurants] = useState([]);
const [isLoading, setIsLoading]= useState(false);
const [error, setError] = useState(null);
 
//useEffect to retrieve data
useEffect(()=> {
   retrieveRestaurants();
 }, []);

 //retrieve function
 const retrieveRestaurants=()=> {
   setIsLoading(true);
   setTimeout(()=> {
restaurantRequest()
.then(restaurantTransform)
.then((results) => {
  setRestaurants(results);
  setIsLoading(false);
})
.catch((err)=> {
  setIsLoading(false);
  setError(err)
})
   }, 2000)
 }

  return (
    <RestaurantContext.Provider 
    value={{ 
      restaurants,
      isLoading,
      error 
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
