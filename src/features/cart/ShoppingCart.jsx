import React from 'react'
import useCart from './useCart';
import CartItem from './CartItem';
import Button from './../../Components/Button';

import LoaderSpinner from '../../Components/LoaderSpinner';
import PayDetails from '../../Components/PayDetails';
import { useNavigate } from 'react-router-dom';

export default function Cart() {


    const navigate = useNavigate()
    const { cart, cart: { numOfCartItems, data: { _id, cartOwner, products } = {} } = {}, isLoading, isError } = useCart()

    const price = products?.reduce((acc, cur) => { return acc + (cur.price * cur.count) }, 0)
    const priceAfterTax = price + (price * 0.12)

    function handlePay() {
        navigate("/order/payment")
    }







    return (
        <>
            {isLoading ? <LoaderSpinner /> : isError ? <div className='header  container text-2xl'>You have no cart yet</div> :



                <div className='mt-4 relative container'>

                    {numOfCartItems ? <>


                        <div>
                            <h3 className='text-2xl mb-1' >Shopping Bag</h3>
                            <p><span className='font-bold text-primary'>{numOfCartItems} items</span>  In Your Cart</p>
                        </div>

                        <div className='flex columns-2 justify-between items-start py-5 gap-12' >
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
                            <div className="details w-3/12 self-start sticky top-20  rounded-xl ">

                                <PayDetails  >
                                    <Button onclick={handlePay} styles={'px-2 py-2 w-full mt-4 text-black font-bold bg-primary '} textContent={"Proced to Checkout"} />
                                </PayDetails>

                            </div>


                        </div>


                    </> : "Your Cart Item is Empty"}


                </div>





            }



        </>


    )
}
