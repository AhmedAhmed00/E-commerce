import React, { useState } from 'react'
import { clearCart } from '../../Services/cartApi';
import CounterBtn from '../../Components/CounterBtn';
import axios from 'axios';
import useUpdateCount from './useUpdateCount';
import { formatPrice, trimTitle } from '../../utilities/helpres';
import { TiDeleteOutline } from "react-icons/ti";
import useDeleteItem from './useDeleteCart';
import ConfirmDelettion from '../../Components/ConfirmDelettion';


export default function CartItem({ product }) {

    const { count, _id, price, product: { brand: { name: brandName, _id: brandId }, category: { name: categoryName, _id: categoryId }, id, imageCover, title } } = product



    const [confirmShow, setConfirmShow] = useState(false)

    const { mutateCount, status } = useUpdateCount()

    const { deleteItem, status: deleteStatus } = useDeleteItem()


    function handleDecrease() {
        console.log(status);
        mutateCount({ id, quantiny: count - 1 })
    }

    function handleIncrease() {
        mutateCount({ id, quantiny: count + 1 })
    }

    function handleDeletion(id) {

        deleteItem(id)
        setConfirmShow(show => !show)

    }


    // function handleClear() {
    //     clearCartItems()
    //     setConfirmClearShow(show => !show)

    // }





    return (
        <>
            {confirmShow && <ConfirmDelettion handleDeletion={() => handleDeletion(id)} setConfirmShow={setConfirmShow} />}

            <tr className='after:h-[1px] after:bg-[#e8dfdf] after:left-4 after:right-4 after:bottom-0 after:absolute relative'>
                <button onClick={() => setConfirmShow(show => !show)} className='absolute right-4 top-3 text-red-600'><i><TiDeleteOutline /></i></button>
                <td className='flex ps-4 py-3 items-center '>
                    <img src={imageCover} alt="" className='w-24 h-24 rounded-2xl shadow-sm object-cover' />
                    <div className='px-6'>
                        <p className='text-red-700'>{trimTitle(title)}</p>
                        <p className='text-sm'> {categoryName}</p>
                        <p className='text-sm'>{brandName}</p>


                    </div>
                </td>
                <td className='text-center w-2/12 font-bold  '>{formatPrice(price)}</td>
                <td className='text-center w-1/12'>{<CounterBtn quantiny={count} status={status} increase={handleIncrease} decrease={handleDecrease} />}</td>
                <td className='text-center w-2/12 font-bold  '>{formatPrice(price * count)}</td>
            </tr>
        </>
    )
}
