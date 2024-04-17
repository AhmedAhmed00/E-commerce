import React from 'react'
import { useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import OrderStatus from './OrderStatus';
// import OrderdItem from './OrderdItem';

export default function OrderCreated() {

    const location = useLocation();
    const order = location.state && location.state.order;

    const { data: { cartItems, createdAt, id, isDelivered, isPaid, paymentMethodType, totalOrderPrice, } } = order

    function formatDate(timeStamp, format) {
        const date = new Date(timeStamp)
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        return new Intl.DateTimeFormat('en-US', options).format(date)

    }

    const decodedToken = jwtDecode(localStorage.getItem("accessToken"))
    console.log(decodedToken);


    console.log(cartItems)

    return (

        <div className='mt-6'>




            {/* <OrderStatus totalOrderPrice={totalOrderPrice} date={createdAt} isConfrimed={true} confirmStyles='bg-primary text-white' /> */}




        </div>






    )
}


