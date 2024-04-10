import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function Searchbar() {
    return (
        <>
            <div className='flex items-center px-4 py-2 bg-gray-200 rounded-sm'>
                <input className='bg-inherit focus:border-none w-full focus:outline-none text-sm pe-3 ' placeholder='What are you looking for' id='search' type="text" />
                <i className='text-xl'> <CiSearch />
                </i>
            </div>

        </>
    )
}
