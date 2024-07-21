
import React from 'react'
import { formatPrice } from '../utilities/helpres'
import useCart from '../features/cart/useCart'
export default function PayDetails({ children, handlePay }) {

    const { cart: { numOfCartItems, data: { products } = {} } = {}, } = useCart()

    const price = products?.reduce((acc, cur) => { return acc + (cur.price * cur.count) }, 0)
    const priceAfterTax = price + (price * 0.12)



    return (
        <div className='bg-[#ffd28d] dark:text-black dark:border-white
           xs:w-full lg:w-3/12 px-4 py-5 sticky top-20 rounded-xl
            border-black border flex flex-col gap-3'>
            <p className='mb-3 text-xl '>Cart Details</p>
            <div className='flex justify-between'>
                <p>Items</p>
                <p>{numOfCartItems}</p>
            </div>
            <div className='flex justify-between  items-center gap-3'>
                <p>Added Value Tax</p>
                <span className='flex items-center'>12%</span>
            </div>
            <div className='flex justify-between items-center gap-3  '>
                <p >Price After Tax </p>
                <span className='flex items-cente r'>{formatPrice(priceAfterTax)}</span>
            </div>
            <div className='flex justify-between items-center gap-3  '>
                <p >Discount </p>
                <span className='flex items-cente r'>12%</span>
            </div>
            <div className='flex justify-between text-lg text-primary font-bold  mt-3 pt-2 border-t border-black'>
                <p className=''>Total Price</p>
                <span className='flex items-center '>{formatPrice(price)}</span>
            </div>
            {children}


        </div>
    )
}
