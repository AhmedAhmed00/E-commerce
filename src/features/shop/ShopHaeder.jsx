import React from 'react'
import { VscSettings } from 'react-icons/vsc'

export default function ShopHaeder({ handleShowSpecList, handleSpecificationsChange }) {
    return (
        <div className='flex justify-between mb-4 gap-'>
            <h2 className='text-head'>Featured Products</h2>
            <div className='flex items-center gap-2' >

                <label htmlFor="sort" className='text-sm text-gray-700'>Sort Price</label>
                <select onChange={handleSpecificationsChange} className='rounded-lg  px-2 py-1 border' name="sort" id="sort">
                    <option value="">Not sorted</option>
                    <option value="price">Ascending</option>
                    <option value="-price">Descending </option>
                </select>
                <button onClick={handleShowSpecList} className='rounded-lg  px-2 py-1 border'>
                    <VscSettings fontSize={'28px'} />
                </button>
            </div>
        </div>
    )
}
