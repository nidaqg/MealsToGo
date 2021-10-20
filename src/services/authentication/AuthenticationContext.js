import React, {useState, useEffect, createContext} from "react";
import * as firebase from "firebase";
import { loginRequest } from "./AuthService";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

//states for all the values
const[user, setUser] = useState(null)
const[isLoading, setIsLoading] = useState(false)
const[error, setError] = useState(null)

const onLogin = (email,password) => {
setIsLoading(true)
loginRequest(email,password).then((u)=> {
setUser(u)
setIsLoading(false)
})
.catch((e) => {
    setError(e)
    setIsLoading(false)
})
}



    return (
        <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            onLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}