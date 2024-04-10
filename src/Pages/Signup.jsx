import React, { useState } from 'react'
import sideImage from "../assets/SideImage.png"
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';



export default function Signup() {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const { register, formState: { errors }, handleSubmit, getValues } = useForm()


  function onError(errors) {
    console.log(errors);
  }


  async function onSubmit(data) {
    try {
      setIsLoading(true)
      const resData = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", data)
      if (resData.data.message === "success") {
        toast.success("Successfully Created")
        navigate("/login")
      }
    }
    catch (err) {
      console.log(err);
      toast.error("There is an error")

    }
    finally {
      setIsLoading(false)
    }
  }
  return (

    <div className='flex justify-between items-center text-c'>
      <div className='w-5/12'>

        <img src={sideImage} alt='products
        ' />
      </div>
      <div className='w-1/2'>
        <h3 className='text-3xl mb-3'>Create an account</h3>
        <p>Enter Your details below</p>

        <form onSubmit={handleSubmit(onSubmit, onError)} className='mt-5'>

          <input name='name' {...register("name", {
            required: "This input is required",
            min: 3,
            max: 12,
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
              message: "Must be three chars at least and must be valid name"
            },


          })} type="text" placeholder='Name' className='px-3 py-2 border-b-2  w-full mb-3' />
          {errors.name ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.name.message}</small> : ""
          }
          <input name='email' {...register("email", {
            required: "Required input", pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email"

            }
          })} type="text" placeholder='Email' className='px-3 py-2 border-b-2 mt-2  w-full mb-3' />
          {errors.email ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.email.message}</small> : ""
          }
          <input name='phone' {...register("phone", {
            required: "Required input", pattern: {
              value: /^(01|02|03|010|011|012|015)[0-9]{8}$/
              ,
              message: "Must be egyptian phone number"

            }
          })} type="text" placeholder='Phone Number' className='px-3 py-2 border-b-2  w-full mb-3' />
          {errors.phone ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.phone.message}</small> : ""
          }
          <input name='password' {...register("password", {
            required: "Required Input", pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "start with capital letter, at least one number and symbol"

            }
          })} type="password" placeholder='Password' className='px-3 py-2 border-b-2  w-full mb-3' />
          {errors.password ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.password.message}</small> : ""
          }
          <input name='rePassword' {...register("rePassword", {
            validate: (value) =>
              value === getValues().password || "passwords doesn't match"

          })} type="rePassword" placeholder='rePassword' className='px-3 py-2 border-b-2  w-full mb-3' />
          {errors.rePassword ? <small className='bg-red-200 px-3 py-1 inline-block w-full rounded' >{errors.rePassword.message}</small> : ""
          }

          <Button isLoading={isLoading} textContent={"Create Account"} />
        </form>




      </div>
    </div>
  )
}
