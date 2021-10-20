import * as firebase from "firebase";

export const loginRequest= (email,password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword("nida@mail.com", "test123456")
    .then((user) => {
      console.log("USER", user);
      setIsAuth(true);
    })
    .catch((e) => {
      console.log("AUTH ERROR", e);
    });
}