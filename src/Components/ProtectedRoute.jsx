import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {

    const { accessToken } = useContext(AuthContext)

    if (!accessToken && !localStorage.getItem("accessToken")) {

        return <Navigate to={'/login'} />
    }
    else {
        return children

    }
}
