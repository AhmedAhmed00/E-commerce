import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
    const accessToken = localStorage.getItem("accessToken")

    if (accessToken) {
        return children
    }
    else {
        console.log(accessToken);
        return <Navigate to={'/login'} />
    }
}
