import React, { useState } from 'react'
import sideImage from "../assets/SideImage.png"
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Input from '../Components/Input';
import { emailValid, nameValid, passValid, phoneValid } from '../utilities/inputsValidation';



export default function Signup() {

  const { register, formState: { errors }, handleSubmit, getValues } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()




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

    <div className='flex container mb-8 gap-8 justify-between items-center '>


      <div className='w-1/2'>

        <img className='w-full  ' src={sideImage} alt='products
        ' />
      </div>

      <div className='w-1/2 text-primary'>
        <h3 className='text-3xl mb-2'>Create an account</h3>
        <p>Enter Your details below</p>

        <form onSubmit={handleSubmit(onSubmit, onError)} className='mt-2'>

          <div className="flex flex-col ">
            <Input key={1}
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
              key={2}
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
              key={3}
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
              key={2}
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
              key={3}
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


          <Button isLoading={isLoading} textContent={"Create Account"} styles={'px-5 py-2'} />
        </form>




      </div>




    </div>
  )
}
