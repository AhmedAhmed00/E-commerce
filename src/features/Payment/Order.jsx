import React from 'react'
import { Outlet } from 'react-router-dom'
import useCart from '../cart/useCart'

export default function Order() {






    return (
        <>
            <div className='container py-6'>
                <Outlet />
            </div>
        </>


    )
}
