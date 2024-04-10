import React from 'react'
import { CiSearch } from "react-icons/ci";






export default function Searchbar() {
    return (
        <>

            <div className='flex items-center  bg-secondary-2 w-[300px] relative '>
                <input className='bg-inherit px-4 py-3 text-2 w-full ' placeholder='What are you looking for ?' id='search' type="text" />
                <i> <CiSearch />
                </i>
            </div>

        </>
    )
}
