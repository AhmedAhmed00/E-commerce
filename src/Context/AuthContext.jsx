/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const AuthContext = createContext(null)


export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null)
    function logout() {
        setAccessToken(null)
        localStorage.removeItem("accessToken")
    }




    return <AuthContext.Provider value={{ accessToken, setAccessToken, logout }} >
        {children}
    </AuthContext.Provider>
}