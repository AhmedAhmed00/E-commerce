import React, { useState } from 'react'
import CounterBtn from '../../Components/CounterBtn';
import useUpdateCount from './useUpdateCount';
import { formatPrice, trimTitle } from '../../utilities/helpres';
import { TiDeleteOutline } from "react-icons/ti";
import useDeleteItem from './useDeleteCart';
import ConfirmDelettion from '../../Components/ConfirmDelettion';


export default function CartItem({ product }) {

    const { count, price, product: { brand: { name: brandName }, category: { name: categoryName }, id, imageCover, title } } = product



    const [confirmShow, setConfirmShow] = useState(false)

    const { mutateCount, status } = useUpdateCount()

    const { deleteItem } = useDeleteItem()


    function handleDecrease() {
        mutateCount({ id, quantiny: count - 1 })
    }

    function handleIncrease() {
        mutateCount({ id, quantiny: count + 1 })
    }

    function handleDeletion() {

        deleteItem(id)
        setConfirmShow(show => !show)

    }







    return (
        <>
            {confirmShow && <ConfirmDelettion handleDeletion={() => handleDeletion(id)} setConfirmShow={setConfirmShow} />}

            <tr className='border border-b relative '>

                <td className='flex ps-4 py-3 items-center '>
                    <img src={imageCover} alt="" className='w-24 h-24 rounded-2xl shadow-sm object-cover' />
                    <div className='px-6'>
                        <p className='text-red-700'>{trimTitle(title)}</p>
                        <p className='text-sm'> {categoryName}</p>
                        <p className='text-sm'>{brandName}</p>

                    </div>
                </td>
                <td className='text-center w-2/12  xs:hidden md:table-cell  font-bold  '>{formatPrice(price)}</td>
                <td className='text-center w-1/12'>{<CounterBtn quantiny={count} status={status} increase={handleIncrease} decrease={handleDecrease} />}</td>
                <td className='text-center w-2/12 font-bold px-3  '>{formatPrice(price * count)}</td>
                <td className='w-0'>
                    <button onClick={() => setConfirmShow(show => !show)} className='absolute right-3 top-3   text-red-600'><i><TiDeleteOutline /></i></button>
                </td>
            </tr>


        </>
    )
}
