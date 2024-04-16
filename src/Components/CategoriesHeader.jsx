import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../Services/ProductsApi';
import { Link } from 'react-router-dom';



export function useCategoties() {
    const { data: categories, isError, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })
    return { categories, isError, isLoading }
}


export default function CategoriesHeader() {



    const { categories, isError, isLoading } = useCategoties()







    return (
        <div className=' hidden lg:flex-1 border border-black list-none lg:flex lg:flex-col lg:justify-between font-semibold px-5 py-2 rounded-sm shadow-md'>
            {categories?.map(categoryItem => <li key={categoryItem._id} className='list underline hover:text-primary hover:transition duration-150 '>
                <Link>{categoryItem.name}</Link>
            </li>)}
        </div>
    )
}

