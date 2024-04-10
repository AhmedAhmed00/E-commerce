import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children }) {

    const { accessToken } = useContext(AuthContext)

    if (!accessToken && !localStorage.getItem("accessToken")) {

        return <Navigate to={'/login'} />
    }
    else {
        return children

    }
}
