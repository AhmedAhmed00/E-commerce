import Button from '../../Components/Button'
import { ThreeDots } from 'react-loader-spinner'
import Input from '../../Components/Input'
import { useForm } from 'react-hook-form'
import { emailValid, passValid } from '../../utilities/inputsValidation'
import { useMutation } from '@tanstack/react-query'
import { resetPass } from '../../Services/userApi'
import toast from 'react-hot-toast'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useNewPass from './useNewPass'

export default function NewPassword() {





    const { register, formState: { errors }, handleSubmit, } = useForm()



    let navigate = useNavigate()

    const { isError, resetData, status } = useNewPass()

    function onSubmit(data) {
        console.log(data);
        resetData(data)
    }









    return (

        <form onSubmit={handleSubmit(onSubmit)} className='flex layout flex-col items-center justify-center bg-gray-100'>

            <div className='w-1/2  py-3  border rounded-lg bg-white shadow-md '>


                <h3 className='relative 
                    text-xl
                    py-2 px-3 
                    after:absolute after:h-[1px] after:w-full
                    after:left-0
                    after:bg-gray-300 after:bottom-0
                    '>Choose a new password and email</h3>

                <p className='py-3 px-3 text text-gray-500 '>
                    Create a new password that is at least 8 characters long. A strong password has a combination of letters, digits and punctuation marks.</p>



                <div className='flex flex-col px-3 mb-2 items-center  '>
                    <Input
                        key={1}
                        type={'email'}
                        id={'email'}
                        errors={errors}
                        name={'email'}
                        placeholder={'Email'}
                        register={register}
                        regex={emailValid}
                        className={"w-full"}
                    />
                    <Input
                        key={2}
                        placeholder={'New Password'}
                        id={'newPassword'}
                        name={'newPassword'}
                        readOnly={false}
                        type={'newPassword'}
                        register={register}
                        regex={passValid}
                        errors={errors}
                        className={"w-full"}
                    />

                </div>





                <div className='px-3 pb-3 ms-auto flex w-fit items-center'>
                    <Button
                        onclick={() => navigate('/login')}
                        styles={'text-primary  ms-3  me-2   px-3 bg-transparent border border-primary text-gray-800'} textContent={'Cancel'} />
                    <Button styles={'text-white px-3'} textContent={'Continue'} isLoading={status === 'pending'} />


                </div>

            </div>


        </form>


    )
}
