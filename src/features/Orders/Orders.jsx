import React, { useState } from 'react'
import useOrders from './useOrders';
import OrderItem from './OrderItem';
import { Outlet } from 'react-router-dom';
import LoaderSpinner from './../../Components/LoaderSpinner';


export default function Orders() {


    const { orders, isError, isLoading } = useOrders()

    const [selectedItemId, setSelectedItemId] = useState(null);


    return (
        <>
            {
                isLoading ?
                    <LoaderSpinner />
                    : !isError && <>
                        <div className='flex gap-5 my-6 container justify-between'>

                            <div className='w-3/12 self-start max-h-screen sticky top-20   overflow-y-scroll   rounded-lg border shadow-sm'>
                                <h3 className='text-2xl px-3 pt-3 font-oswald text-primary'>Order history</h3>
                                {orders.length ? orders.map(order => <OrderItem order={order} key={order.id} selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId} />)
                                    :
                                    <div className='p-3 text-center'>there Is no Orders yet</div>}
                            </div>

                            <div className=' flex-1  ' >
                                <Outlet />
                            </div>

                        </div>
                    </>
            }

        </>



    )
}
