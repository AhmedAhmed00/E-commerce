import React, { useState } from 'react'
import useCart from './useCart';
import CartItem from './CartItem';
import { clearCart } from '../../Services/cartApi';
import axios from 'axios';
import Button from './../../Components/Button';
import ConfirmDelettion from '../../Components/ConfirmDelettion';
import { AiOutlinePercentage } from 'react-icons/ai';
import { formatPrice } from '../../utilities/helpres';
import LoaderSpinner from '../../Components/LoaderSpinner';

export default function Cart() {



    const { cart, cart: { numOfCartItems, data: { _id, cartOwner, products } = {} } = {}, isLoading } = useCart()

    const price = products?.reduce((acc, cur) => { return acc + (cur.price * cur.count) }, 0)
    const priceAfterTax = price + (price * 0.12)








    return (
        <>
            {isLoading ? <LoaderSpinner /> : <div className='mt-4 relative'>

                <h3 className='text-2xl mb-1' >Shopping Bag</h3>
                <p><span className='font-bold text-primary'>{numOfCartItems} items</span>  In Your Cart</p>
                <div className='flex columns-2 justify-between  py-5 gap-12' >
                    <div className='w-9/12 border  shadow-md bg-white rounded-lg'>
                        <table >
                            <tr className='border-b '>
                                <th className='p-4  '>Product</th>
                                <th >Price</th>
                                <th >Quantity</th>
                                <th>Total Price</th>
                            </tr>
                            {products && products.map(product => <CartItem product={product} />)}

                        </table>
                    </div>
                    <div className="details w-3/12 px-5 py-8 self-start sticky top-20 bg-white rounded-xl shadow-md">
                        <div className='bg-[#ffd28d] px-4 py-5 rounded-xl border flex flex-col gap-y-2'>
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
                                <p>Price Before Tax</p>
                                <span className='flex items-center'>{formatPrice(price)}</span>
                            </div>
                            <div className='flex justify-between mt-3 pt-2 border-t border-black'>
                                <p>Total Price</p>
                                <span className='flex items-center'>{formatPrice(priceAfterTax)}</span>
                            </div>
                            <Button styles={'px-2 py-2 w-full mt-4 text-black font-bold bg-primary '} textContent={"Proced to Checkout"} />

                        </div>

                    </div>
                </div>
            </div>}



        </>


    )
}
