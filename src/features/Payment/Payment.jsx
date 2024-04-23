import Button from '../../Components/Button';
import PayDetails from '../../Components/PayDetails';
import useCart from '../cart/useCart';
import CheckoutForm from './CheckoutForm';


export default function Payment() {






    return (

        <>

            <div className='flex justify-between gap-x-5 mb-12 '>
                <div className='w-9/12 shadow-lg  border border-black p-4 rounded-xl gap '>
                    <CheckoutForm />

                </div>
                <div className='details w-3/12 self-start sticky top-20'>
                    <PayDetails >
                        <Button type={"submit"} formId={"checkoutForm"} styles={'px-2 py-2 w-full mt-4 text-black font-bold bg-primary '} textContent={"Confirm Checkout"} />
                    </PayDetails>
                </div>

            </div>


        </>


    )
}
