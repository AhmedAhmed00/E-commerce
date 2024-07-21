import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CreatedOrderContext } from '../../Context/CreatedOrderContext'
import Input from '../../Components/Input'
import { emailValid, nameValid, phoneValid } from '../../utilities/inputsValidation'
import visa from '../../../public/visa.png'
import masterCard from "../../../public/masterCard.png"
import cashPay from "../../../public/cashPay.png"




export default function CheckoutForm({ addCashOrder, addOnlineOrder }) {



    const { register, handleSubmit, formState: { errors } } = useForm()







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

            <div className='xs:w-full lg:w-9/12 shadow-lg dark:bg-primary-2  border border-black dark:border-white p-4 rounded-xl gap' >
                <h3 className='col-start-1 col-end-3 text-2xl mb-3 tex-4xl text-primary'>Checkout</h3>
                <form id='checkoutForm' className='' onSubmit={handleSubmit(onSubmit)}>


                    <div className='md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 mb-3 '>

                        <p className='col-start-1 col-end-3'>Personal Information:</p>


                        <div className="flex flex-col">
                            <Input

                                type={'firstName'}
                                id={'firstName'}
                                errors={errors}
                                name={'firstName'}
                                register={register} regex={nameValid}
                                label={'First Name'}
                                className={'w-full'}
                            />
                        </div>
                        <div className="flex flex-col ">
                            <Input

                                type={'lastName'}
                                id={'lastName'}
                                errors={errors}
                                name={'lastName'}
                                register={register} regex={nameValid}
                                label={'Last Name'}

                            />
                        </div>
                        <div className="flex flex-col ">
                            <Input

                                type={'tel'}
                                id={'phone'}
                                errors={errors}
                                name={'phone'}
                                register={register} regex={phoneValid}
                                label={'Phone Number'}

                            />
                        </div>

                        <div className="flex flex-col ">
                            <Input

                                type={'tel'}
                                id={'email'}
                                errors={errors}
                                name={'email'}
                                register={register} regex={emailValid}
                                label={'Email'}
                            />
                        </div>




                        <p className='col-start-1 col-end-3'>Delivery details:</p>





                        <div className='city ' >
                            <label htmlFor="city" className=''>City</label>
                            <select {...register("city")} className='rounded-lg profile-input  w-full  ' name="city" id="city">
                                <option value="cairo">Cairo</option>
                                <option value="gize">Giza</option>
                                <option value="alexandria">Alexandria</option>
                                <option value="fayoum">Fayoum</option>
                                <option value="bani sweif">Bani sweif</option>
                            </select>
                        </div>





                        <div className="flex flex-col ">
                            <Input

                                type={'text'}
                                id={'street'}
                                errors={errors}
                                name={'street'}
                                register={register}
                                label={'Street'}
                                regex={{
                                    required: "this input is requierd"
                                }}
                            />
                        </div>


                        <div className="flex flex-col ">
                            <Input

                                type={'text'}
                                id={'details'}
                                errors={errors}
                                name={'details'}
                                register={register} regex={{
                                    required: "this input is requierd"
                                }}
                                label={"Details"}
                            />
                        </div>


                    </div>

                    <p className='col-start-1 col-end-3'>Payment Method:</p>



                    <div>

                        <div className='flex justify-between items-center border-b'>
                            <div className=''>
                                <Input
                                    label={"Cash Payment"}
                                    type={'radio'}
                                    id={'cash'}
                                    errors={errors}
                                    name={'paymentMethod'}
                                    defaultValue={'cash'}
                                    className={'mx-2'}
                                    register={register} regex={{
                                        required: "this input is requierd"
                                    }}
                                />
                            </div>


                            <div className='w-12'>
                                <img className='' src={cashPay} alt="s" />
                            </div>

                        </div>




                        <div className='flex justify-between items-center pt-2'>

                            <div className='' >
                                <Input
                                    label={"Online Payment"}
                                    type={'radio'}
                                    id={'online'}
                                    errors={errors}
                                    name={'paymentMethod'}
                                    defaultValue={'online'}
                                    className={'mx-2'}
                                    register={register} regex={{
                                        required: "Payment Method is requierd"
                                    }}
                                />
                            </div>




                            <div className='flex items-center'>

                                <div className='w-12'>
                                    <img className='' src={visa} alt="" />
                                </div>
                                <div className='w-12'>
                                    <img className='' src={masterCard} alt="" />
                                </div>

                            </div>


                        </div>



                    </div>
                </form>






            </div>




        </>


    )
}