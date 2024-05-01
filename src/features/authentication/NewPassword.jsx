import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { useForm } from 'react-hook-form'
import { emailValid, passValid } from '../../utilities/inputsValidation'

import { useNavigate } from 'react-router-dom'
import useNewPass from './useNewPass'

export default function NewPassword() {





    const { register, formState: { errors }, handleSubmit, } = useForm()



    let navigate = useNavigate()

    const { resetData, status } = useNewPass()

    function onSubmit(data) {
        resetData(data)
    }









    return (
        <section className='bg-gray-100 '>


            <form onSubmit={handleSubmit(onSubmit)} className='flex layout flex-col items-center justify-center container'>

                <div className=' xs:w-96 md:w-1/2   py-3  border rounded-lg bg-white shadow-md '>


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
                            type={'password'}
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
                        <Button styles={'text-white bg-sky px-3'} textContent={'Continue'} isLoading={status === 'pending'} />


                    </div>

                </div>


            </form>

        </section>
    )
}
