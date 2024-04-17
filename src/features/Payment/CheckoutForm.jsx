import React, { useContext, useEffect } from 'react'
import useCashPay from './useCashPay'
import useOnlineOrder from './useOnlineOrder'
import { useForm } from 'react-hook-form'
import useCart from '../cart/useCart'
import { CreatedOrderContext } from '../../Context/CreatedOrderContext'




export default function CheckoutForm() {



    const { register, handleSubmit } = useForm()




    const { cart, cart: { numOfCartItems, data: { _id, cartOwner, products } = {} } = {}, isLoading } = useCart()

    const { addCashOrder } = useCashPay()
    const { addOnlineOrder } = useOnlineOrder()


    const { setCreatedOrder } = useContext(CreatedOrderContext)


    useEffect(() => {
        return setCreatedOrder({})
    }, [setCreatedOrder])




    function onSubmit({ details, phone, city, paymentMethod }) {


        const body = {
            shippingAddress: {
                details,
                phone,
                city,
            }
        }


        if (paymentMethod === "cash") {

            addCashOrder(body)
        }
        else if (paymentMethod === "online") {

            addOnlineOrder(body)

        }

        else return
    }







    return (

        <>

            <div >
                <h3 className='col-start-1 col-end-3 text-2xl mb-3 tex-4xl text-primary'>Checkout</h3>
                <form id='checkoutForm' className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-3'>

                        <p className='col-start-1 col-end-3'>Personal Information:</p>
                        <div className='' >
                            <label htmlFor="firstName" className='text-sm text-gray-700'>First Name</label>
                            <input id='firstName' className='rounded-lg  w-full px-1 py-1  border ' type="text" />
                        </div>
                        <div className='' >
                            <label htmlFor="lastName" className='text-sm text-gray-700'>Last Name</label>
                            <input id='lastName' className='rounded-lg  w-full px-1 py-1  border ' type="text" />
                        </div>


                        <div className='phone '>
                            <label {...register("phone", {
                            })} htmlFor="phone" className='text-sm text-gray-700'>Phone</label>
                            <input value="01115012004" id='phone' className='rounded-lg  w-full px-1 py-1  border ' type="text" />
                        </div>



                        <div className='mb-4 email' >
                            <label htmlFor="email" className='text-sm text-gray-700'>Email</label>
                            <input id='email' className='rounded-lg  w-full px-1 py-1  border ' type="text" />
                        </div>




                        <p className='col-start-1 col-end-3'>Delivery details:</p>


                        <div className='city' >
                            <label htmlFor="city" className='text-sm text-gray-700'>City</label>
                            <select {...register("city")} className='rounded-lg  w-full px-1 py-1  border ' name="city" id="city">
                                <option value="cairo">Cairo</option>
                                <option value="gize">Giza</option>
                                <option value="alexandria">Alexandria</option>
                                <option value="fayoum">Fayoum</option>
                                <option value="bani sweif">bani sweif</option>
                            </select>
                        </div>





                        <div className='' >
                            <label htmlFor="street" className='text-sm text-gray-700'>Streat</label>
                            <input id='street' className='rounded-lg shadow-sm w-full px-1 py-1  border ' type="text" />
                        </div>

                        <div className='' >
                            <label htmlFor="details" className='text-sm text-gray-700'>Details</label>
                            <textarea value="balada" {...register("details", {
                                required: "this input is requierd"
                            })} id='details' className='rounded-lg shadow-sm w-full px-1 py-1  border ' type="text" />
                        </div>


                    </div>

                    <p className='col-start-1 col-end-3'>Payment Method:</p>



                    <div>

                        <div className='flex justify-between items-center border-b'>



                            <label htmlFor="cash">
                                <input  {...register("paymentMethod", { required: true })} name='paymentMethod' id='cash' value="cash" className='me-1' type="radio" />
                                Cash Payment</label>

                            <div className='w-12'>
                                <img className='' src="../.././../public/assets/cashPay.png" alt="s" />
                            </div>

                        </div>

                        <div className='flex justify-between items-center border-b py-3'>

                            <label htmlFor="online">
                                <input {...register("paymentMethod", { required: true })} id='online' name='paymentMethod' value="online" className='me-1' type="radio" />
                                Online Payment
                            </label>
                            <div className='flex items-center'>

                                <div className='w-12'>
                                    <img className='' src="../.././../public/assets/visa.png" alt="" />
                                </div>
                                <div className='w-12'>
                                    <img className='' src="../.././../public/assets/masterCard.png" alt="" />
                                </div>

                            </div>


                        </div>



                    </div>
                </form>






            </div>




        </>


    )
}