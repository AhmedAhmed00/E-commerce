import React, { useContext, useEffect } from 'react'
import Topheader from './Topheader'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';


export default function Layout() {

    const { accessToken, setAccessToken } = useContext(AuthContext)
    useEffect(() => {
        if (localStorage.getItem("accessToken") !== null) {
            setAccessToken(localStorage.getItem("accessToken"))
        }

    }, [accessToken, setAccessToken])
    return (
        <>
            <Topheader />
            <Navbar />
            <div className='container m-auto'>
                <Outlet />
            </div>

        </>

    )
}
