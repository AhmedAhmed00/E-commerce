/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from 'react';


export const AuthContext = createContext(null)


export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null)


    function logout() {
        localStorage.removeItem("accessToken")
        setAccessToken(null)
    }
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setAccessToken(localStorage.getItem("accessToken"))
            console.log("welcome", accessToken);
        }
    }, [accessToken, setAccessToken])



    return <AuthContext.Provider value={{ accessToken, setAccessToken, logout }} >
        {children}
    </AuthContext.Provider>
}