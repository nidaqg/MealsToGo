import React, {useState, createContext} from "react";
import * as firebase from "firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
//states for all the values
const[user, setUser] = useState("")
const[isLoading, setIsLoading] = useState(false)
const[error, setError] = useState("")
const[isAuthenticated, setIsAuthenticated] = useState(false)

//login function with auth
const onLogin = async (email,password) => {
try{
    if(email !== "" || password !=="") {
       setIsLoading(true)
       setError("")
       
       const currentUser = await firebase.auth().signInWithEmailAndPassword(email,password)
        .then((currentUser)=> {
        setIsAuthenticated(true)

        setUser(currentUser.user.email)
            setIsLoading(false)
        })
        
        
    } else {
        setError("Please enter login information");
        return;
    }
}
catch(e) {
    setError(e.message)
    console.log("ERROR CONTEXT", e.message)
    setIsLoading(false)
}
}

//registration function with auth
const onRegister = async (email, password, repeatedpassword) => {
try{
    if(password === repeatedpassword) {
        setError("")
    const currentUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
        setUser(currentUser.user.email)
        setIsAuthenticated(true)
        setIsLoading(false)
    })
} else {
    setError("Error: Passwords do not match");
    return; 
}}
catch(e) {
    setIsLoading(false);
    console.log(e.message)
    setError(e.message)
}

}



    return (
        <AuthContext.Provider
        value={{
            isAuthenticated,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
        }}>
            {children}
        </AuthContext.Provider>
    )
}