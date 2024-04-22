import React, { useState } from 'react'
import OrderStatus from './OrderStatus'
import Payment from './Payment'
import CreatedOrder from './CreatedOrder'
import { Outlet, useLocation } from 'react-router-dom'
import useCart from '../cart/useCart'

export default function Order() {

    const [orderStatus, setOrderStatus] = useState({})
    const { cart: { numOfCartItems, data: { products } = {} } = {}, } = useCart()





    return (
        <>
            {numOfCartItems ? <div className='container'>
                <OrderStatus setOrderStatus={setOrderStatus} totalOrderPrice={orderStatus.totalOrderPrice} isConfrimed={orderStatus.isConfrimed} />
                <Outlet />
            </div> : <div className='p-5   text-2xl'>There Is no items in Your Cart</div>}
        </>


    )
}
