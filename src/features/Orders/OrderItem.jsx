import { TbTruckDelivery } from "react-icons/tb";
import { formatPrice } from '../../utilities/helpres'
import { formatDate } from './../Payment/OrderStatus';
import { Link } from 'react-router-dom';


export default function Order({ order, selectedItemId, setSelectedItemId }) {
    const { id, totalOrderPrice, cartItems, createdAt } = order


    function handleSelectedItem(id) {
        setSelectedItemId(id)
    }



    return (


        <Link
            onClick={() => handleSelectedItem(id)}


            to={`${id}`} className={`flex px-3 justify-between py-4
                          items-center font-oswald
                          text-sm text-primary border-b
                           ` + (selectedItemId === id ? 'bg-primary-2 ' : "")}     >
            <div className='' >
                <p>#{id}</p>
                <p className='my-0.5'>{formatDate(createdAt)}</p>
                <p>{cartItems.length} items</p>
            </div>

            <p className='text-[#aa813f]'>{formatPrice(totalOrderPrice)}</p>

            <div >
                <div className='flex items-center   '>
                    <i className='text-lg me-1 text-[#0071dc]' ><TbTruckDelivery /></i>
                    <p className='text-md text-[#0071dc]'>In Progress</p>
                </div>

                <div className='flex
                  justify-between py-2 relative 
                   before:absolute before:top-[50%] before:-translate-y-[50%] before:z-40  before:w-2/3 before:h-[3px] before:bg-[#0071dc]
                   after:absolute after:top-[50%] after:-translate-y-[50%] after:z-30 after:w-full after:h-[3px] after:bg-gray-300
                '>
                    <span className='rounded-full w-2 h-2 relative z-40 bg-[#0071dc] '></span>
                    <span className='rounded-full w-2 h-2 relative z-40 bg-[#0071dc]'></span>
                    <span className='rounded-full w-2 h-2 relative z-40 bg-[#0071dc]'></span>
                    <span className='rounded-full w-2 h-2 relative z-40 bg-gray-300 '></span>



                </div>
            </div>



        </Link >


    )
}
