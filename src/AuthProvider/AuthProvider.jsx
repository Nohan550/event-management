import { createContext } from "react";
// import auth from "../firebase/firebase.config";
// import {  createUserWithEmailAndPassword } from "firebase/auth";
 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   const emailAndPassword = (email,password)=>{
    // createUserWithEmailAndPassword(auth, email, password);
   }
    const authInfo ={
     emailAndPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;