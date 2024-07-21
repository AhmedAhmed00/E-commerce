import Button from '../../Components/Button';
import PayDetails from '../../Components/PayDetails';
import CheckoutForm from './CheckoutForm';
import useCashPay from './useCashPay';
import useOnlineOrder from './useOnlineOrder';


export default function Payment() {

    const { addCashOrder, status: cashLoading } = useCashPay()
    const { addOnlineOrder, status: onlineLoading } = useOnlineOrder()





    return (

        <>

            <div className='flex xs:flex-col lg:flex-row justify-between container py-6 items-center gap-6  '>
                <CheckoutForm addCashOrder={addCashOrder} addOnlineOrder={addOnlineOrder} />
                <PayDetails >
                    <Button isLoading={(cashLoading === 'pending' || onlineLoading === 'pending')} type={"submit"} formId={"checkoutForm"} styles={'px-2 py-2 w-full mt-4 text-white font-bold bg-sky '} textContent={"Confirm Checkout"} />
                </PayDetails>
            </div>



        </>


    )
}
