import React, {useState, createContext, useEffect} from "react";
import * as firebase from "firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
//states for all the values
const[user, setUser] = useState(null)
const[isLoading, setIsLoading] = useState(false)
const[error, setError] = useState("")
const[isAuthenticated, setIsAuthenticated] = useState(false)


//function to check if there is already a user logged in or not
//firebase has a hook for this so session can persist when reloaded
firebase.auth().onAuthStateChanged((u) => {
    if(u) {
        setUser(u);
        setIsAuthenticated(true)
        setIsLoading(false)
    } else {
        setIsLoading(false)
    }
})



//login function with auth
const onLogin = async (email,password) => {
try{
    if(email !== "" || password !=="") {
       setIsLoading(true)
       setError("")
       
       const currentUser = await firebase.auth().signInWithEmailAndPassword(email,password)
        .then((currentUser)=> {
        setIsAuthenticated(true)
        setUser(currentUser.user)
            setIsLoading(false)
        })
        
        
    } else {
        setError("Please enter login information");
        return;
    }
}
catch(e) {
    setError(e.message)
    setIsLoading(false)
}
}

//registration function with auth
const onRegister = async (email, password, repeatedpassword) => {
try{
    if(password === repeatedpassword) {
        setError("")
        setIsLoading(true)
    const currentUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
        setUser(currentUser.user)
        setIsLoading(false)
        setIsAuthenticated(true)
    })
} else {
    setError("Error: Passwords do not match");
    return; 
}}
catch(e) {
    setIsLoading(false);
    setError(e.message)
}

}

//logout function
const onLogOut = () => {
    setUser(null);
    firebase.auth().signOut();
    setIsAuthenticated(false)
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
            onLogOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}