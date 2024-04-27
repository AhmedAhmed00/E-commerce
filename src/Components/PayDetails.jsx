
import React from 'react'
import { AiOutlinePercentage } from 'react-icons/ai'
import { formatPrice } from '../utilities/helpres'
import useCart from '../features/cart/useCart'
export default function PayDetails({ children, handlePay }) {

    const { cart: { numOfCartItems, data: { products } = {} } = {}, } = useCart()

    const price = products?.reduce((acc, cur) => { return acc + (cur.price * cur.count) }, 0)
    const priceAfterTax = price + (price * 0.12)






    return (
        <div className='bg-[#ffd28d] px-4 py-5 rounded-xl border-black border flex flex-col gap-y-2'>
            <p className='mb-3'>Cart Total</p>
            <div className='flex justify-between'>
                <p>Items</p>
                <p>{numOfCartItems}</p>
            </div>
            <div className='flex justify-between'>
                <p>Added Value Tax</p>
                <span className='flex items-center'>12<i><AiOutlinePercentage /></i></span>
            </div>
            <div className='flex justify-between '>
                <p>Price Before Tax <span className='text-sm'>(Real Price)</span> </p>
                <span className='flex items-center'>{formatPrice(price)}</span>
            </div>
            <div className='flex justify-between mt-3 pt-2 border-t border-black'>
                <p>Total Price</p>
                <span className='flex items-center'>{formatPrice(priceAfterTax)}</span>
            </div>
            {children}


        </div>
    )
}
