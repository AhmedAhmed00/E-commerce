import React from 'react'
import { FaUserLock } from 'react-icons/fa'
import Input from '../../Components/Input'
import { emailValid } from '../../utilities/inputsValidation'
import { useForm } from 'react-hook-form'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import useForgotPass from './useForgotPass'
import { ThreeDots } from 'react-loader-spinner'

export default function ForgotPass() {
    const { register, handleSubmit } = useForm()
    const { status, mutate: mutateForgottenPass } = useForgotPass()
    const navigate = useNavigate()


    function onSubmit(data) {
        mutateForgottenPass(data)
    }


    return (
        <form className=' flex flex-col layout bg-gray-100 ' onSubmit={handleSubmit(onSubmit)}>
            <div className="w-1/2 m-auto py-5  border rounded-lg bg-white shadow-md">


                <div className='flex flex-col items-center'>
                    <FaUserLock className='text-6xl bg-primary rounded-lg m-2 p-2 text-white' />
                    <h3 className='my-1 mb-3 text-2xl'>Forgot Password</h3>
                    <p className='text-sm w-1/2 text-gray-500 w-'>Enter the email you used to create your account so we can send you code for reseting your password</p>
                </div>
                <div className=' items-center w-1/2 m-auto py-3' >


                    <Input className={'w-full'} type={'email'} name={'email'} regex={emailValid}
                        placeholder={'example@mail.com'} errors={'email'}
                        id={'email'}
                        register={register} />

                    <Button type={'submit'} styles={'text-white  w-full mb-0'} textContent={'Send'} isLoading={status === 'pending'} />
                    <Button type={'button'} styles={'w-full border   bg-opacity-0  border-primary text-primary  '}

                        textContent={'Back To Login'} onclick={() => (navigate('/login'))} />

                </div>

            </div>


        </form>
    )
}
