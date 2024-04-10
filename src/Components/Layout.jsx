import React, { useContext, useEffect } from 'react'
import Topheader from './Topheader'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';


export default function Layout() {


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
