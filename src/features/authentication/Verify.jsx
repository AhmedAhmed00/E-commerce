import React, { useState } from 'react'
import Button from '../../Components/Button'
import { useMutation } from '@tanstack/react-query';
import { verifyResetCode } from '../../Services/userApi';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import useVerify from './useVerify';
import { useForm } from 'react-hook-form';

export default function Verify() {





    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    const { data, isError, status, mutateVerify } = useVerify()

    function onSubmit(data) {
        console.log(data);
        mutateVerify(data)
    }






    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center bg-gray-100 header  '>

            <div className='w-1/2  py-3  border rounded-lg bg-white shadow-md '>
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

                <div className='flex px-3 mb-2 items-center  '>
                    <input name='resetCode' {...register("resetCode", {
                        maxLength: 6
                    })} className='border outline-none px-2 py-0.5 rounded-md' type="text" placeholder='Enter code' />
                    <p className='px-3 text-sm text-gray-500'>We sent your code to your email</p>
                </div>




                <div className='w-fit ms-auto px-4'>


                    <div className='flex items-end'>


                        <Button
                            type={'button'}
                            onclick={() => navigate('/login')}
                            styles={'text-primary  ms-3  me-2   px-3 bg-transparent border border-primary text-gray-800'} textContent={'Cancel'} />

                        <Button type={'submit'} styles={'text-white px-3'} textContent={'Continue'} isLoading={status === 'pending'} />




                    </div>
                </div>




















            </div >


        </form >
    )
}
