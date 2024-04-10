import React, { useContext, useState } from 'react'
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import sideImage from "../assets/SideImage.png"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { setAccessToken } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()



    async function onSubmit(data) {
        try {
            setIsLoading(true)
            const resData = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", data)
            console.log(resData);
            localStorage.setItem('accessToken', resData.data.token)
            setAccessToken(resData.data.token)
            navigate("/home")

        }
        catch (err) {
            console.log(err);
            toast.error("There is an error")
        }
        finally {
            setIsLoading(false)
        }
    }
    function onError() {

    }





    return (<>
        <div className='flex justify-between items-center text-c'>
            <div className='w-5/12'>

                <img src={sideImage} alt='products' />
            </div>
            <div className='w-1/2'>
                <h3 className='text-3xl mb-3'>Log in to Exclusive</h3>
                <p>Enter your details below</p>

                <form onSubmit={handleSubmit(onSubmit, onError)} className='mt-5'>


                    <input name='email' {...register("email", {
                        required: "Required input", pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid Email"

                        }
                    })} type="text" placeholder='Email' className='px-3 py-2 border-b-2 mt-2  w-full mb-3' />
                    {errors.email ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.email.message}</small> : ""
                    }

                    <input name='password' {...register("password", {
                        required: "Required Input", pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: "start with capital letter, at least one number and symbol"

                        }
                    })} type="password" placeholder='Password' className='px-3 py-2 border-b-2  w-full mb-3' />
                    {errors.password ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.password.message}</small> : ""
                    }


                    <Button isLoading={isLoading} textContent={"Login"} />
                </form>




            </div>
        </div>


    </>
    )
}
