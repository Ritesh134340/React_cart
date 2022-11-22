import { createContext } from "react";
import { useState } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}){
    const [isAuth,setAuth]=useState(false)

    const toggleAuth=()=>{
        setAuth(!isAuth)
    }
    const value={isAuth,toggleAuth}
    return(
        <AuthContext.Provider value={value}>
           { children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;