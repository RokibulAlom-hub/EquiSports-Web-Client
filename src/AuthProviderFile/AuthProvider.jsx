import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    // user creation function
    const createUserByemail = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user login function
    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    // user logout function
    const userLogout = () => {
        return signOut(auth)
    }
    // observer settings
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            setUser(currentuser)
            console.log('observer is watching you', currentuser);
            setLoader(false)
        })
        return () =>  {
            unsubscribe ();
        }
    },[])
    const authData = {
        createUserByemail,
        userLogin,
        userLogout,
        user,
        loader
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;