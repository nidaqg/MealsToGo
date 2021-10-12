import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./locationService";
//create location context
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  //create all the states needed
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //search function
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  //instead of puttin all this in the search function, use useEffect
  //Everytime keyword changes, useEffect is called
  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log("LOCATION CONTEXT ", result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
