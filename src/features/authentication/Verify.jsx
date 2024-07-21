import React from 'react'
import Button from '../../Components/Button'

import { useNavigate } from 'react-router-dom';
import useVerify from './useVerify';
import { useForm } from 'react-hook-form';

export default function Verify() {





    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    const { status, mutateVerify } = useVerify()

    function onSubmit(data) {
        mutateVerify(data)
    }






    return (


        <section className=' dark:bg-primary-3 '>



            <form onSubmit={handleSubmit(onSubmit)} className='flex container layout flex-col items-center justify-center '>

                <div className='xs:full md:w-1/2  py-3  border rounded-lg bg-white dark:bg-primary-2 shadow-md '>
                    <h3 className=' relative 
                    py-2 px-3 
                    after:absolute after:h-[1px] after:w-full
                    after:left-0
                    after:bg-gray-300 after:bottom-0
                    text-primary
                    text-2xl
                    mb-4
                    '>Enter security code</h3>
                    <p className='py-3 px-3'>Please check your emails for a message with your code. Your code is 6 numbers long.</p>

                    <div className='flex xs:flex-col gap-3 md:flex-row px-3 mb-2 items-center  '>
                        <input name='resetCode' {...register("resetCode", {
                            maxLength: 6
                        })} className='border outline-none px-2 py-0.5 rounded-md w-full dark:text-black' type="text" placeholder='Enter code' />
                        <p className='text-sm text-gray-500 '>We sent your code to your email</p>
                    </div>




                    <div className='w-fit ms-auto px-4'>


                        <div className='flex items-end'>


                            <Button
                                type={'button'}
                                onclick={() => navigate('/login')}
                                styles={'text-primary  ms-3  me-2   px-3 bg-transparent border border-primary text-gray-800'} textContent={'Cancel'} />

                            <Button type={'submit'} styles={'text-white px-3 bg-sky'} textContent={'Continue'} isLoading={status === 'pending'} />




                        </div>
                    </div>




















                </div >


            </form >
        </section>
    )
}
