import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function Searchbar() {
    return (
        <>
            <div className='flex items-center px-4 py-1.5 text-sm bg-[#f4f4f4] text-[#191f40] border border-black  rounded-lg relative'>
                <input className='bg-inherit me-6 focus:border-none w-full focus:outline-none text-sm pe-3 hidden md:block' placeholder='What are you looking for' id='search' type="text" />
                <i className='text-xl  bg-primary text-white     absolute right-0 top-0 bottom-0 flex items-center px-2 rounded-e-lg'> <CiSearch />
                </i>
            </div>

        </>
    )
}
