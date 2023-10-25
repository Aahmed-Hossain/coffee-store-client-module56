/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    const createUser = ( email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user from authProvide', currentUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {user,loading,createUser, signIn}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;