
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import sideImage from "../assets/SideImage.png"
import { useAuth } from '../features/authentication/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Input from '../Components/Input';
import { emailValid, passValid } from '../utilities/inputsValidation';

export default function Login() {

    const { isLoading, login, accessToken } = useAuth()
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    useEffect(() => {
        if (accessToken) {
            navigate('/home')
        }
    }, [accessToken, navigate])


    function onSubmit(data) {
        login(data);
    }
    function onError(err) {
        console.log(err);

    }



    return (<>
        <div className='flex container gap-8  justify-between items-center '>

            <div className='w-1/2 my-6'>
                <img src={sideImage} alt='products' />
            </div>





            <div className='w-1/2 text-primary'>

                <h3 className='text-3xl mb-2'>Log in to Exclusive</h3>
                <p>Enter your details below</p>


                <form onSubmit={handleSubmit(onSubmit, onError)} className=''>

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
                    <Link to={'/forgotpassword'} className='block my-2'>Forgot Password ?</Link>


                    <Button isLoading={isLoading} textContent={"Login"} styles={'px-5 py-2 text-white'} />
                </form>




            </div>
        </div>


    </>
    )
}
