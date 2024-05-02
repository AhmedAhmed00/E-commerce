import React, { useState } from 'react'
import useCart from './useCart';
import CartItem from './CartItem';
import Button from './../../Components/Button';
import LoaderSpinner from '../../Components/LoaderSpinner';
import PayDetails from '../../Components/PayDetails';
import { useNavigate } from 'react-router-dom';
import useClearCart from './useClearCart';
import ConfirmDelettion from '../../Components/ConfirmDelettion';

export default function Cart() {

    const [confirmShow, setConfirmShow] = useState(false)
    const navigate = useNavigate()
    const { cart: { numOfCartItems, data: { products } = {} } = {}, isLoading, isError } = useCart()

    const { clearCartItems } = useClearCart()

    function handlePay() {
        navigate("/order/payment")
    }

    function handleClearCart() {

        clearCartItems()
        setConfirmShow(show => !show)

    }




    return (
        <>
            {isLoading ? <LoaderSpinner /> : isError ? <div className='container py-6 text-2xl'>You have no cart yet</div> :


                <div className='py-6 relative container'>
                    {confirmShow && <ConfirmDelettion handleDeletion={() => handleClearCart()} setConfirmShow={setConfirmShow} />}



                    {numOfCartItems ? <>
                        <div>
                            <h3 className='text-head' >Shopping Bag</h3>
                            <p className='mb-2'><span className='font-bold text-title'>{numOfCartItems} items</span>  In Your Cart</p>
                        </div>


                        <div className='flex  xs:flex-col lg:flex-row justify-between items-start gap-6' >


                            <div className='xs:w-full lg:w-9/12 border  shadow-md bg-white rounded-lg'>
                                <table className=' w-full'>

                                    <thead className='border-b'>
                                        <tr>
                                            <th className='py-4  '>Product</th>
                                            <th className=' xs:hidden md:table-cell' >Price</th>
                                            <th >Quantity</th>
                                            <th>Total Price</th>
                                        </tr>

                                    </thead>



                                    <tbody  >
                                        {products && products.map(product => <CartItem key={product._id} product={product} />)}

                                    </tbody>
                                </table>
                            </div>


                            <PayDetails  >
                                <Button onclick={handlePay} styles={'py-1.5 w-full mt-4 mb-1 font-bold bg-sky text-white '} textContent={"Proced to Checkout"} />
                                <Button onclick={() => setConfirmShow(show => !show)} styles='py-1.5 w-full mt-0  bg-red-700 text-white ' textContent={"Clear Cart"} />

                            </PayDetails>



                        </div>



                    </> : <p className='container py-6 text-xl'>Your Cart Item is Empty</p>}


                </div>





            }



        </>


    )
}
