import React, { useState, createContext } from "react";
import { locationRequest, locationTransform } from "./locationService";
//create location context
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  //create all the states needed
  const [keyword, setKeyword] = useState("Antwerp");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //search function
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if(!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log("LOCATION CONTEXT ",result)
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };



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
