import React from 'react'
import { Outlet } from 'react-router-dom'
import useCart from '../cart/useCart'

export default function Order() {

    const { cart: { numOfCartItems } = {} } = useCart()





    return (
        <>
            {numOfCartItems ? <div className='container py-6'>
                <Outlet />
            </div> : <div className='p-5 text-2xl'>There Is no items in Your Cart</div>}
        </>


    )
}
