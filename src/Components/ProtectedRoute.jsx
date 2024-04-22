import React from 'react'
import { useAuth } from '../features/authentication/AuthContext'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children }) {

    const { accessToken } = useAuth()

    if (!accessToken && !localStorage.getItem("accessToken")) {

        return <Navigate to={'/login'} />
    }
    else {
        return children

    }
}
