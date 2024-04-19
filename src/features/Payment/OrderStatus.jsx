import { jwtDecode } from 'jwt-decode';
import { formatPrice } from "../../utilities/helpres"
import { useContext } from 'react';
import { CreatedOrderContext } from '../../Context/CreatedOrderContext';



export function formatDate(timeStamp, format) {
    const date = new Date(timeStamp)
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return new Intl.DateTimeFormat('en-US', options).format(date)
}

export default function OrderStatus() {




    const { createdOrder } = useContext(CreatedOrderContext)


    const { totalOrderPrice, isConfrimed, date, id } = createdOrder




    const decodedToken = jwtDecode(localStorage.getItem("accessToken"))







    return (



        <div className='mt-6 mb-12 '>
            <h3 className='text-xl py-1'>Order Details {id ? `#${id}` : ''} <span className='font-oswald bg-primary text-white ms-4 text-base px-3 py-0.5  rounded-lg'>{isConfrimed ? "Shipping" : "notConfrimed"}</span></h3>

            <p className='font-oswald'>{date && formatDate(date)}</p>

            <div className={` 
            mt-6 relative  flex justify-between
            before:-z-10 before:absolute before:start-0 before:end-0 before:w-full before:h-[2px] before:bg-gray-300 before:top-[50%] before:-translate-y-[50%] `
                +
                (isConfrimed && ` after:-z-10 after:absolute after:start-0 after:end-0 after:w-1/2 after:h-[2px] after:bg-primary after:top-[50%] after:-translate-y-[50%]`)


            }>
                <span className={`w-8 h-8 p-5 flex items-center justify-center  text-center rounded-full text-white bg-gray-300 ` + (isConfrimed && ` bg-primary text-white`)}>&#10004;</span>
                <span className={`w-8 h-8  p-5  flex items-center justify-center  bg-gray-300  text-center rounded-full text-white ` + (isConfrimed && ` bg-primary text-white`)}>2</span>
                <span className='w-8 h-8  p-5   flex items-center justify-center bg-gray-300 text-center rounded-full text-black'>3</span>


            </div>

            <div className='flex justify-between my-4'>

                <div>
                    <p >Order Confrimed</p>
                    <p className='font-oswald'>{date ? formatDate(date) : "not Confrimed yet"}</p>
                </div>
                <div >
                    <p>Shipping items</p>
                    <p>Shipped With FedEx</p>
                </div>
                <div className='text-end'>
                    <p>To Delever</p>
                    <p>Cash on Deleviry</p>
                </div>
            </div>
            {
                isConfrimed &&
                <>            <div className='flex columns-3 gap-4'>

                    <div className='w-1/2 '>
                        <label className='block' htmlFor="">Orderd For</label>
                        <input className='w-full capitalize px-3 py-1.5 border my-2 rounded-md' type="text" value={decodedToken.name} />
                    </div>

                    <div className='w-1/2'>
                        <label className='block' htmlFor="">Payment Method</label>
                        <input className='w-full capitalize px-3 py-1.5 border my-2 rounded-md' type="text" value={"Cash"} />
                    </div>
                    <div className='w-1/2'>
                        <label className='block' htmlFor="">Total Order Price</label>
                        <input className='w-full capitalize px-3 py-1.5 border my-2 rounded-md ' type="text" value={formatPrice(totalOrderPrice)} />
                    </div>
                </div>
                    <h2 className='text-center my-5 text-green-500 text-2xl'>Your order is created Successfully, Thank you ya <span className='capitalize'>{decodedToken.name.split(" ").slice(0, 1)}</span>  </h2>
                </>

            }

        </div >




    )
}
