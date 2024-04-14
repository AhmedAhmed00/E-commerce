
import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';




const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    async function login(data) {
        try {
            setIsLoading(true)
            const resData = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", data)
            localStorage.setItem('accessToken', resData.data.token)
            setAccessToken(resData.data.token)
        }
        catch (err) {
            console.log(err);
            toast.error("There is an error")
        }
        finally {
            setIsLoading(false)
        }
    }

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



    return <AuthContext.Provider value={{ accessToken, setAccessToken, logout, login, isLoading }} >
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error("context used outside provider")
    else {
        return context
    }
}