import React, {useState, useEffect, createContext} from 'react';
import {locationRequest, locationTransform} from "./locationService";
//create location context
export const LocationContext = createContext();

//create all the states needed
const[keyword, setKeyword] = useState("san francisco");
const [location, setLocation] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

//search function
const onSearch = (searchKeyword) => {
setIsLoading(true);
setKeyword(searchKeyword);
locationRequest(searchKeyword).then(locationTransform)
.then(result => {
    setIsLoading(false);
    setLocation(result)
}).catch((err) => {
    setIsLoading(false);
    setError(err);
})
}

//useEffect to trigger search on load
useEffect(()=> {
    onSearch(keyword)
}, []);

//context provider
export const LocationContextProvider = ({children}) => {
    return (
        <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}>
            {children}
        </LocationContext.Provider>
    )
}
