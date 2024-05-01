import React, { useState } from 'react'
import useOrders from './useOrders';
import OrderItem from './OrderItem';
import { Outlet } from 'react-router-dom';
import LoaderSpinner from './../../Components/LoaderSpinner';
import { MdCancel } from 'react-icons/md';


export default function Orders() {


    const { orders, isError, isLoading } = useOrders()
    const [showDetailsInMobile, setShowDetailsInMobile] = useState(false)
    function handleShowDetails() {
        setShowDetailsInMobile(show => !show)

    }

    const [selectedItemId, setSelectedItemId] = useState(null);


    return (
        <>
            {
                isLoading ?
                    <LoaderSpinner />
                    : isError ? <div>errrrrrrrrrrrrrrrrror</div> : <>
                        <div className='flex flex-wrap gap-5 my-6 container justify-between items-stretch'>

                            <div className='xs:w-full  md:w-5/12  lg:w-4/12 xl:w-3/12 self-start max-h-screen sticky top-20   overflow-y-scroll   rounded-lg border shadow-sm'>
                                <h3 className='text-head px-3 py-3 border border-b'>Order history</h3>
                                {orders.length ? orders.map(order => <OrderItem order={order}
                                    key={order.id} handleShowDetails={handleShowDetails} selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId} />)
                                    :
                                    <div className='p-3 text-center'>there Is no Orders yet</div>}
                            </div>
                            <div className=
                                {`
                            xs:fixed
                            xs:inset-0
                            xs:backdrop-blur-sm
                            xs-bg-black
                            xs:z-50
                            xs:justify-center
                            xs:items-center
                            xs:bg-black
                            xs:bg-opacity-50
                            md:static
                            md:z-0
                            md:block
                            md:justify-start 
                            md:items-start
                            md:bg-transparent
                            md:backdrop-blur-0
                            md:flex-1
                             ` + (showDetailsInMobile ? `xs:flex` : `xs:hidden`)} >
                                <MdCancel onClick={handleShowDetails} className='top-5 right-5 text-2xl text-white cursor-pointer absolute md:hidden' />


                                <Outlet />
                            </div>

                        </div>
                    </>
            }

        </>



    )
}
