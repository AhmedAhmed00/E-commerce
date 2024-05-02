import { CiSearch } from "react-icons/ci";
import SearchProducts from '../features/Products/SearchProducts';
import { useState } from 'react';
import useProducts from '../features/Products/useProducts';


export default function Searchbar() {




    const [searchQuery, setSearchQuery] = useState("")

    const { data: { data } = {} } = useProducts()

    let arrOfResaults = []

    if (searchQuery.length > 0) {
        arrOfResaults = data?.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }









    return (
        <>
            <div className='flex items-center rounded-lg  px-4 py-1.5 text-sm bg-vanilla text-[#191f40] border border-black  relative'>
                <input defaultValue={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='bg-inherit me-6 focus:border-none w-full focus:outline-none text-sm pe-3 hidden md:block' placeholder='What are you looking for' id='search' type="text" />
                <i className='text-xl  bg-primary text-white rounded-e-lg     absolute right-0 top-0 bottom-0 flex items-center px-2 '> <CiSearch />
                </i>
                {arrOfResaults.length ? <SearchProducts setSearchQuery={setSearchQuery} arrOfResaults={arrOfResaults} />
                    : ''}
            </div>

        </>
    )
}


