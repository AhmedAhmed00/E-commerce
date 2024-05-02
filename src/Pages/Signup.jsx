import React, { useState } from 'react'
import sideImage from "../../public/SideImage.png"
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Input from '../Components/Input';
import { emailValid, nameValid, passValid, phoneValid } from '../utilities/inputsValidation';
import { useAuth } from '../Context/AuthContext';



export default function Signup() {

  const { register, formState: { errors }, handleSubmit, getValues } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()




  const { signUp } = useAuth()


  async function onSubmit(data) {
    const body = await data
    setIsLoading(true)
    try {
      const res = await signUp(body)
      if (res.data.message === "success") {
        toast.success("Successfully Created")
        navigate("/home")
        setIsLoading(false)
      }

    }
    catch (err) {
      if (err.response.status === 409) {
        toast.error("This Account is already exist")
        setIsLoading(false)
      }
      else {
        toast.error("Error while fetching data")
        setIsLoading(false)
      }


    }
    finally {
      setIsLoading(false)

    }









    // try {
    //   setIsLoading(true)
    //   const resData = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", data)
    //   if (resData.data.message === "success") {
    //     toast.success("Successfully Created")
    //     navigate("/login")
    //   }
    // }
    // catch (err) {
    //   if (err.response.status === 409) toast.error("This Account is already exist")
    //   else {
    //     toast.error("Error while fetching data")
    //   }

    // }
    // finally {
    //   setIsLoading(false)
    // }
  }

  return (

    <div className='container flex py-6 gap-x-6 items-center layout'>


      <div className='xs:hidden md:block md:w-1/2'>
        <img className='w-full' src={sideImage} alt='products
        ' />
      </div>


      <div className='xs:w-full md:w-1/2 text-primary'>
        <h3 className='text-3xl mb-2'>Create an account</h3>
        <p>Enter Your details below</p>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' >

          <div className="flex flex-col ">
            <Input
              type={'text'}
              id={'name'}
              errors={errors}
              name={'name'}
              placeholder={'Your Name'}
              register={register} regex={nameValid}
            />
          </div>


          <div className="flex flex-col ">
            <Input
              type={'email'}
              id={'email'}
              errors={errors}
              name={'email'}
              placeholder={'Email'}
              register={register} regex={emailValid}
            />
          </div>









          <div className='flex flex-col '>
            <Input
              type={'tel'}
              id={'phone'}
              errors={errors}
              placeholder={'Phone Number'}
              name={'phone'}
              register={register} regex={phoneValid}
            />
          </div>

          <div className='flex flex-col '>
            <Input
              placeholder={'Password'}
              id={'password'}
              name={'password'}
              readOnly={false}
              type={'password'}
              register={register}
              regex={passValid}
              errors={errors} />

          </div>


          <div className='flex flex-col '>
            <Input
              id={'rePassword'}
              name={'rePassword'}
              placeholder={'Confirm password'}
              type={'password'}
              errors={errors}
              register={register} regex={{
                required: "Required Input",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: "start with capital letter, at least one number and symbol"

                },
                validate: (value) =>
                  value === getValues().password || "passwords doesn't match"

              }} />
          </div>


          <Button isLoading={isLoading} textContent={"Create Account"} styles={'px-5 bg-primary py-2 text-white'} />
        </form>


      </div>




    </div>
  )
}
